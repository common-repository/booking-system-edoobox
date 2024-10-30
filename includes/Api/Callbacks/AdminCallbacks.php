<?php
/**
 * @package edoobox
 */

namespace Edoobox\Api\Callbacks;


use Edoobox\Api\PostApi;
use Edoobox\Api\ShortcodeApi;
use Edoobox\Base\BaseController;
use Edoobox\Base\Cache;
use Edoobox\Base\Options;
use Edoobox\Base\Nonce;

class AdminCallbacks extends BaseController {
    // These properties are required and accessible in the templates
    // and in this class. This leads to more consistency between the
    // templates and the methods in this class.
    public array $edbs_options = [];
    public string $metaBoxNoneName = "meta_box_nonce";
    public string $optionsName = "edbs_options";
    public string $shortcodeNextOptionsName = "edbs-next-options-group";
    public string $shortcodeNextMetaBoxNonceName = "next_meta_box_nonce";


    public function templateCaching() {
        $cachingTime = Options::get('edoobox_cache_time_in_s', 0);
        $designReferences = Options::get($this->bootstrapOptionName, []);
        return require_once($this->pluginPath . "/views/view.caching.php");
    }

    public function templateDesign() {
        return require_once($this->pluginPath . "/views/view.design.php");
    }

    public function templateMapsGoogle() {
        $mapsGoogleAPIKey = get_option('maps_google_api_key', '');
        return require_once($this->pluginPath . "/views/view.maps.google.php");
    }

    public function templateOptions() {
        $this->edbs_options = get_option(self::SETTINGS_OPTION_NAME) ?: [];

        $this->edbs_options[self::SETTINGS_ACCOUNT_CODE_NAME] ??= '';
        $this->edbs_options[self::SETTINGS_DESIGN_NAME] ??= 'standard';
        $this->edbs_options[self::SETTINGS_MAPS_API_KEY_NAME] ??= "";
        $this->edbs_options[self::SETTINGS_PUBLIC_KEY] ??= '';
        $this->edbs_options[self::SETTINGS_SECRET_KEY] ??= '';
        $this->edbs_options[self::SETTINGS_ENVIRONMENT] ??= 'app1';
        $this->edbs_options[self::SHORTCODE_PRO_ACTIVE] ??= '';
        $this->edbs_options[self::USE_V2] ??= '';

        return require_once($this->pluginPath . "/views/view.options.php");
    }

    public function templatePageIndexing() {
        $postArray = PostApi::all(); // required in template
        ShortcodeApi::index();
        return require_once($this->pluginPath . "/views/view.page-indexing.php");
    }

    public function templateShortcodePro() {
        $options_next = get_option('edbs_next_options', false);
        $shortcodeTemplates = get_option('edbs_next_options_templates', [0 => '']);
        $lastEditedShortcodeTemplate = get_option('edbs_next_options_currentTemplate', '');

        /**
         * Sets the url for the root="..." field safely.
         *
         * @return string
         */
        function getTheUrl() {
            $options_edoobox_pages = Options::get('edoobox_pages', ['allowed_classes' => false]);
            if ( $options_edoobox_pages && isset($options_edoobox_pages[0]) ) {
                $url = get_permalink($options_edoobox_pages[0]);
                if ( $url ) {
                    return $url;
                }
            }
            return get_site_url() . '/ihre_edoobox_seite';
        }

        $shortcodeURL = getTheUrl();

        foreach ( $shortcodeTemplates as $key => $value ) {
            $shortcodeTemplates[$key] = stripslashes($value);
        }

        $firstTemplate = array_values($shortcodeTemplates)[0];

        if ( $options_next ) {
            if ( ! isset($options_next['isActive']) ) {
                $options_next['isActive'] = 1;
            }
        }

        if ( $shortcodeTemplates ) {
            if ( ! isset($options_next[0]) ) {
                // set the default shortcode HTML to edit
                $options_next[0] = file_get_contents($this->pluginPath . '/views/shortcode_next.html');
            }
        }

        return require_once($this->pluginPath . "/views/view.shortcode-pro.php");
    }

    public function templateInformation() {
        $last_cleanup = Options::get('edoobox_updater_last_cleanup', 0);
        $registered_plugin_version = Options::get('edoobox_plugin_version', 0);
        $last_cache_cleanup = Options::get('edoobox_last_cleanup_in_s', 0);
        $last_rewrite = Options::get('edoobox_last_rewrite', 0);
        $rewrite_rules = Options::get('edoobox_rewrite_rules', []);
        $settings = Options::get(self::SETTINGS_OPTION_NAME, []);
        $cache_time = Options::get(self::SETTINGS_CACHE_TIME_NAME, 0);
        $account_code = $settings[self::SETTINGS_ACCOUNT_CODE_NAME] ?? __('Not set', 'booking-system-edoobox');
        $environment = $settings[self::SETTINGS_ENVIRONMENT] ?? __('Not set', 'booking-system-edoobox');
        $validKeys = self::keyValidation();

        $shortcodes = Options::get('edoobox_shortcodes', []);

        $last_cleanup = $last_cleanup ? date('Y-m-d H:i:s', $last_cleanup) : __('No cleanup yet', 'booking-system-edoobox');
        $last_cache_cleanup = $last_cache_cleanup ? date('Y-m-d H:i:s', $last_cache_cleanup) : __('No cleanup yet', 'booking-system-edoobox');
        $last_rewrite = $last_rewrite ? date('Y-m-d H:i:s', $last_rewrite) : __('No rewrites yet', 'booking-system-edoobox');
        $rewrite_rules = is_array($rewrite_rules) ? $rewrite_rules : [];
        $shortcodes = is_array($shortcodes) ? $shortcodes : [];
        $validKeys = $validKeys ? __('Yes', 'booking-system-edoobox') : __('Invalid keys or incorrect version (V1/V2) selected', 'booking-system-edoobox');

        return require_once($this->pluginPath . "/views/view.information.php");
    }


