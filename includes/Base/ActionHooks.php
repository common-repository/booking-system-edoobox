<?php
/**
 * @package edoobox
 */

namespace Edoobox\Base;


use Edoobox\Api\Callbacks\AdminCallbacks;
use Edoobox\Api\Callbacks\AjaxCallbacks;
use Edoobox\Api\ShortcodeApi;

class ActionHooks {
    public $callbacks;

    public function register() {

        if ( Auth::isAdmin() ) {
            $this->callbacks = new AdminCallbacks();
            $this->addAjaxHooks();
            $this->addOptionFormHooks();
        }

        add_action("save_post", function ($post_id, $post, $other) {
            ShortcodeApi::index();
            Cache::deleteAll();
        }, 10, 3);

        add_action('init', function () {
            ShortcodeApi::registerShortcode();
        });

        add_action('shutdown', function () {
            global $post;
            if ( is_singular() && ShortcodeApi::hasShortcode($post) ) {
                Cache::cleanup();
            }
        });
    }

    public function addAjaxHooks() {
        add_action('wp_ajax_edo_ajax_flushcache_action', function () {
            AjaxCallbacks::flushCache();
        });
        add_action('wp_ajax_edo_ajax_action', function () {
            AjaxCallbacks::manuallyIndexShortcodes();
        });
        add_action('wp_ajax_remove-design-references', function () {
            AjaxCallbacks::removeDesignReferences();
        });
        add_action('wp_ajax_store-design-references', function () {
            AjaxCallbacks::storeDesignReferences();
        });
        add_action('wp_ajax_validate-api-credentials', function () {
            AjaxCallbacks::verifyCredentials();
        });
    }

    public function addOptionFormHooks() {
        add_action('admin_init', [$this->callbacks, 'setCacheTimeSetting']);
        add_action('admin_init', [$this->callbacks, 'storeGoogleMapsApiKey']);
        add_action('admin_init', [$this->callbacks, 'storeOptions']);
        add_action('admin_init', [$this->callbacks, 'storeShortcodeTemplate']);
    }
}