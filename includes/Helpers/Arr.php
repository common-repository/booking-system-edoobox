<?php

namespace Edoobox\Helpers;

class Arr {
    /**
     * Get an item from an array using "dot" notation.
     *
     * @param array $array
     * @param string|int $key
     * @param mixed $default
     * @return mixed
     */
    public static function get($array, $key, $default = null) {
        if ( ! is_array($array) ) {
            return $default;
        }

        if ( is_null($key) ) {
            return $array;
        }

        if ( array_key_exists($key, $array) ) {
            return $array[$key];
        }

        if ( strpos($key, '.') === false ) {
            return $array[$key] ?? $default;
        }

        foreach ( explode('.', $key) as $segment ) {
            if ( is_array($array) && array_key_exists($segment, $array) ) {
                $array = $array[$segment];
            } else {
                return $default;
            }
        }

        return $array;
    }
}