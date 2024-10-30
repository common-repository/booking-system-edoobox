<?php

namespace Edoobox\Base;

class Nonce
{
    /**
     * The nonce is a "number used once" to help protect URLs and forms from certain types of misuse,
     * malicious or otherwise. Verifying matches the nonce passed in the URL or form submission to the nonce you
     * generated with the wp_create_nonce() function.
     *
     * @param string $key
     * @return bool
     */
    static function verifyPost(string $key): bool
    {
        return isset($_POST[$key]) && wp_verify_nonce($_POST[$key], $key);
    }
}