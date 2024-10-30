<?php

namespace Edoobox\Base;

use Edoobox\Api\PostApi;

class Debugger
{
    public static function render($pluginPath)
    {
        global $wp_version;
        $settings= new Settings();
        $debugCodeQuery = get_query_var("edoobox-debug-code");
        $debugCodeActive = $settings->get(Settings::SETTINGS_DEBUG_ACTIVE_KEY_NAME);
        $debugCodeSettings = $settings->get(Settings::SETTINGS_DEBUG_KEY_NAME);
        $debugModeActive = $debugCodeActive &&
            $debugCodeQuery &&
            $debugCodeQuery === $debugCodeSettings;
        $pluginVersion = Settings::PLUGIN_VERSION;
        $wpVersion = $wp_version;
        $cachingTime = Options::get('edoobox_cache_time_in_s', 0);
        $shortcodes = self::renderAllShortcodesAsHtmlTableRows();

        if ($debugModeActive) {
            require_once($pluginPath . "/views/partials/view.debug.php");
        }
    }

    private static function renderAllShortcodesAsHtmlTableRows(): string
    {
        $posts = PostApi::all();
        return array_reduce(array_map(function ($post) {
            preg_match_all('/\[.*edbs_panel.*]/', $post->post_content, $match);
            $title = $post->post_title;
            $shortcode = $match[0][0] ?? "kein Shortcode";
            return "<tr><td>Seite: $title</td><td>$shortcode</td></tr>";
        }, $posts), function ($a, $b) {
            return $a . $b;
        }, "");
    }
}