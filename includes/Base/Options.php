<?php

namespace Edoobox\Base;

class Options {

    private static array $optionsCache = [];

    public static function flushCache($key) {
        if ( isset(self::$optionsCache[$key]) ) {
            unset(self::$optionsCache[$key]);
        }
    }

    public static function get(string $key, $fallback = null) {
        if ( ! isset(self::$optionsCache[$key]) ) {
            self::$optionsCache[$key] = get_option($key, $fallback);
        }

        return self::$optionsCache[$key];
    }

    public static function set(string $key, $value): bool {
        $success = update_option($key, $value);
        if ( $success ) {
            self::$optionsCache[$key] = $value;
        }
        return $success;
    }
}