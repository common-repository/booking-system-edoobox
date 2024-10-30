<?php
/**
 * @package edoobox
 */

namespace Edoobox\Base;


class SettingsLinks extends BaseController
{
    public function register() {
        add_filter("plugin_action_links_" . $this->pluginBase, [$this, "settings_link"]);
    }

    public function settings_link($links) {
        $settings_link = '<a href="admin.php?page=edoobox-system-view">' .
            __("Settings", "booking-system-edoobox") .
            '</a>';
        array_unshift($links, $settings_link);
        return $links;
    }
}