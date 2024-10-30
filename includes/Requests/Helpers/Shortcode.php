<?php

namespace Edoobox\Requests\Helpers;

class Shortcode {
    public static array $KNOWN_ATTRIBUTES = [
        'gtm' => false,
        'label' => '',
        'language' => "de",
        'limit' => '5',
        'q' => '',
        'root' => false,
        'start' => '',
        'tag' => '',
        'template' => 'List',
        'type' => 'default',
        'url' => '',
        'view' => ''
    ];

    public static $NAME = "edbs_panel";

    public static function getFirst($post): ?array {
        preg_match_all('/\[.*' . self::$NAME . '.*]/', $post->post_content, $match);
        $shortcode = $match[0];
        if ( ! $shortcode) {
            return null;
        }
        $attributes = shortcode_parse_atts($shortcode[0]);
        $mergedAttributes = self::getMergedAttributes($attributes);
        return [
            "attributes" => $mergedAttributes,
            "shortcode" => $shortcode[0]
        ];
    }

    public static function getMergedAttributes(array $attributes): array {
        return shortcode_atts(self::$KNOWN_ATTRIBUTES, $attributes, self::$NAME);
    }
}