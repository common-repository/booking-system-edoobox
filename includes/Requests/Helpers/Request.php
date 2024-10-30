<?php

namespace Edoobox\Requests\Helpers;

use Edoobox\Base\Settings;
use Exception;

class Request
{
    /**
     * @throws \Exception
     */
    public static function checkResponse($response) {
        if (is_wp_error($response)) {
            throw new Exception($response->get_error_message());
        }
        if (isset($response['response']['message']) && $response['response']['code'] !== 200) {
            throw new Exception($response['response']['message'], $response['response']['code']);
        }
    }

    public static function buildProviderUrl(string $root = '')
    {
        if ($root) {
            return trailingslashit(esc_url($root));
        }
        // Retrieves the full permalink for the current post or post ID.
        return trailingslashit(esc_url(get_the_permalink()));
    }

    public static function renderException($exception) {
        $styles = "background: #fee2e2; border-radius: 5px;";
        $styles .= "color: #dc2626; font-weight: bold; padding: 0.5rem 1rem;";
        $styles .= "margin: 0.5rem auto;";
        $styles .= "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);";
        echo "<p hidden>Version " . Settings::PLUGIN_VERSION . "</p>";
        echo "<p class='edoobox-error-message' style='$styles'>" .
            __("edoobox could not fetch data: ", "booking-system-edoobox") .
            $exception->getMessage() . ' / ' . $exception->getCode() .
            '</p>';
    }
}