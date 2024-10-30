<?php
/**
 * @package edoobox
 */

namespace Edoobox;

final class Plugin {

    public static function getFrontendServices(): array {
        return [
            Base\Timezone::class,
            Base\ActionHooks::class,
            Base\Rewrite::class,
            Pages\Frontend::class,
            Base\Enqueue::class
        ];
    }

    public static function getAdminServices(): array {
        return [
            // load translations first!
            Base\Translation::class,
            Base\Timezone::class,
            Base\ActionHooks::class,
            Base\Rewrite::class,
            Base\SettingsLinks::class,
            Pages\Admin::class,
            Base\Enqueue::class
        ];
    }

    /**
     * Loop through the service classes, initialize them
     * and call the register method on them, if it exists
     *
     * @return void
     */
    public static function registerServices() {
        $services = is_admin() ? self::getAdminServices() : self::getFrontendServices();
        foreach ( $services as $class ) {
            $service = self::instantiate($class);
            if ( method_exists($service, 'register') ) {
                $service->register();
            }
        }
    }

    /**
     * Initialize a given class
     *
     * @param class $class class from the services array
     * @return class instance   new instance of class
     */
    private static function instantiate($class) {
        return new $class;
    }
}