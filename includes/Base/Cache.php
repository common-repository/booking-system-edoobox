<?php

namespace Edoobox\Base;

class Cache {
    public static function cleanup() {

        $intervalInSeconds = 43200; // 12 hours
        $lastCleanup = Options::get("edoobox_last_cleanup_in_s", 0);
        $nextCleanup = $lastCleanup + $intervalInSeconds;
        $currentTime = time();

        if ( $nextCleanup > $currentTime ) {
            return $lastCleanup;
        }

        self::deleteExpired();
        Options::set("edoobox_last_cleanup_in_s", $currentTime);

        return $currentTime;
    }

    public static function deleteAll() {
        global $wpdb;
        $transient_timeouts = $wpdb->get_results("
            SELECT option_name, option_value
            FROM $wpdb->options
            WHERE option_name LIKE '_transient_timeout_edoobox_%'
        ");

        foreach ( $transient_timeouts as $transient ) {
            $transient_name = str_replace('_transient_timeout_', '', $transient->option_name);
            delete_transient($transient_name);
        }

        Options::set('edoobox_last_cleanup_in_s', time());

        $wpdb->query("OPTIMIZE TABLE $wpdb->options");
    }

    public static function deleteExpired() {
        global $wpdb;
        $current_time = time();

        $transient_timeouts = $wpdb->get_results("
            SELECT option_name, option_value
            FROM $wpdb->options
            WHERE option_name LIKE '_transient_timeout_edoobox_%'
        ");

        foreach ( $transient_timeouts as $transient ) {
            $transient_name = str_replace('_transient_timeout_', '', $transient->option_name);
            if ( $transient->option_value < $current_time ) {
                delete_transient($transient_name);
            }
        }

        $wpdb->query("OPTIMIZE TABLE $wpdb->options");
    }

    public static function get($key) {
        return get_transient('edoobox_cache_' . $key) ?: '';
    }

    public static function set($key, $data, $timeInSeconds = 5) {
        LogTime::start('cache set');
        // note: minimum 5s to avoid autoload cache and to throttle requests
        $expirationTime = max($timeInSeconds, 5);
        set_transient('edoobox_cache_' . $key, $data, $expirationTime);
        LogTime::stop('cache set');
    }
}