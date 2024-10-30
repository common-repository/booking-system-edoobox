<?php

namespace Edoobox\Requests;

use Edoobox\Base\Settings;

class Page {

    public static function getCurrentPageCacheKey(): string {
        global $post;
        global $wp;

        $auth = new Auth();
        $settings = new Settings();
        $currentUrl = home_url(add_query_arg(array(), $wp->request));
        $apiVersion = $settings->get(Settings::USE_V2) ? 'V2' : 'V1';
        return trim("{$post->ID}_{$apiVersion}_{$auth->getPublicKey()}_" . md5($currentUrl));
    }

}