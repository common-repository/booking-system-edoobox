<?php

namespace Edoobox\Requests;

use Edoobox\Base\Settings;
use Edoobox\Requests\Helpers\Request;
use Exception;

class Next
{
    private $attributes;
    private $auth;
    private $settings;

    public function __construct($attributes)
    {
        $this->attributes = $attributes;
        $this->auth = new Auth();
        $this->settings = new Settings();
    }

    public function fetchV1(): array
    {
        try {
            $environment = $this->settings->get("environment");
            $query = $this->buildRequestQueryString();
            $apiData = wp_remote_get("https://$environment.edoobox.com/v1/offers$query", [
                'timeout' => Settings::SETTINGS_REQUEST_TIMEOUT
            ]);
            Request::checkResponse($apiData);
            return [
                'api' => json_decode($apiData['body'], true),
                'provider_url' => Request::buildProviderUrl($this->attributes['root'])
            ];
        } catch (Exception $exception) {
            Request::renderException($exception);
            return [];
        }
    }

    public function fetchV2(): array
    {
        try {
            $environment = $this->settings->get(Settings::SETTINGS_ENVIRONMENT);
            $this->auth->authenticate();
            $query = $this->buildRequestQueryString() . "?filter=" . json_encode($this->filtersV2());
            $apiData = wp_remote_get("https://$environment.edoobox.com/v2/offer/list$query", [
                'headers' => [
                    "edid" => $this->auth->getEdid(),
                    "language" => $this->attributes["language"],
                    "grant-type" => "access_token",
                    "Authorization" => "Bearer " . $this->auth->getAuthToken()
                ],
                'timeout' => Settings::SETTINGS_REQUEST_TIMEOUT
            ]);
            Request::checkResponse($apiData);
            $mapped = [];
            foreach (json_decode($apiData['body'], true)['data'] as $offerId => $offer) {
                $mapped[$offerId] = [
                    "id" => $offer["id"],
                    "name" => $offer["name"],
                    "number" => $offer["number"],
                    "shortdescription" => $offer["shortdescription"],
                    "user_maximum" => $offer["user_maximum"],
                    "user_minimal" => $offer["user_minimal"],
                    "start_date" => $offer["date_start"],
                    "end_date" => $offer["date_end"],
                    "deadline" => $offer["date_close"],
                    "image" => $offer["image"]["url"] ?? null,
                    "place_id" => $offer["place"] ?: null, // Assuming 'place' can be an ID or false
                    "category_id" => $offer["category"],
                    "status" => (string) $offer["status"],
                    "lesson_booking" => $offer["lesson_booking"],
                    "waiting_list" => $offer["waiting_list"],
                    "offer_details_url" => null, // This information was not provided
                    "booking_status" => "normal", // This seems to be hardcoded
                    "booking_start_url" => null, // This information was not provided
                ];
            }
            return [
                'api' => ['data' => $mapped],
                'provider_url' => Request::buildProviderUrl($this->attributes['root'])
            ];
        } catch (Exception $exception) {
            Request::renderException($exception);
            return [];
        }
    }

    private function buildRequestData(): array
    {
        return [
            "api1" => $this->auth->getPublicKey(),
            "api2" => $this->auth->getSecretKey(),
            "language" => $this->attributes['language'],
            "filter" => [
                "startdate" => [
                    "property" => "offer.startdate",
                    "value" => date('c'),
                    "expression" => ">"
                ],
                "status" => [
                    "property" => "offer.status",
                    "value" => "1,2",
                ]
            ],
            "limit" => [
                "start" => $this->attributes['start'],
                "reply" => $this->attributes['limit']
            ]
        ];
    }

    private function buildRequestQueryString(): string
    {
        $allowedQueries = ['edcode', 'edref', 'edtag', 'edlink', 'edstart', 'edend', 'edview', 'q'];
        $requestQueries = [];
        $useV2 = $this->settings->get(Settings::USE_V2);

        foreach ($allowedQueries as $query) {
            $queryValue = get_query_var($query);
            $valueIsEmpty = $queryValue === '' || $queryValue === null;

            if ( ! $valueIsEmpty) {
                $requestQueries[$query] = $queryValue;
                continue;
            }

            if ($query === 'q' && $this->attributes['q'] !== '') {
                $requestQueries['q'] = $queryValue;
                continue;
            }

            if (array_key_exists((string)substr($query, 2), $this->attributes) && $this->attributes[substr($query, 2)] !== '') {
                $requestQueries[$query] = $this->attributes[substr($query, 2)];
                continue;
            }

            if ($query == 'edref' && $this->attributes['label'] !== '') {
                $requestQueries[$query] = $this->attributes['label'];
            }
        }

        $requestQueries['cms_data'] = json_encode($this->buildRequestData());

        return count($requestQueries) > 0 && ! $useV2 ? '?' . http_build_query($requestQueries) : '';
    }

    private function filtersV2(): array
    {
        return [
            [
                "expression" => "greaterthan",
                "property" => "date_start",
                "value" => date('c')
            ],
            [
                "expression" => "IN",
                "property" => "status",
                "value" => "1,2"
            ]
        ];
    }
}