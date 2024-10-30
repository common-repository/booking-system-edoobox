<?php


namespace PluginTests\Factories;


use Edoobox\Api\ShortcodeApi;

class PostApiFactory
{
    public static function populatePostsWithShortcode($shortcode) {
        $postArray = [];
        ShortcodeApi::registerShortcode($shortcode);
        array_push($postArray, wp_insert_post([
            'post_content' => "[$shortcode something=\"else\"]",
            'post_name' => 'one',
            'post_status' => 'publish',
            'post_type' => 'page'
        ]));
        array_push($postArray, wp_insert_post([
            'post_content' => "[$shortcode type=\"next\"]",
            'post_name' => 'two',
            'post_status' => 'publish',
            'post_type' => 'page'
        ]));
        array_push($postArray, wp_insert_post([
            'post_content' => "[$shortcode type=\"next\" something=\"else\"]",
            'post_name' => 'three',
            'post_status' => 'publish',
            'post_type' => 'page'
        ]));
        array_push($postArray, wp_insert_post([
            'post_content' => "[$shortcode something=\"good\"]",
            'post_name' => 'four',
            'post_status' => 'publish',
            'post_type' => 'page'
        ]));
        array_push($postArray, wp_insert_post([
            'post_content' => "[$shortcode type=\"next\" something=\"good\"]",
            'post_name' => 'five',
            'post_status' => 'publish',
            'post_type' => 'page'
        ]));
        return $postArray;
    }
}