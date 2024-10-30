<?php

namespace Edoobox\Requests;

use Edoobox\Base\Options;
use Edoobox\Helpers\Arr;
use Edoobox\Base\Cache;
use Edoobox\Base\LogTime;
use Edoobox\Base\Settings;
use Edoobox\Requests\Helpers\Request;
use Edoobox\Requests\Helpers\Shortcode;
use Exception;

class Template {
    private $attributes;
    private $auth;
    private $settings;

    public function __construct($attributes) {
        $this->attributes = $attributes ?? Shortcode::$KNOWN_ATTRIBUTES;
        $this->auth = new Auth();
        $this->settings = new Settings();
    }

    public function fetchV1(): array {
        try {
            $environment = $this->settings->get("environment", 'app1');
            $query = $this->buildRequestQueryString();
            LogTime::start('fetch V1 ' . $environment);
            $apiData = wp_remote_get("https://$environment.edoobox.com/v1/templates$query", [
                'timeout' => Settings::SETTINGS_REQUEST_TIMEOUT
            ]);
            LogTime::stop('fetch V1 ' . $environment);
            Request::checkResponse($apiData);
            return [
                'api' => json_decode($apiData['body'], true),
                'provider_url' => $this->buildProviderUrl(Arr::get($this->attributes, 'root', ''))
            ];
        } catch ( Exception $exception ) {
            Request::renderException($exception);
            return [];
        }
    }

    public function fetchV2(): array {
        try {
            $environment = $this->settings->get(Settings::SETTINGS_ENVIRONMENT);
            $this->auth->authenticate();
            $query = $this->buildRequestQueryString();
            $url = "https://$environment.edoobox.com/v2/template$query";
            LogTime::start('fetch V2 ' . $environment);
            $apiData = wp_remote_get($url, [
                'headers' => [
                    "edid" => $this->auth->getEdid(),
                    "language" => $this->attributes["language"] ?? 'de',
                    "grant-type" => "access_token",
                    "Authorization" => "Bearer " . $this->auth->getAuthToken()
                ],
                'timeout' => Settings::SETTINGS_REQUEST_TIMEOUT
            ]);
            LogTime::stop('fetch V2 ' . $environment);
            Request::checkResponse($apiData);
            return [
                'api' => json_decode($apiData['body'], true),
                'provider_url' => $this->buildProviderUrl($this->attributes['root'] ?? '')
            ];
        } catch ( Exception $exception ) {
            Request::renderException($exception);
            return [];
        }
    }

    public function fetchTitleV1(): array {
        try {
            $environment = $this->settings->get(Settings::SETTINGS_ENVIRONMENT, 'app1');
            $query = "?cms_data=" . json_encode([
                    "api1" => $this->settings->get('public_key'),
                    "api2" => $this->settings->get('secret_key'),
                    "language" => $this->getLanguageForTitle()
                ]);
            $apiData = wp_remote_get("https://$environment.edoobox.com/v1/templates$query", [
                'timeout' => Settings::SETTINGS_REQUEST_TIMEOUT
            ]);
            Request::checkResponse($apiData);
            return ['api' => json_decode($apiData['body'], true)];
        } catch ( Exception $exception ) {
            Request::renderException($exception);
            return [];
        }
    }

    public function setDocumentTitle($title) {
        $uniqueKey = Page::getCurrentPageCacheKey();
        $cachedResponse = Cache::get($uniqueKey);

        if ( Arr::get($cachedResponse, 'api.data.header.title', false) ) {
            return Arr::get($cachedResponse, 'api.data.header.title');
        }

        $apiResponse = $this->settings->get(Settings::USE_V2) ? $this->fetchV2() : $this->fetchV1();

        Cache::set($uniqueKey, $apiResponse, Options::get('edoobox_cache_time_in_s', 0));

        return Arr::get($apiResponse, 'api.data.header.title', $title);
    }

    private function buildRequestQueryString(): string {
        $allowedQueries = ['edcode', 'edref', 'edtag', 'edlink', 'edstart', 'edend', 'edview', 'q'];
        $requestQueries = [];

        foreach ( $allowedQueries as $query ) {
            $queryValue = get_query_var($query);
            $valueIsEmpty = $queryValue === '' || $queryValue === null;

            if ( ! $valueIsEmpty ) {
                $requestQueries[$query] = $queryValue;
                continue;
            }

            if ( $query === 'q' && ($this->attributes['q'] ?? '') !== '' ) {
                $requestQueries['q'] = $queryValue;
                continue;
            }

            if ( array_key_exists((string)substr($query, 2), $this->attributes) && $this->attributes[substr($query, 2)] !== '' ) {
                $requestQueries[$query] = $this->attributes[substr($query, 2)] ?? '';
                continue;
            }

            if ( $query == 'edref' && ($this->attributes['label'] ?? '') !== '' ) {
                $requestQueries[$query] = $this->attributes['label'] ?? '';
            }
        }

        if ( $this->settings->get(Settings::USE_V2) ) {
            $requestQueries['filter'] = json_encode([
                [
                    'property' => 'template.path',
                    'value' => $this->buildTemplatePath()
                ],
                [
                    'property' => 'provider.url',
                    'value' => $this->buildProviderUrl($this->attributes['root'] ?? '')
                ]
            ]);
        } else {
            $requestQueries['cms_data'] = json_encode($this->buildRequestData());
        }

        return count($requestQueries) > 0 ? '?' . http_build_query($requestQueries) : '';
    }

    private function buildRequestData(): array {
        return [
            "api1" => $this->auth->getPublicKey(),
            "api2" => $this->auth->getSecretKey(),
            "language" => Arr::get($this->attributes, 'language', 'de'),
            "filter" => [[
                'property' => 'template.path',
                'value' => $this->buildTemplatePath()
            ]],
            "data" => [[
                'property' => 'provider.url',
                'value' => $this->buildProviderUrl(Arr::get($this->attributes, 'root', ''))
            ]]
        ];
    }

    private function buildProviderUrl(string $root = ''): string {
        if ( $root ) {
            return trailingslashit(esc_url($root));
        }
        // Retrieves the full permalink for the current post or post ID.
        return trailingslashit(esc_url(get_the_permalink()));
    }

    private function buildTemplatePath() {
        global $wp_query;
        // 'ed_url' is the part of the URL after the account code,
        // For instance used to display only a category or offer...
        if ( isset($wp_query->query_vars['ed_url']) && $wp_query->query_vars['ed_url'] ) {
            return $this->settings->get('account_code') . '/' . $wp_query->query_vars['ed_url'];
        }

        if ( ! ($this->attributes['url'] ?? '') ) {
            return $this->settings->get('account_code');
        }

        return $this->attributes['url'] ?? '';
    }

    private function getLanguageForTitle(): string {
        global $post;
        // todo: prevent parsing post_content
        $pattern = get_shortcode_regex();
        preg_match_all("/$pattern/", $post->post_content, $matches);
        $string = $matches[0] ? $matches[0][0] : '';
        if ( preg_match('/language="([^"]+)"/', $string ?: '', $matches) ) {
            return $matches[1];
        }
        return "de";
    }
}