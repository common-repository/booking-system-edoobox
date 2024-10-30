<?php

namespace Edoobox\Requests;

use Edoobox\Base\Options;
use Edoobox\Base\BaseController;
use Edoobox\Base\Settings;
use Edoobox\Requests\Helpers\Request;
use Exception;

class Auth extends BaseController
{
    public static $SETTINGS_OPTION_NAME = "edbs_options";

    private $options;
    private $settings;

    public function __construct()
    {
        parent::__construct();
        $this->options = Options::get(self::$SETTINGS_OPTION_NAME, []);
        $this->settings = new Settings();
    }

    public function authenticate($force = false)
    {
        $edid = Options::get('edbs_edid') ?? '';
        $token = Options::get('edbs_token') ?? '';
        $tokenExpiresAt = Options::get('edbs_token_expires_at') ?? 0;
        $apiPublic = $this->options[self::SETTINGS_PUBLIC_KEY] ?? '';
        $apiSecret = $this->options[self::SETTINGS_SECRET_KEY] ?? '';

        if ( ! $apiPublic || ! $apiSecret) {
            return;
        }

        if ( ! $force && $token && $tokenExpiresAt > time() && $edid) {
            return;
        }

        $newTokenExpiration = strtotime('+5 years', time());

        try {
            $response = wp_remote_post(
                $this->apiBaseURL . '/v2/auth',
                [
                    'headers' => [
                        'Content-Type' => 'application/json',
                        'grant-type' => 'password'
                    ],
                    'body' => json_encode([
                        'key' => $apiPublic,
                        'secret' => $apiSecret,
                        'expire' => date('Y-m-d\TH:i:sP', $newTokenExpiration)
                    ])
                ]
            );
            $body = json_decode(wp_remote_retrieve_body($response));
            if ( ! isset($body->data->edid) || ! $body->access_token) {
                throw new Exception('API Schlüssel sind ungültig.');
            }
            update_option('edbs_edid', $body->data->edid);
            Options::flushCache('edbs_edid');
            update_option('edbs_token', $body->access_token);
            Options::flushCache('edbs_token');
            update_option('edbs_token_expires_at', $newTokenExpiration);
            Options::flushCache('edbs_token_expires_at');

        } catch (Exception $exception) {
            Request::renderException($exception);
        }
    }

    public function checkCredentials($publicKey, $secretKey) {
        try {
            $response = wp_remote_post(
                $this->apiBaseURL . '/v2/auth',
                [
                    'headers' => [
                        'Content-Type' => 'application/json',
                        'grant-type' => 'password'
                    ],
                    'body' => json_encode([
                        'key' => $publicKey,
                        'secret' => $secretKey,
                        'expire' => date('Y-m-d\TH:i:sP', strtotime('+5 years', time()))
                    ])
                ]
            );
            $body = json_decode(wp_remote_retrieve_body($response));
            if ( ! isset($body->data->edid) || ! $body->access_token) {
                throw new Exception('API Schlüssel sind ungültig.');
            }
            return true;
        } catch (Exception $exception) {
            return false;
        }
    }

    public function getAuthToken() {
        return Options::get('edbs_token') ?? '';
    }

    public function getEdid() {
        return Options::get('edbs_edid') ?? '';
    }

    public function getPublicKey() {
        return $this->settings->get(Settings::SETTINGS_PUBLIC_KEY);
    }

    public function getSecretKey() {
        return $this->settings->get(Settings::SETTINGS_SECRET_KEY);
    }

    public function isAuthenticated(): bool
    {
        $edid = Options::get('edbs_edid') ?? '';
        $token = Options::get('edbs_token') ?? '';
        $tokenExpiresAt = Options::get('edbs_token_expires_at') ?? 0;
        $tokenKeys = Options::get('edbs_token_keys_used') ?? '';
        $apiPublic = $this->options[self::SETTINGS_PUBLIC_KEY] ?? '';
        $apiSecret = $this->options[self::SETTINGS_SECRET_KEY] ?? '';

        if ( ! $apiPublic || ! $apiSecret) {
            return false;
        }

        if ( ! $token || ! $tokenKeys || ! $edid || $tokenKeys !== $apiPublic . $apiSecret || $tokenExpiresAt < time()) {
            return false;
        }

        return true;
    }

    public static function authQueryString() {

    }
}