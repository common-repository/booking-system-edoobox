<?php
/**
 * @package edoobox
 */

namespace Edoobox\Base;

use Edoobox\Api\ShortcodeApi;

class Enqueue extends BaseController
{

    public function register()
    {
        // Enqueue scripts that only are available in the admin panel.
        add_action('admin_enqueue_scripts', [$this, 'enqueueAdmin']);
        // Enqueue scripts that only are available on the website.
        add_action('wp', [$this, 'enqueueGuest']);
    }

    /**
     * Enqueue all scripts and styles that are required by the
     * plugin's admin panel.
     *
     * @return void
     */
    public function enqueueAdmin()
    {
        $this->enqueueGlobals();
        if (Auth::isAdmin() && Auth::isEdooboxPage()) {
            wp_enqueue_script('moment.js', $this->pluginURL . 'js/libraries/moment/moment.min.all.js', ['jquery'], $this->enqueueVersion, true);
            wp_enqueue_script('ajax-script', $this->pluginURL . 'js/dist/admin.js', ['jquery'], $this->enqueueVersion, true);
            wp_enqueue_style("backend-styles", $this->pluginURL . 'css/edoobox-backend.css', [], $this->enqueueVersion, 'all');
            wp_localize_script('ajax-script', 'ajax_object', ['ajax_url' => admin_url('admin-ajax.php')]);
        }
    }

    /**
     * Enqueue all scripts and styles that are required by the
     * wordpress website.
     *
     * @return void
     */
    public function enqueueGuest()
    {
        global $post;

        if ( ! is_singular() || !ShortcodeApi::hasShortcode($post) ) {
            return;
        }

        $this->enqueueGlobals();
        if (Auth::isGuest()) {
            wp_enqueue_script('edoobox-plugin', $this->pluginURL . 'js/dist/main.js', ['jquery'], $this->enqueueVersion, true);
            wp_enqueue_style('fullcalendar-custom', $this->pluginURL . 'js/libraries/fullcalendar/main.css', [], $this->enqueueVersion, 'all');
            wp_enqueue_script('stacktable', $this->pluginURL . 'js/libraries/stacktable/stacktable.js', ['jquery'], $this->enqueueVersion, true);
            wp_enqueue_style('frontend-styles', $this->pluginURL . 'css/edoobox-frontend.css', [], $this->enqueueVersion, 'all');
            // localize name needs to be the same as script you want to pass parameters to.
            wp_localize_script('edoobox-plugin', 'placeholderImageURL', [$this->placeholderImageURL]);
            wp_localize_script('edoobox-plugin', 'googleMapsApiKey', [Options::get('maps_google_api_key', '')]);

            $this->enqueueCompatibilityScripts();
        }
    }

    private function enqueueCompatibilityScripts()
    {
        if (PluginCollection::drawAttentionIsInstalled()) {
            wp_enqueue_script('draw-attention-leaflet', $this->pluginURL . 'js/libraries/leaflet/leaflet@1.9.3.js');
            wp_enqueue_script('draw-attention-compatibility', $this->pluginURL . 'js/dist/compatibility.js', ['jquery'], $this->enqueueVersion, true);
        }
    }

    private function enqueueGlobals()
    {
        if (Auth::isGuest() || Auth::isEdooboxPage()) {
            wp_enqueue_script('bootstrap.js', $this->pluginURL . 'js/libraries/bootstrap/bootstrap.min.js', ['jquery']);
        }
    }

}