    public function buildShortcodeRoot() {
        $shortcodeRoot = get_site_url() . '/ihre_edoobox_seite';
        $posts = PostApi::all();
        if ( $posts && isset($posts[0]) ) {
            $shortcodeRoot = get_permalink($posts[0]);
        }
        return $shortcodeRoot;
    }

    public function setCacheTimeSetting() {
        if ( ! Nonce::verifyPost('caching_meta_box_nonce') ) {
            return;
        }

        $option = 'edoobox_cache_time_in_s';
        $optionSanitized = sanitize_text_field($_POST[$option]);
        update_option('edoobox_cache_time_in_s', max($optionSanitized, 0));

        Cache::deleteAll();
    }

    public function storeGoogleMapsApiKey() {
        if ( ! Nonce::verifyPost('google-maps-api-key_meta_box_nonce') ) {
            return;
        }

        $optionSanitized = sanitize_text_field($_POST['maps_google_api_key']);
        update_option('maps_google_api_key', $optionSanitized);
    }

    public function storeOptions() {
        if ( ! Nonce::verifyPost($this->metaBoxNoneName) ) {
            return;
        }

        $allowedOptions = [
            self::SETTINGS_ACCOUNT_CODE_NAME,
            self::SETTINGS_DEBUG_KEY_NAME,
            self::SETTINGS_DEBUG_ACTIVE_KEY_NAME,
            self::SETTINGS_ENVIRONMENT,
            self::SETTINGS_PUBLIC_KEY,
            self::SETTINGS_SECRET_KEY,
            self::USE_V2,
            self::SETTINGS_DESIGN_NAME,
            self::SHORTCODE_PRO_ACTIVE
        ];

        $options = [];

        foreach ( $_POST[$this->optionsName] as $key => $value ) {
            if ( in_array($key, $allowedOptions) ) {
                $options[$key] = sanitize_text_field($value);
            }
        }

        $storedOptions = get_option($this->optionsName) ?: []; // Ensure $storedOptions is an array even if null is returned
        $newPublicKey = ($options[self::SETTINGS_PUBLIC_KEY] ?? null) !== ($storedOptions[self::SETTINGS_PUBLIC_KEY] ?? null);
        $newSecretKey = ($options[self::SETTINGS_SECRET_KEY] ?? null) !== ($storedOptions[self::SETTINGS_SECRET_KEY] ?? null);

        update_option($this->optionsName, $options);

        if ( $newPublicKey || $newSecretKey ) {
            update_option('edbs_edid', '');
            update_option('edbs_token', '');
        }

        Cache::deleteAll();
    }

    public function storeShortcodeTemplate() {
        if ( ! Nonce::verifyPost('next_meta_box_nonce') ) {
            return;
        }

        $multidimensional_options = [
            'templates',
            'isActive',
            'isSelected'
        ];

        $db_options_next_templates = get_option('edbs_next_options_templates', []);

        $multidimensional_options_update = [];
        foreach ( $_POST['edbs_next_options'] as $key => $value ) {
            if ( in_array($key, $multidimensional_options) ) {
                if ( $key !== 'templates' ) { // don't sanitize the template-input field
                    $multidimensional_options_update[$key] = sanitize_text_field($value);
                } else {
                    $multidimensional_options_update[$key] = sanitize_post($value);
                }
            }
        }

        $templates = array_merge($db_options_next_templates, $multidimensional_options_update['templates']);
        unset($templates['ID']);
        unset($templates['filter']);

        function array_key_first(array $array) {
            foreach ( $array as $key => $value ) {
                return $key;
            }
        }

        update_option('edbs_next_options_currentTemplate', array_key_first($multidimensional_options_update['templates']));
        unset($multidimensional_options_update['templates']);

        update_option('edbs_next_options_templates', $templates);
        update_option('edbs_next_options', $multidimensional_options_update);

        Cache::deleteAll();
    }

    private function keyValidation(): bool {
        $settings = Options::get(self::SETTINGS_OPTION_NAME, []);
        $publicKey = $settings[self::SETTINGS_PUBLIC_KEY] ?? '';
        $secretKey = $settings[self::SETTINGS_SECRET_KEY] ?? '';
        $usingV2 = $settings[self::USE_V2] ?? '';
        $publicIsV1 = self::lengthIsBetween($publicKey, 10, 29);
        $publicIsV2 = self::lengthIsBetween($publicKey, 30, 60);
        $secretIsV1 = self::lengthIsBetween($secretKey, 10, 29);
        $secretIsV2 = self::lengthIsBetween($secretKey, 30, 60);

        return ( ! $usingV2 && $publicIsV1 && $secretIsV1) ||
            ($usingV2 && $publicIsV2 && $secretIsV2);
    }

    private function lengthIsBetween(string $string, int $min, int $max): bool {
        return strlen($string) >= $min && strlen($string) <= $max;
    }

}