<?php

namespace Edoobox\Requests;

use Edoobox\Requests\Helpers\Shortcode;

class DocumentTitle
{
    public static function set($title) {

        global $post;

        $pattern = get_shortcode_regex();

        if ( ! $post) {
            return false;
        }

        preg_match_all("/$pattern/", $post->post_content, $matches);

        if (is_array($matches) && array_key_exists(0, $matches) && array_key_exists(0, $matches[0])) {
            $attr1 = shortcode_parse_atts($matches[0][0]);
            $attr2 = Shortcode::$KNOWN_ATTRIBUTES;
            foreach ($attr1 as $key => $val) {
                if (array_key_exists($key, $attr2)) {
                    $attr2[$key] = $val;
                }
            }
            $apiResponse = $title;
            return isset($apiResponse['api']['data']['header']['title']) ? $apiResponse['api']['data']['header']['title'] : '';
        }

        return $title;
    }
}