<?php
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );
/**
 * Class EDB_ajax
 * is responsible for ajax related backend button/functions
 */
class EDB_ajax {
	public $edo_main;

	/**
	 * EDB_ajax constructor uses a passed class to work with. Yes it is weird.
	 * @param $edo_main class|null
	 */
	function __construct($edo_main = null) {
		if ( $edo_main ) {
			$this->edo_main = $edo_main;
			add_action('admin_enqueue_scripts', array($this, 'edo_enqueue'));
			add_action('wp_ajax_edo_ajax_action', array($this, 'edo_ajax_action'));
			add_action('wp_ajax_edo_ajax_checkapicred_action', array($this, 'edo_ajax_checkapicred_action'));
			add_action('wp_ajax_edo_ajax_flushcache_action', array($this, 'edo_ajax_flushcache_action'));
		}
	}

	/**
	 * Enqueues the scripts need for the AJAX function
	 */
	function edo_enqueue() {
		wp_enqueue_script(
		    'ajax-script',
            plugins_url( 'js/dist/admin.js' , __DIR__ ),
            array('jquery') ,
            'v2.1.0.0'
        );
		wp_localize_script(
		    'ajax-script',
            'ajax_object',
			array( 'ajax_url' => admin_url( 'admin-ajax.php' ))
        );
	}

	/**
	 * gets executed by the AJAX function in the frontend
	 * then loops through the posts executing checkAllPostsForShortcode()
	 */
	function edo_ajax_action() {
		$this->edo_main->checkAllPostsForShortcode();
		echo '...Finished.';
		wp_die();
	}

	/**
	 * Checks if the API Key can authenticate or not
	 */
	function edo_ajax_checkapicred_action() {
		$api1 = $_POST['api1'];
		$api2 = $_POST['api2'];
		$apiUrl = 'https://app1.edoobox.com/v1/offers';
		$API_Data = array(
			'api1' => $api1,
			'api2' => $api2,
			'language' => 'de',
		);
		$API_Data['limit'] = (object)[
			'start' => '',
			'reply' => '0'
		];
		$API_Data['filter'] = (object)[];

		$args = array(
			'body' => array('cms_data' => json_encode($API_Data)),
				'headers' => array(
					'Content-Type' => 'application/json; charset=utf-8',
					'Accept' => 'application/json'
				),
			'timeout' => 15,
			'method' => 'GET'
		);
		try {
			$ApiDataDecode = wp_remote_get($apiUrl, $args);
			$success = 'success';
			// if there is a message, and code isn't success 200
			if (is_wp_error($ApiDataDecode)) {
				throw new Exception($ApiDataDecode->get_error_message());
			} elseif (isset($ApiDataDecode['response']['message']) && $ApiDataDecode['response']['code'] !== 200) {
				throw new Exception($ApiDataDecode['response']['message'], $ApiDataDecode['response']['code']);
			}
		} catch (Exception $error) {
			$success = 'fail';
		}

		// echo $success;
		wp_die();
	}

	/**
	 * Flushes the transient cache of the edoobox templates manually
	 * credits: https://gist.github.com/kellenmace/7d8f3b4c48cef3fd68ebc8606415d7dd#file-delete-transients-by-prefix-php
	 * @param bool $die Set to false if not called through ajax. Otherwise the instance will DIE!
	 */
	public function edo_ajax_flushcache_action($die = true) {
		/**
		 * Delete all transients from the database whose keys have a specific prefix.
		 *
		 * @param string $prefix The prefix. Example: 'edbs_template_'.
		 */

		function delete_transients_with_prefix( $prefix ) {
			foreach ( get_transient_keys_with_prefix( $prefix ) as $key ) {
				delete_transient( $key );
			}
		}
		/**
		 * Gets all transient keys in the database with a specific prefix.
		 *
		 * Note that this doesn't work for sites that use a persistent object
		 * cache, since in that case, transients are stored in memory.
		 *
		 * @param string $prefix Prefix to search for.
		 * @return array Transient keys with prefix, or empty array on error.
		 */
		function get_transient_keys_with_prefix( $prefix ) {
			global $wpdb;

			$prefix = $wpdb->esc_like( '_transient_' . $prefix );
			$sql = "SELECT `option_name` FROM $wpdb->options WHERE `option_name` LIKE '%s'";
			$keys = $wpdb->get_results( $wpdb->prepare( $sql, $prefix . '%' ), ARRAY_A );

			if ( is_wp_error( $keys ) ) {
				return [];
			}


			return array_map( function( $key ) {
				// Remove '_transient_' from the option name.
				return str_replace('_transient_','', $key['option_name']);
			}, $keys );
		}

		delete_transients_with_prefix('edbs_template_');

		// echo 'success';
		if ($die) { wp_die(); }
	}
}