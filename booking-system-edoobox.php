<?php
/**
 * @package edoobox
 */

/**
 * Plugin Name:  Booking System Edoobox
 * Text Domain: booking-system-edoobox
 * Plugin URI: https://www.edoobox.com/wordpress-plugin
 * Description: Online booking system – Advertise your courses, seminars, and events easily!
 * edoobox is a smart online reservation system. Customers can register for courses, seminars and events and pay
 * immediately.
 * Author: edoobox
 * Author URI: https://edoobox.com
 * URI: https://docs.edoobox.com/knowledge-base/wordpress-website-einbinden-wp-plugin-iframe/
 * Copyright: Copyright (C) - support@edoobox.com
 * Version: 3.0.23
 * Requires at least: 5.0
 * Tested up to: 6.5.4
 * License: GPLv3
 *
 * edoobox Wordpress Plugin is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * edoobox Wordpress Plugin is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with edoobox Wordpress Plugin.
 */
// If this file is called directly, abort for security reasons.
defined('ABSPATH') or die('Hey, no access here folks!');

// Require the Composer Autoload for namespace declarations.
if ( file_exists(dirname(__FILE__) . '/vendor/autoload.php') ) {
    require_once dirname(__FILE__) . '/vendor/autoload.php';
}

\Edoobox\Base\LogTime::start('time to render');

// Register the code that runs during plugin activation.
register_activation_hook(__FILE__, function () {
    Edoobox\Base\Activator::activate();
});

// Register the code that runs during plugin deactivation.
register_deactivation_hook(__FILE__, function () {
    Edoobox\Base\Activator::deactivate();
});

// Initialize and setup all core classes of the plugin.
if ( class_exists('Edoobox\\Plugin') ) {
    if ( Edoobox\Base\Updater::newVersionInstalled() ) {
        Edoobox\Base\Updater::cleanup();
    }
    Edoobox\Plugin::registerServices();
}
