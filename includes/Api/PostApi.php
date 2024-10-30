<?php
/**
 * @package edoobox
 */

namespace Edoobox\Api;

class PostApi
{
    public static function all() {
        return get_posts([
            'numberposts' => -1,
            'post_type' => "any"
        ]);
    }

    public static function allWithShortcode(string $shortcode, bool $next = false) : array {
        ShortcodeApi::registerShortcode($shortcode);
        return array_filter(self::all(), function ($post) use ($next, $shortcode) {
            $hasShortcode = has_shortcode($post->post_content, $shortcode);
            $isNext = preg_match("/type=\"next\"/", $post->post_content);
            return $next ? ($hasShortcode && $isNext) : ($hasShortcode && ! $isNext);
        });
    }
}