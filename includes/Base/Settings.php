<?php

namespace Edoobox\Base;

class Settings
{
    public $options = [];

    const PLACEHOLDER_PATH = "/img/placeholder_200x300.jpg";
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
    const SETTINGS_REQUEST_TIMEOUT = 20;
    const SHORTCODE_PRO_ACTIVE = "shortcode_pro_active";
    const USE_V2 = "use_edoobox_v2";
    const SHORTCODE_NAME = "edbs_panel";

    public function __construct()
    {
        $this->options = Options::get('edbs_options', []);
    }

    public function get(string $key, $fallback = '')
    {
        return $this->options[$key] ?? $fallback ?? '';
    }

}