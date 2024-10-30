<?php
/**
 * @package edoobox
 */

namespace Edoobox\Base;


class Auth {
    static array $edooboxRoutes = [
        'toplevel_page_edoobox-system-view', // toplevel_page
        'edoobox_page_edoobox-page-view', // edoobox_page
        'edoobox_page_edoobox-next', // edoobox_page
        'edoobox_page_edoobox-design', // edoobox_page
        'edoobox_page_edoobox-caching', // edoobox_page
        'edoobox_page_edoobox-maps-google', // edoobox_page
        'edoobox_page_edoobox-information' // edoobox_page
    ];

    public static function isAdmin(): bool {
        return is_admin();
    }

    public static function isEdooboxPage(): bool {
        if ( ! self::isAdmin() ) {
            return false;
        }

        $screen = function_exists('get_current_screen') ? get_current_screen() : null;
        return $screen && in_array($screen->base, self::$edooboxRoutes);
    }

    public static function isGuest(): bool {
        return ! self::isAdmin();
    }
}