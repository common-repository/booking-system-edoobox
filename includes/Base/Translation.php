<?php
/**
 * @package edoobox
 */
namespace Edoobox\Base;


class Translation extends BaseController
{
    public function register() {
        load_plugin_textdomain('booking-system-edoobox', false, "$this->root/languages");
    }
}