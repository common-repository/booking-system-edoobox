<?php
/**
 * @package edoobox
 */

namespace Edoobox\Api;

use Edoobox\Base\Options;
use Edoobox\Base\BaseController;
use Edoobox\Base\Cache;
use Edoobox\Requests\Helpers\Shortcode;
use Exception;

class ShortcodeApi extends BaseController {
    const PANEL_REGISTRY_NAME = "edoobox_pages";
    const PANEL_NEXT_REGISTRY_NAME = "edoobox_pages_next";

    /**
     * Searches through all pages / posts and indexes the
     * pages / posts that have a shortcode with the name of SHORTCODE_NAME.
     *
     * @param string $shortcode
     * @param string $registry
     * @param bool $next
     * @return void
     */
    public static function index(string $shortcode = self::SHORTCODE_NAME, string $registry = self::PANEL_REGISTRY_NAME, bool $next = false) {
        $postsWithShortcode = PostApi::allWithShortcode($shortcode, $next);

        $shortcodeRegistry = array_map(function ($post) {
            // note: only first required for document title request
            $shortcode = Shortcode::getFirst($post);
            return [
                "post_id" => $post->ID,
                "shortcode" => $shortcode["shortcode"] ?? "",
                "shortcode_attributes" => $shortcode["attributes"] ?? []
            ];
        }, $postsWithShortcode);

        $newRegistryArray = array_map(function ($post) {
            return $post->ID;
        }, $postsWithShortcode);

        self::writePostIdsToRegistry($newRegistryArray, $registry);

        if ( ! $next ) {
            self::writePostIdsToRegistry($shortcodeRegistry, 'edoobox_shortcodes');
        } else {
            self::writePostIdsToRegistry($shortcodeRegistry, 'edoobox_shortcodes_next');
        }

        flush_rewrite_rules();
        Cache::deleteAll();
    }

    public static function hasShortcode($post, $registry = 'edoobox_shortcodes'): bool {
        return (bool) self::getShortcode($post, $registry);
    }

    public static function getShortcode($post, $registry = 'edoobox_shortcodes') {
        if ( ! $post) {
            return null;
        }

        $entries = self::getPostIdsFromRegistry($registry);
        $filtered_entries = array_filter($entries, function($entry) use ($post) {
            return $entry['post_id'] === $post->ID;
        });

        return ! empty($filtered_entries) ? array_values($filtered_entries)[0] : null;
    }

    public static function getAttributes($post, $registry = 'edoobox_shortcodes') {
        $shortcode = self::getShortcode($post, $registry);
        return $shortcode["shortcode_attributes"] ?? Shortcode::$KNOWN_ATTRIBUTES;
    }

    /**
     * Retrieves all post ids that have previously been stored in the wp_options
     * table in database under the given "registry" name.
     *
     * @param string $registry
     * @return array
     */
    public static function getPostIdsFromRegistry(string $registry = self::PANEL_REGISTRY_NAME): array {
        $results = Options::get($registry);
        return is_array($results) ? $results : ['allowed_classes' => false];
    }

    /**
     * Writes a given array of post ids to the wp_options table in database under
     * the given "registry" name.
     *
     * @param array $array
     * @param string $registry
     * @return bool
     */
    public static function writePostIdsToRegistry(array $array = [], string $registry = self::PANEL_REGISTRY_NAME): bool {
        try {
            $arrayString = $array;
        } catch ( Exception $exception ) {
            error_log("Couldn't serialize '$registry' registry: " . $exception->getMessage());
            return false;
        }
        return update_option($registry, $arrayString);
    }

    public static function registerShortcode($name = self::SHORTCODE_NAME) {
        add_shortcode($name, function () {
        });
    }
}