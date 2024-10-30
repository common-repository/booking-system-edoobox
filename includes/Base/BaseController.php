<?php
/**
 * @package edoobox
 */

namespace Edoobox\Base;

class BaseController {
    const PLUGIN_VERSION = "3.0.23";
    const SETTINGS_ACCOUNT_CODE_NAME = "account_code";
    const SETTINGS_CACHE_TIME_NAME = "edoobox_cache_time_in_s";
    const SETTINGS_DESIGN_NAME = "design";
    const SETTINGS_MAPS_API_KEY_NAME = "maps_google_api_key";
    const SETTINGS_OPTION_NAME = "edbs_options";
    const SETTINGS_OPTION_TEMPLATE_NAME = "edbs_options_template";
    const SETTINGS_DEBUG_KEY_NAME = "debug_code";
    const SETTINGS_DEBUG_ACTIVE_KEY_NAME = "debug_code_active";
    const SETTINGS_ENVIRONMENT = "environment";
    const SETTINGS_PUBLIC_KEY = "public_key";
    const SETTINGS_SECRET_KEY = "secret_key";
    const SHORTCODE_PRO_ACTIVE = "shortcode_pro_active";
    const SHORTCODE_NAME = "edbs_panel";
    const USE_V2 = "use_edoobox_v2";

    public $ajaxURL;
    public $apiBaseURL;
    public $bootstrapCompilerURL = "https://sandbox.app.edoobox.ch/ajax/wp_css";
    public $bootstrapOptionName = "edoobox_bootstrap_index";
    public $currentPath;
    public $enqueueVersion = 'v3.0.23.0';
    public $placeholderImageURL;
    public $pluginBase;
    public $pluginPath;
    public $pluginURL;
    public $root;

    public function __construct()
    {
        $this->root = plugin_basename(dirname(__FILE__, 3));
        $this->apiBaseURL = self::getApiBaseUrl();
        $this->ajaxURL = admin_url('admin-ajax.php');
        $this->currentPath = $_SERVER['REQUEST_URI'];
        $this->pluginBase = "$this->root/$this->root.php";
        $this->pluginPath = plugin_dir_path(dirname(__FILE__, 2));
        $this->pluginURL = plugin_dir_url(dirname(__FILE__, 2));
        $this->placeholderImageURL = "$this->pluginURL/js/img/placeholder_200x300.jpg";
    }

    public static function getApiBaseUrl()
    {
        $options = Options::get(self::SETTINGS_OPTION_NAME) ?: [];
        $fallbackApiBaseURl = getenv("ED_API_URL") ?: "https://app1.edoobox.com";
        $environments = [
            "app1" => "https://app1.edoobox.com",
            "app2" => "https://app2.edoobox.com",
        ];
        return $environments[$options[self::SETTINGS_ENVIRONMENT] ?? 'app1'] ?: $fallbackApiBaseURl;
    }
}