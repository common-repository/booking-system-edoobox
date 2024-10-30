<?php
/**
 * @package edoobox
 */

namespace Edoobox\Base;

use Edoobox\Helpers\Arr;

class Rewrite {

    public $edbs_options;
    public $edoobox_pages;

    public function register() {
        add_action('init', function () {

            LogTime::start('rewrite');

            $this->edbs_options = Options::get('edbs_options');
            $this->edoobox_pages = Options::get('edoobox_pages', ['allowed_classes' => false]);

            if ( isset($this->edbs_options['account_code']) ) {
                // Condition, if no pages stored yet.
                // 'generate_rewrite_rules' is fired after the rewrite rules are generated.
                // When rules are generated => fire setupRewriteRules.
                if ( ! empty($this->edoobox_pages) ) {
                    add_filter('generate_rewrite_rules', [$this, 'setupRewriteRules']);
                }

                // Add rewrite tag '%ed_url%' with available params (edcode, etc.)
                $this->setupRewriteTag();
                add_action('admin_init', [$this, 'firstTimeSetupRewrites']);
            }

            LogTime::stop('rewrite');
        });
    }

    /**
     * Sets up the WP rewrite rules for the URI
     *
     * @param $wp_rewrite
     * @return array
     */
    function setupRewriteRules($wp_rewrite) {
        $feed_rules = [];

        if ( Arr::get($this->edoobox_pages, 'allowed_classes') === false) {
            return $wp_rewrite->rules;
        }

        foreach ( $this->edoobox_pages as $post ) {
            $post = get_post($post);
            $key = '^.*(?i)' . $post->post_name . '/(?i)' . $this->edbs_options['account_code'] . '.' . '(.+)/?$';
            $value = 'index.php?page_id=' . $post->ID . '&ed_url=$matches[1]';
            $feed_rules[$key] = $value;
            $key = '^.*' . $post->post_name . '/' . $this->edbs_options['account_code'] . '.?$';
            $feed_rules[$key] = $value;
        }

        $wp_rewrite->rules = $feed_rules + $wp_rewrite->rules;

        Options::set('edoobox_rewrite_rules', $feed_rules);
        Options::set('edoobox_last_rewrite', time());

        return $wp_rewrite->rules;
    }

    function setupRewriteTag() {
        global $wp;
        foreach ( ['edcode', 'edref', 'edtag', 'edlink', 'edstart', 'edend', 'edview', 'q', 'edoobox-debug-code'] as $GetParam ) {
            $wp->add_query_var($GetParam);
        }
        // From docs: https://developer.wordpress.org/reference/functions/add_rewrite_tag/
        // This function can be used to make WordPress aware of custom querystring variables.
        // Generally, it’s used in combination with add_rewrite_rule() to create rewrite rules
        // for pages with custom templates.
        // If you use this function to declare a rewrite tag that already exists, the existing tag will be overwritten.
        // This function must be called on init or earlier.
        add_rewrite_tag('%ed_url%', '([^&]+)');
    }

    function firstTimeSetupRewrites() {
        // this will trigger the 'generate_rewrite_rules'-hook
        flush_rewrite_rules();
    }

}