<?php

namespace Edoobox\Base;

class Globals {

    public static function set() {

    }

    public static function verifyArray($variable): array {
        return ! isset($variable) || ! is_array($variable) ? [] : $variable;
    }

}