<?php
/**
 * @package edoobox
 */

namespace Edoobox\Api;

use Edoobox\Base\BaseController;
use Edoobox\Base\Settings;
use WP_Error;

class EdooboxApiV1 {

    /**
     * Perform a GET request to Edoobox API
     *
     * @param string $path The path of the API endpoint.
     * @param array $data The data to be sent as query parameters.
     * @param float $timeout The timeout for the request in seconds.
     *
     * @return array The response data.
     */
    public static function get(string $path = '', array $data = [], float $timeout = 8.0): array {
        $urlWithQuery = self::buildUrlWithQuery($path, $data);
        $response = self::performRequest($urlWithQuery, $timeout);
        return self::processResponse($response);
    }

    /**
     * Build the full URL with query parameters.
     *
     * @param string $path The path of the API endpoint.
     * @param array $data The data to be sent as query parameters.
     *
     * @return string The built URL.
     */
    private static function buildUrlWithQuery(string $path, array $data): string {
        $dataAsQuery = http_build_query(["cms_data" => json_encode($data)]);
        return BaseController::getApiBaseUrl() . "/v1/$path?$dataAsQuery";
    }

    /**
     * Perform the GET request.
     *
     * @param string $urlWithQuery The URL to request.
     * @param float $timeout The timeout for the request in seconds.
     *
     * @return array|WP_Error The response or WP_Error on failure.
     */
    private static function performRequest(string $urlWithQuery, float $timeout) {
        return wp_remote_get($urlWithQuery, [
            'headers' => [
                'Content-Type' => 'application/json; charset=utf-8',
                'Accept' => 'application/json',
            ],
            'timeout' => Settings::SETTINGS_REQUEST_TIMEOUT,
            'method' => 'GET',
        ]);
    }

    /**
     * Process the response and return the data.
     *
     * @param array|WP_Error $response The response to process.
     *
     * @return array The processed response data.
     */
    private static function processResponse($response): array {
        $responseCode = wp_remote_retrieve_response_code($response);
        $responseMessage = wp_remote_retrieve_response_message($response);

        $returnData = [
            'message' => "Edoobox responded with $responseMessage.",
            'status' => $responseCode,
            'success' => true
        ];

        if ($response instanceof WP_Error || $responseCode !== 200) {
            $returnData['message'] = $response instanceof WP_Error ? $response->get_error_message() : $responseMessage;
            $returnData['success'] = false;
        }

        return $returnData;
    }
}
