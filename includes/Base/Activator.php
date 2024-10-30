<?php
/**
 * @package edoobox
 */

namespace Edoobox\Base;

use Edoobox\Api\ShortcodeApi;

class Activator
{
    public static function activate() {
        flush_rewrite_rules();
        ShortcodeApi::index();
    }

    public static function deactivate() {
        flush_rewrite_rules();
    }
}