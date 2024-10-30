<?php
defined('ABSPATH') or die('No script kiddies please!');

/**
 * class EDB_check_shortcode
 * checks if a shortcode is on a post/page and executes further
 * functions necessary for filtering and saving ID's to the DB
 */
class EDB_check_shortcode
{
	public $options;
	public $loop_count;

	function __construct()
	{
	    // This options lists all pages, that have a shortcode.
		$this->options = 'edbs_pages';

		// Add callback to write page id to options, when post is saved.
        // The page id is passed to the method by wordpress.
		add_action('save_post', array($this, 'write_to_options'));

		// Add callback to write changes to options when post is deleted.
        // The page id isi passed to the method by wordpress.
		add_action('before_delete_post', array($this, 'write_to_options'));
	}

	/**
	 * checks if the post Object has a shortcode in its content
	 * and if yes, it checks the current state to determine if
	 * write|update|remove from the array/list or if it is already inside.
	 * @param $post_id
	 * requires the post_id of the post to check
	 */
	function write_to_options($post_id)
	{
	    // note: can this be removed?
		add_shortcode('edbs_panel', function () {});

		$hook = current_filter();
		$post_list = get_option($this->options);
		$postArray = unserialize($post_list);
		if ( ! is_array($postArray)) {
			$postArray = array();
		} else {
			$postArray = array_values($postArray);
		}
		// get the post Object
		$post = get_post($post_id);
		// If this is a revision, get real post ID
		if ($parent_id = wp_is_post_revision($post_id)) {
			$post_id = $parent_id;
		}

		// setup multi shortcode loops
		$shortcodes = ['edbs_panel'];
		if ($hook === 'before_delete_post') {
			// reset to single loop
			$shortcodes = ['edbs_panel'];
		}
		foreach ($shortcodes as $item) {

			$has_shortcode = has_shortcode($post->post_content, $item);

			if ($post_list && $has_shortcode && $hook !== 'before_delete_post') {
				// add post_id to array if it's not already inside
				$is_included = false;

				foreach ($postArray as $postItem) {
					if ($postItem === $post_id) {
						$is_included = true;
						break;
					}
				}

				if ( ! $is_included) {
					array_push($postArray, $post_id);
					update_option($this->options, serialize($postArray));
				}
			} else {
				if ($has_shortcode && $hook !== 'before_delete_post' && empty($postArray)) {
					// add post_id to array if array is empty
					update_option($this->options, serialize(array($post_id)));
				} else {
					if ( ! $has_shortcode || ($has_shortcode && $hook === 'before_delete_post') ) {
						// used to differentiate between different loops -> panel|next (if divisable by 2 it is [edbs_next])
						if ($this->loop_count % 2 === 0) {
							// remove post_id from array if it's inside the list
							foreach ($postArray as $item) {
								if ($post_id === $item) {
									$key = array_search($post_id, $postArray);

									unset($postArray[$key]);
									update_option($this->options, serialize($postArray));
									break;
								}
							}
						}
					}
				}
			}
			$this->loop_count++;
		}
	}

	/**
	 * loops through all post-types and executes write_to_options()
	 * for each of them.
	 */
	function checkAllPostsForShortcode()
	{
		$args = array(
			'numberposts' => -1,
			'post_type' => 'any'
		);
		$all_posts = get_posts($args);

		foreach ($all_posts as $post) {
			$this->write_to_options($post->ID);
		}
	}
}