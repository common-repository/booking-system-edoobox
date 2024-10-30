<?php

namespace Edoobox\Base;

class Timezone {

    public function register() {

        $timezone = Options::get('timezone_string');

        if ( $timezone ) {
            date_default_timezone_set($timezone);
        } else {
            // If no timezone is set in WordPress, fallback to UTC
            date_default_timezone_set('UTC');
        }

    }

}