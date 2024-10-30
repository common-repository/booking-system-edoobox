<?php
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

class EDB_rewrite {
	public $edbs_options;
	public $edbs_pages;

	function __construct() {
		$this->edbs_options = get_option('edbs_options');
		$this->edbs_pages = unserialize(get_option('edbs_pages'));
		if (isset($this->edbs_options['account_code'])) {
			if ( ! empty($this->edbs_pages)) {
				add_filter( 'generate_rewrite_rules', array( $this, 'setupRewriteRules' ) );
			}
			$this->setupRewriteTag();
			add_action('admin_init', array($this, 'firstTimeSetupRewrites'));
		}
	}

	/**
	 * Sets up the WP rewrite rules for the URI
	 * @param $post
	 * requires a WP post Object to be passed as a parameter
	 */
	function setupRewriteRules($wp_rewrite){
		$feed_rules = array();

		foreach ( $this->edbs_pages as $post ) {
			$post               = get_post( $post );
			$key                = '^.*(?i)' . $post->post_name . '/(?i)' . $this->edbs_options['account_code'] . '.' . '(.+)/?$';
			$value              = 'index.php?page_id=' . $post->ID . '&ed_url=$matches[1]';
			$feed_rules[ $key ] = $value;
			$key                = '^.*' . $post->post_name . '/' . $this->edbs_options['account_code'] . '.?$';
			$feed_rules[ $key ] = $value;
		}

		$wp_rewrite->rules = $feed_rules + $wp_rewrite->rules;
		return $wp_rewrite->rules;
	}

	function setupRewriteTag(){
		global $wp;
		foreach(array('edcode', 'edref', 'edtag', 'edlink', 'edstart', 'edend', 'edview', 'q') as $GetParam){
			$wp->add_query_var( $GetParam );
		}
		add_rewrite_tag('%ed_url%', '([^&]+)');
	}

	function firstTimeSetupRewrites(){
		// this will trigger the 'generate_rewrite_rules'-hook
		flush_rewrite_rules();
	}
}