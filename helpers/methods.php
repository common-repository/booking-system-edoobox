<?php
defined('ABSPATH') or die('No script kiddies please!');
/**
 * Make sure there is a logged in user with the appropriate rights
 */
function validate_user() {
	if ( is_user_logged_in() || current_user_can('manage_options')) {
		return true;
	} else {
		return false;
	}
}
/**
 * Runs the system if $post matches one of the posts in options array
 */
function edbs_setup_system_on_match()
{
    // make global $post variable available in scope
	global $post;

	if (isset($post)) {
		$post_list = get_option('edbs_pages');
		$postArray = unserialize($post_list);

		if (is_array($postArray)) {
			$postArray = array_values($postArray);

			foreach ($postArray as $item) {
				if ($item === $post->ID) {
					new EDB_system();
					break;
				}
			}
		}
	}
}

/**
 * saves backend options to WP options DB
 */
function edbs_save_options_page()
{
	if ( ! validate_user() ) {
		return;
	}
	if ( ! isset($_POST['meta_box_nonce']) || ! wp_verify_nonce($_POST['meta_box_nonce'], 'meta_box_nonce')) {
		return;
	}

	$multidimensional_options = array(
		'account_code',
		'public_key',
		'secret_key',
		'design',
	);

	$multidimensional_options_update = array();
	foreach ($_POST['edbs_options'] as $key => $value) {
		if (in_array($key, $multidimensional_options)) {
			$multidimensional_options_update[$key] = sanitize_text_field($value);
		}
	}
	update_option('edbs_options', $multidimensional_options_update);
}

/**
 * saves backend caching options to WP optionsDB
 * and then flushes the cache through class EDB_ajax()
 */
function edbs_save_cache_options_page()
{
	if ( ! validate_user() ) {
		return;
	}
	if ( ! isset($_POST['caching_meta_box_nonce']) || ! wp_verify_nonce($_POST['caching_meta_box_nonce'], 'caching_meta_box_nonce')) {
		return;
	}

	$option = 'edbs_caching_minutes';
	$optionSanitized = sanitize_text_field($_POST[$option]);
	update_option('edbs_caching_time', $optionSanitized);

	$edo_ajax = new EDB_ajax;
	// using false as an attribute is critical to keep the instance alive!
	$edo_ajax->edo_ajax_flushcache_action(false);
}

/**
 * saves backend next options to WP optionsDB
 */
function edbs_save_next_options_page()
{
	if ( ! validate_user() ) {
		return;
	}
	if ( ! isset($_POST['next_meta_box_nonce']) || ! wp_verify_nonce($_POST['next_meta_box_nonce'], 'next_meta_box_nonce')) {
		return;
	}

	$multidimensional_options = array(
		'templates',
		'isActive',
		'isSelected'
	);

	$db_options_next_templates = get_option('edbs_next_options_templates', array());

	$multidimensional_options_update = array();
	foreach ($_POST['edbs_next_options'] as $key => $value) {
		if (in_array($key, $multidimensional_options)) {
			if ($key !== 'templates' ) { // don't sanitize the template-input field
				$multidimensional_options_update[$key] = sanitize_text_field($value);
			} else {
				$multidimensional_options_update[$key] = sanitize_post($value);
			}
		}
	}

	$templates = array_merge($db_options_next_templates, $multidimensional_options_update['templates']);
	unset($templates['ID']);
	unset($templates['filter']);

    function array_key_first(array $array) { foreach ($array as $key => $value) { return $key; } }

	update_option('edbs_next_options_currentTemplate', array_key_first($multidimensional_options_update['templates']));
	unset($multidimensional_options_update['templates']);

	update_option('edbs_next_options_templates', $templates);
	update_option('edbs_next_options', $multidimensional_options_update);
}

/**
 * Load the internationalization
 */
function edbs_load_textdomain()
{
	load_plugin_textdomain('booking-system-edoobox', false, dirname(plugin_basename(__DIR__)) . '/languages/');
}

/**
 * Responsible for loading the user scripts (CSS/JS)
 */
function loadUserScripts($design, $bootstrapName) {
	$upload_dir = wp_upload_dir();
	$dir = trailingslashit($upload_dir['basedir']) . 'edoobox/css/';

	if ( $design !== 'bootstrap') {
		wp_enqueue_style('prefix_bootstrap', plugins_url('../css/bootstrap.min.css', __FILE__));
	} elseif (file_exists($dir)) {
		wp_enqueue_style('edbs_' . $bootstrapName . 'bootstrap', $upload_dir['baseurl'] . '/edoobox/css/' . $bootstrapName . '.css');
	}
}