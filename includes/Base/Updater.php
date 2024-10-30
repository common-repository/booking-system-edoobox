<?php

namespace Edoobox\Base;

use Edoobox\Api\ShortcodeApi;

class Updater {

    public static function newVersionInstalled(): bool {
        $pluginVersion = Options::get('edoobox_plugin_version', '0');
        return $pluginVersion !== BaseController::PLUGIN_VERSION;
    }

    /**
     * Adds all pre-requisites so that the plugin can
     * run the way it is intended. Should be called after
     * a plugin update has been detected.
     * */
    public static function cleanup() {
        LogTime::start('cleanup');
        ShortcodeApi::index();
        Options::set('edoobox_plugin_version', BaseController::PLUGIN_VERSION);
        Options::set('edoobox_updater_last_cleanup', time());
        flush_rewrite_rules(false);
        flush_rewrite_rules(true);
        LogTime::stop('cleanup');
    }

}