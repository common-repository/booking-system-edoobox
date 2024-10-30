<?php
/**
 * @package edoobox
 */
namespace Edoobox\Api\Callbacks;


use Edoobox\Api\ShortcodeApi;

class ShortcodeApiCallbacks
{
    public static function indexAll() {
        ShortcodeApi::index();
        ShortcodeApi::index(
            ShortcodeApi::SHORTCODE_NAME,
            ShortcodeApi::PANEL_NEXT_REGISTRY_NAME,
            true
        );
    }
}