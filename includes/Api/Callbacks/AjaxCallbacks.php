<?php
/**
 * @package edoobox
 */

namespace Edoobox\Api\Callbacks;


use Edoobox\Api\EdooboxApiV1;
use Edoobox\Api\ShortcodeApi;
use Edoobox\Base\Cache;
use Edoobox\Base\Options;
use Edoobox\Base\Settings;
use Edoobox\Helpers\Arr;
use Edoobox\Requests\Auth;
use mysql_xdevapi\Exception;

class AjaxCallbacks
{
    public static function flushCache() {
        Cache::deleteAll();
        wp_send_json_success([
            'message' => "Successfully flushed cache.",
            'status' => 200,
            'success' => true
        ]);
    }

    public static function manuallyIndexShortcodes() {
        ShortcodeApi::index();
    }

    public static function removeDesignReferences() {
        Options::set("edoobox_bootstrap_index", []);
        wp_send_json_success([
            "message" => "Successfully removed all design references",
            "success" => true
        ]);
    }

    public static function storeDesignReferences() {
        $references = Arr::get($_POST, 'references', []);
        Options::set("edoobox_bootstrap_index", $references);
        wp_send_json_success([
            "message" => "Successfully updated design references",
            "references" => $references,
            "success" => true
        ]);
    }

    public static function verifyCredentials() {
        $api1 = sanitize_text_field($_POST['api1']);
        $api2 = sanitize_text_field($_POST['api2']);
        $options = get_option(Settings::SETTINGS_OPTION_NAME);
        if ($options[Settings::USE_V2] ?? false) {
            $auth = new Auth();
            $response = $auth->checkCredentials($api1, $api2);
            wp_send_json_success([
                'message' => $response ? "Authorized" : "Unauthorized",
                'status' => $response ? 200 : 401,
                'success' => $response
            ]);
        }
        $response = EdooboxApiV1::get("templates", [
            'api1' => $api1,
            'api2' => $api2,
            'language' => 'de',
            'limit' => (object)[
                'start' => '0',
                'reply' => '0'
            ]
        ], 0);
        wp_send_json_success($response);
    }
}