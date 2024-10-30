<?php
defined('ABSPATH') or die('No script kiddies please!');

/**
 * Class EDB_backend
 * Sets up the backend view
 */
class EDB_backend
{
	public $edo_main;
	public $edo_ajax;
	public $post_list_panel;
	public $post_list_next;
	public $postArray;

	public function __construct($edo_main, $edo_ajax)
	{
		$this->edo_main = $edo_main;
		$this->edo_ajax = $edo_ajax;
		$this->post_list_panel = get_option('edbs_pages');
		$this->post_list_next = get_option('edbs_pages_next');
		if (isset($this->post_list_panel) && $this->post_list_panel && $this->post_list_panel !== '') {
			$arrayPanel = unserialize($this->post_list_panel);
		} else {
			$arrayPanel = array();
		}
		if (isset($this->post_list_next) && $this->post_list_next && $this->post_list_next !== '') {
			$arrayNext = unserialize($this->post_list_next);
		} else {
			$arrayNext = array();
		}
		$this->postArray = array_unique(array_merge($arrayPanel, $arrayNext));

		register_activation_hook(EDBS_PLUGIN_PATH . 'booking-system-edoobox.php', array($this, 'plugin_activation_write'));
		add_action('admin_init', array($this, 'plugin_init'));
		add_action('admin_menu', array($this, 'options_add_page'));
	}

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
	 * Sets up the options page
	 * and calls the corresponding functions for the admin view.
     * Rename: edoobox_add_menu_pages()
	 */
	function options_add_page()
	{
	    if ( ! $this->validate_user() ) {
	        return;
        }
		/*add_menu_page(__('edoobox booking system', 'booking-system-edoobox'), __('edoobox booking system', 'booking-system-edoobox'), 'manage_options', 'edoobox-system-view', array($this, 'edoobox_system_view'));
		add_submenu_page('edoobox-system-view', __('Options', 'booking-system-edoobox'), __('Options', 'booking-system-edoobox'), 'manage_options', 'edoobox-system-view', array($this, 'edoobox_system_view'));
		add_submenu_page('edoobox-system-view', __('Page Indexing', 'booking-system-edoobox'), __('Page Indexing', 'booking-system-edoobox'), 'manage_options', 'edoobox-page-view', array($this, 'edoobox_pages_view'));
		add_submenu_page('edoobox-system-view', __('Shortcode Next', 'booking-system-edoobox'), __('Shortcode Next', 'booking-system-edoobox'), 'manage_options', 'edoobox-next', array($this, 'shortcode_next_view'));
		add_submenu_page('edoobox-system-view', __('Caching', 'booking-system-edoobox'), __('Caching', 'booking-system-edoobox'), 'manage_options', 'edoobox-caching', array($this, 'caching_view'));*/
	}

	/**
	 * sets up the view of the backend with the AJAX button
	 * and then loops through the posts containing a shortcode
	 * displaying them in the browser
	 */
	function edoobox_pages_view()
	{
		if ( ! $this->validate_user() ) {
			return;
		}

		?>
        <div class="edoobox-plugin-admin wrap">
            <h1 class="mb-4"><?php _e("edoobox Online Booking System - Page Indexing", "booking-system-edoobox") ?></h1>
            <div class="edoobox-notice is-info mb-4">
                <p><?php _e("To optimize the loading time of Wordpress pages, all pages containing an edoobox plugin shortcode are indexed in advance.", "booking-system-edoobox") ?>
                    <br><?php _e("All pages that contain an edoobox shortcode are listed here. If a page is missing, newly added or incorrectly identified, click on the button \"Search All Pages\" to re-index the pages.", "booking-system-edoobox") ?>
                </p>
            </div>
            <button id="edo-ajax-output-btn"
                    type="button"
                    class="block button button-primary edbs-margin-b">
                <span class="dashicons dashicons-code-standards edbs-margin-r"
                      style="padding-top: 4px;"></span><?php _e("Search All Pages", "booking-system-edoobox") ?>
            </button>
            <span id="edo-ajax-output"></span>
			<?php

			$this->edo_ajax;
			?>
            <div class="edbs_list"><?php
				foreach ($this->postArray as $item) {
					$post = get_post($item);
					$the_permalink = get_permalink($post->ID);
					$edit_post_link = get_edit_post_link($post->ID);

					preg_match_all('/\[.*edbs_panel.*]/', $post->post_content, $match);
					preg_match_all('/\[.*edbs_next.*]/', $post->post_content, $match2);
					$pre_output = array_merge($match[0], $match2[0]);
					$pre_output = array_filter($pre_output);

					if ( ! $pre_output) {
						echo '<p>' . __('Error. Please scan the pages manually.', 'booking-system-edoobox') . '</p>';
					} else {
						?>
                        <div class='edbs-margin-b'>
                            <button class='button edbs-margin-r'>
                                <a href="<?php echo $the_permalink ?>"><?php _e("View Post", "booking-system-edoobox") ?></a>
                            </button>
                            <a href="<?php echo $the_permalink ?>"><strong><?php echo $post->post_title ?></strong></a>
                            -
                            <a href="<?php echo $edit_post_link ?>"><?php _e("Edit Post", "booking-system-edoobox") ?></a>
                            - <?php echo $post->post_status ?>
                            <button type='button'
                                    class='collapsible edbs-margin-l'><?php _e('Shortcodes', 'booking-system-edoobox') ?></button>
                            <div class='content'
                                 style='display: none;'><?php echo $this->output_shortcode_matches($pre_output) ?></div>
                        </div>
						<?php
					}
				}
				?>
            </div>
        </div>
        <style>
            .edbs-green {
                background-color: #2ECC40 /*green*/ !important;
            }

            .edbs-margin-r {
                margin-right: 10px !important;
            }

            .edbs-margin-b {
                margin-bottom: 10px !important;
            }

            .edbs-margin-l {
                margin-left: 10px !important;
            }
        </style>
        <script>
			var coll = document.getElementsByClassName("collapsible");
			var i;

			for (i = 0; i < coll.length; i++) {
				coll[i].addEventListener("click", function () {
					this.classList.toggle("active");
					var content = this.nextElementSibling;
					if (content.style.display === "block") {
						content.style.display = "none";
					} else {
						content.style.display = "block";
					}
				});
			}
        </script>
		<?php
	}

	/**
	 * Uses match data from preg_match_all() to generate a printable string.
	 * @param $match
	 * array of the matched data from preg_match_all()
	 * @return string
	 * returns printable <pre> elements
	 */
	function output_shortcode_matches($match)
	{
		$output = '';
		foreach ($match as $item) {
			$output = $output . ' <pre>' . $item . '</pre>';
		}
		return $output;
	}

	/**
	 * writes a temporary option to help the plugin check if it was
	 * activated on before this instances execution
	 */
	function plugin_activation_write()
	{
		add_option('edbs_plugin_activation', 'just-activated');
	}

	/**
	 * function plugin_init
	 * used to check if the plugin was "just activated". Runs on each *admin_init*
	 * but won't execute further unless it was "just activated"
	 */
	function plugin_init()
	{
		if (get_option('edbs_plugin_activation') == 'just-activated') {
			delete_option('edbs_plugin_activation');
			$this->edo_main->checkAllPostsForShortcode();
		}
	}

	function edoobox_system_view()
	{
		if ( ! $this->validate_user() ) {
			return;
		}
		/*include_once(EDBS_PLUGIN_PATH . 'admin/admin_edbs_edit.php');*/
	}

	function shortcode_next_view()
	{
		if ( ! $this->validate_user() ) {
			return;
		}
		$options_next = get_option('edbs_next_options', false);
		$options_next_templates = get_option('edbs_next_options_templates', [0 => '']);
		$options_lastEditedTemplate = get_option('edbs_next_options_currentTemplate', '');

		/**
         * Sets the url for the root="..." field safely.
		 * @return string
		 */
        function getTheUrl()
		{
			$options_edbs_pages = unserialize(get_option('edbs_pages'));
			if ($options_edbs_pages && isset($options_edbs_pages[0])) {
				$url = get_permalink($options_edbs_pages[0]);
				if ( $url ) {
				    return $url;
				}
			}
			return get_site_url() . '/ihre_edoobox_seite';
		}
		$fill_url = getTheUrl();

		foreach ($options_next_templates as $key => $value) {
			$options_next_templates[$key] = stripslashes($value);
		}

		$first_template = array_values($options_next_templates)[0];

		if ($options_next) {
			if ( ! isset($options_next['isActive'])) {
				$options_next['isActive'] = 1;
			}
		}
		if ($options_next_templates) {
			if ( ! isset($options_next[0])) {
				// set the default shortcode HTML to edit
				$options_next[0] = file_get_contents(EDBS_PLUGIN_PATH . 'views/shortcode_next.html');
			}
		}

		settings_errors();
		?>
        <div class="edoobox-plugin-admin wrap">
            <h1 class="mb-4"><?php _e("edoobox Online Booking System - Shortcode Pro", "booking-system-edoobox") ?></h1>
            <p><?php _e('<div class="bg-blue-100 border border-solid border-blue-700 mb-8 p-4 rounded text-blue-700"><strong>ℹ️ Note</strong><br>If you would like to embed your standard offer into your website, use the shortcode from the edoobox tool. <a class="text-blue-700 underline" href="https://docs.edoobox.com/knowledge-base/wordpress-website-einbinden-wp-plugin-iframe/" target="_blank">Go here for instructions.</a></div><div class="flex items-center"><h2 class="mr-4">Do you want to create a special display?</h2><div class="bg-purple-100 border border-solid border-purple-700 px-2 py-0.5 rounded text-xs text-purple-700">Developers only</div></div><div>With the Shortcode Pro you have the possibility, at a place defined by them (for example, On the home page), to highlight their next offers just before the launch. Define in the variable <pre class="inline"><code>limit</code></pre> the number of offers that are displayed. With HTML knowledge you can also personalize this visually and generate your own templates. You can find the appropriate variables under <strong>example variables / extend values</strong>. We provide them with two templates. The Table View / List View template cannot be modified, but can be used for your own template.</div>', 'booking-system-edoobox') ?></p>
            <p><?php _e("Below you can see a list of variables that are usable in the templates.", "booking-system-edoobox") ?>
                <br><?php _e("The variables are space sensitive, which means they need a space between the variable and the double brackets as follows: <pre class=\"inline\"><code>{{ variable }}</code></pre>", "booking-system-edoobox") ?>
            </p>
            <p><?php _e('Copy the following shortcode and paste it into your desired page.', 'booking-system-edoobox') ?></p>

			<?php _e('Your Shortcode:', 'booking-system-edoobox') ?>
            <div id="edbs_shortcode_preview">
                <b>[edbs_panel type="<span style="background-color: #7FDBFF /*blue*/;"
                                           data-tooltip="<?php _e('the shortcode type', 'booking-system-edoobox') ?>"
                                           data-flow="top">next</span>"
                   language="de"
                   limit="<span style="background-color: #01FF70 /*lightgreen*/"
                                data-tooltip="<?php _e('the ammount of events to show. (1-X)', 'booking-system-edoobox') ?>"
                                data-flow="top">5</span>"
                   template="<span class="edbs-replace"
                                   data-tooltip="<?php _e('the template name that should be used.', 'booking-system-edoobox') ?>"
                                   data-flow="top">custom</span>"
                   root="<?php echo $fill_url; ?>"
                   ]</b></p>
            </div>
            <button id="edbs_copy_next_sc"
                    class="button button-small"><?php _e('copy shortcode', 'booking-system-edoobox') ?>
                <span class="hidden dashicons dashicons-saved"></span></button>
            <hr>

            <details class="edbs-margin-t">
                <summary class="button">
                    <b><?php _e("Expand example variables / values", "booking-system-edoobox") ?></b></summary>
                <pre>
                    'id' => string 'offer_6c7c0547ab78_4450937827'
                    'name' => string 'Event One'
                    'number' => string ''
                    'shortdescription' => string 'Our event focuses on the ability to concentrate ... '
                    'user_maximum' => string '10'
                    'user_minimal' => string '1'
                    'start_date' => string '2022/05/18'
                    'end_date' => string '2022/05/22'
                    'deadline' => string '2024-07-08T23:55:00+02:00'
                    'image' => string 'https://app1.edoobox.com/getFile/imgT/F_9051/2db6714e5e4795415b3db26451ab0adf.jpg'
                    'place_id' => string 'place_02088ad3f332_-9086'
                    'category_id' => string 'category_3e4cf003d4b5_4255119442'
                    'status' => string '1'
                    'lesson_booking' => boolean false
                    'waiting_list' => boolean false
                    'offer_details_url' => string 'Harmony/Kurs.ed.491763'
                    'booking_status' => string 'normal'
                    'booking_start_url' => string 'https://app1.edoobox.com/de/book/9cHWzgFd1o1bzBDaBNTc6ZFeaNEZsdENMFzR6RXayZ2N4ZUbXNlVkBFb5lkQCFWTJJjZxk1NytUZYNmZkNFZYxGSxIGNEFVORVlcWl0dygUQQNmS0p0bulmTP9iWzJFRhd3S2RkdMNkYWBza/?edstart=0'
                    'rewriteUrl' => string '/sample-page/sub-shortcode/erin1992/Harmony/Kurs.ed.491763'</pre>

                <div style="color: #2ECC40 /*green*/; border-left: 10px solid #2ECC40 /*green*/; padding-left: 10px;">
					<?php _e("Using 'name' the variable would look like this in the template: {{ name }} and output: 'Event One'", "booking-system-edoobox") ?>
                    <br>
					<?php _e("Any returned variable from the v1/offers API is automatically added to usable template-variables.", "booking-system-edoobox") ?>
                </div>
                </pre>
                <style>
                    .edbs-margin-t {
                        margin-top: 20px;
                    }
                </style>
            </details>
            <br />
            <form method="post"
                  action="">
                <table class="form-table">
                    <tbody>
					<?php
					settings_fields('edbs-next-options-group');
					wp_nonce_field('next_meta_box_nonce', 'next_meta_box_nonce');
					?>
                    <tr>
                        <h2><?php _e('Base and custom templates', 'booking-system-edoobox') ?></h2>
                        <th>
                            <label><?php _e('Select Template', 'booking-system-edoobox') ?></label>
                        </th>
                        <td>
                            <select id="edbs_options_select">
                                <option value=""
                                        disabled
                                        selected
                                        hidden><?php _e('Select', 'booking-system-edoobox') ?>
                                </option>
                                <option value="List"><?php _e('"List" View - Listenansicht (default/fallback)', 'booking-system-edoobox') ?></option>
                                <option value="Table"><?php _e('"Table" View - Tabellenansicht', 'booking-system-edoobox') ?></option>
								<?php
								foreach ($options_next_templates as $key => $value) {
									echo '<option value="' . $key . '">' . $key . '</option>';
								}
								?>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <label><?php _e('Template Name:', 'booking-system-edoobox') ?></label>
                        </th>
                        <td>
                            <input id="edbs_next_template_keyname"
                                   class="regular-text edbs_box_style"
                                   placeholder="template-name"
                                   style="padding: 5px;"
                                    value="<?php echo $options_lastEditedTemplate; ?>" >
                            <br>
                            <div id="edbs_next_template_keyname_description"
                                 class="description"
                                 style="max-width: 80%;">
                                <p class="edbs-warning edbs_box_style"></p>
                                <p class="edbs-warning-2 edbs_box_style"><?php _e('If there is already a saved template with that name, it will be overwritten.', 'booking-system-edoobox') ?></p>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <textarea id="edbs_next_templates"
                          class="edbs-margin-t"
                          name="edbs_next_options[templates][custom]"
                          style="width:95%; min-height: 350px;"><?php echo $first_template ?></textarea>
				<?php submit_button(); ?>
            </form>
            <div id="edbs_default"
                 class="hidden"><?php echo file_get_contents(EDBS_PLUGIN_PATH . 'views/shortcode_next.html'); ?></div>
            <div id="edbs_table"
                 class="hidden"><?php echo file_get_contents(EDBS_PLUGIN_PATH . 'views/shortcode_next_table.html'); ?></div>
            <div id="edbs_jumbotron"
                 class="hidden"><?php echo file_get_contents(EDBS_PLUGIN_PATH . 'views/shortcode_next_jumbotron.html'); ?></div>
			<?php
			foreach ($options_next_templates as $key => $value) {
				?>
                <div id="edbs_cstm_<?php echo $key ?>"
                     class="hidden"><?php echo $value ?></div>
				<?php
			}
			?>
            <script>
            document.addEventListener("DOMContentLoaded", function(event) {

	            let optionsSelectElement = document.getElementById('edbs_options_select');
	            optionsSelectElement.options = optionsSelectElement.querySelectorAll('.option');
	            let insertField = document.getElementById('edbs_next_templates');
	            let shortcodePreviewText = document.querySelector('#edbs_shortcode_preview .edbs-replace');

	            let copy_next_button = document.getElementById('edbs_copy_next_sc');
	            copy_next_button.spanChild = copy_next_button.querySelector('span');
	            let edbs_shortcode_preview = document.getElementById('edbs_shortcode_preview');

	            let submit = document.getElementById('submit');
	            submit.disabled = true;

	            let templateKeyName = document.getElementById('edbs_next_template_keyname');
	            let templateKeyNameWarning = document.querySelector('#edbs_next_template_keyname_description .edbs-warning');
	            let templateKeyNameWarning2 = document.querySelector('#edbs_next_template_keyname_description .edbs-warning-2');

	            let getDefaultTemplate = document.getElementById('edbs_default');
	            let getTableTemplate = document.getElementById('edbs_table');

	            const defaultTemplate = getDefaultTemplate.innerHTML;
	            const tableTemplate = getTableTemplate.innerHTML;

	            // initiating events so we don't have to rewrite the code to work well.
	            function setCurrentTemplate() {
		            let customEvent = {};
		            customEvent.change = new CustomEvent('change');

		            for (let item of optionsSelectElement) {
                    	if (item.value === templateKeyName.value) {
                            item.selected =  true;
		                    templateKeyName.dispatchEvent(customEvent.change)
		                    optionsSelectElement.dispatchEvent(customEvent.change)
                        }
                    }
                }

	            optionsSelectElement.addEventListener('change', function () {
		            let keyName = optionsSelectElement.options[optionsSelectElement.selectedIndex].value;
		            let interrupt = false;
		            templateKeyName.value = keyName;

		            switch (keyName) {
			            case 'List':
				            interrupt = true;
				            insertField.innerHTML = defaultTemplate;
				            break;
			            case 'Table':
				            interrupt = true;
				            insertField.innerHTML = tableTemplate;
				            break;
		            }

		            templateKeyName.dispatchEvent(new Event('change', { 'bubbles': true }));

		            if (interrupt) return;

		            let keyValue = document.getElementById('edbs_cstm_' + keyName);
		            insertField.innerHTML = keyValue.innerHTML;

	            });

	            for (let item of ['change', 'keyup']) {
		            templateKeyName.addEventListener(item, showHints);
	            }

	            function showHints() {
		            let value = (templateKeyName.value === 'List' || templateKeyName.value === 'Table');
		            submit.disabled = value;
		            insertField.setAttribute('name', 'edbs_next_options[templates][' + templateKeyName.value + ']');
		            shortcodePreviewText.innerHTML = templateKeyName.value;
		            shortcodePreviewText.style.backgroundColor = '#FFDC00 /*yellow*/';
		            templateKeyNameWarning2.classList.remove('edbs_highlight');
		            templateKeyNameWarning.classList.remove('edbs_highlight_bad');

		            copy_next_button.spanChild.classList.add('hidden');

		            for (let i = 0; i < optionsSelectElement.options.length; i++) {
			            let issue = false;
			            let item = optionsSelectElement.options[i];
			            item.classList.remove('edbs_highlight');
			            templateKeyName.classList.remove('edbs_highlight', 'edbs_highlight_bad', 'edbs_highlight_ok');

			            if (item.innerHTML === templateKeyName.value) {
				            item.classList.add('edbs_highlight');
				            templateKeyNameWarning2.classList.add('edbs_highlight');
				            templateKeyName.classList.add('edbs_highlight');
				            issue = true;
			            }
			            if (value) {
				            templateKeyNameWarning.innerHTML = templateKeyName.value + <?php _e('" is a base template. Please do not use the base templates predefined by edoobox as template names."', 'booking-system-edoobox'); ?>;
				            templateKeyNameWarning.classList.add('edbs_highlight_bad');
				            issue = true;
			            } else {
				            templateKeyNameWarning.innerHTML = '';
			            }

			            if ( ! issue) {
				            templateKeyName.classList.add('edbs_highlight_ok');
			            }
		            }

	            }

	            copy_next_button.addEventListener('click', function () {
		            // copy the shortcode
		            console.log(edbs_shortcode_preview.innerText);
		            let aux = document.createElement("input");
		            aux.setAttribute("value", edbs_shortcode_preview.innerText);
		            // Append the aux input to the body
		            document.body.appendChild(aux);

		            // Highlight the content
		            aux.select();
		            aux.setSelectionRange(0, 99999); /*For mobile devices*/

		            // Execute the copy command
		            document.execCommand("copy");
		            // Remove the input from the body
		            document.body.removeChild(aux);

		            copy_next_button.spanChild.classList.remove('hidden');
		            copy_next_button.spanChild.style.color = '#2ECC40 /*green*/';
	            });

	            setCurrentTemplate()
            });
            </script>
            <style>
                .edbs_highlight {
                    background-color: #FFDC00 /*yellow*/;
                }

                .edbs_highlight_ok {
                    background-color: #2ECC40 /*green*/;
                }

                .edbs_highlight_bad {
                    background-color: #FF851B /*orange*/;
                    color: black;
                }

                .edbs_box_style {
                    border-radius: 5px;
                    padding: 10px;
                }

                [data-tooltip] {
                    position: relative;
                    cursor: pointer;
                }

                [data-tooltip]:before,
                [data-tooltip]:after {
                    line-height: 1;
                    font-size: .9em;
                    pointer-events: none;
                    position: absolute;
                    box-sizing: border-box;
                    display: none;
                    opacity: 0;
                }

                [data-tooltip]:before {
                    content: "";
                    border: 5px solid transparent;
                    z-index: 100;
                }

                [data-tooltip]:after {
                    content: attr(data-tooltip);
                    text-align: center;
                    min-width: 3em;
                    max-width: 21em;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding: 6px 8px;
                    border-radius: 3px;
                    background: #85144b /*maroon*/;
                    color: #FFFFFF;
                    z-index: 99;
                }

                [data-tooltip]:hover:before,
                [data-tooltip]:hover:after {
                    display: block;
                    opacity: 1;
                }

                [data-tooltip]:not([data-flow])::before,
                [data-tooltip][data-flow="top"]::before {
                    bottom: 100%;
                    border-bottom-width: 0;
                    border-top-color: #85144b /*maroon*/;
                }

                [data-tooltip]:not([data-flow])::after,
                [data-tooltip][data-flow="top"]::after {
                    bottom: calc(100% + 5px);
                }

                [data-tooltip]:not([data-flow])::before, [tooltip]:not([data-flow])::after,
                [data-tooltip][data-flow="top"]::before,
                [data-tooltip][data-flow="top"]::after {
                    left: 50%;
                    -webkit-transform: translate(-50%, -4px);
                    transform: translate(-50%, -4px);
                }

                [data-tooltip][data-flow="bottom"]::before {
                    top: 100%;
                    border-top-width: 0;
                    border-bottom-color: #4621FF;
                }

                [data-tooltip][data-flow="bottom"]::after {
                    top: calc(100% + 5px);
                }

                [data-tooltip][data-flow="bottom"]::before, [data-tooltip][data-flow="bottom"]::after {
                    left: 50%;
                    -webkit-transform: translate(-50%, 8px);
                    transform: translate(-50%, 8px);
                }

                [data-tooltip][data-flow="left"]::before {
                    top: 50%;
                    border-right-width: 0;
                    border-left-color: #4621FF;
                    left: calc(0em - 5px);
                    -webkit-transform: translate(-8px, -50%);
                    transform: translate(-8px, -50%);
                }

                [data-tooltip][data-flow="left"]::after {
                    top: 50%;
                    right: calc(100% + 5px);
                    -webkit-transform: translate(-8px, -50%);
                    transform: translate(-8px, -50%);
                }

                [data-tooltip][data-flow="right"]::before {
                    top: 50%;
                    border-left-width: 0;
                    border-right-color: #4621FF;
                    right: calc(0em - 5px);
                    -webkit-transform: translate(8px, -50%);
                    transform: translate(8px, -50%);
                }

                [data-tooltip][data-flow="right"]::after {
                    top: 50%;
                    left: calc(100% + 5px);
                    -webkit-transform: translate(8px, -50%);
                    transform: translate(8px, -50%);
                }

                [data-tooltip=""]::after, [data-tooltip=""]::before {
                    display: none !important;
                }
            </style>
        </div>
		<?php
	}

	function caching_view()
	{
		if ( ! $this->validate_user() ) {
			return;
		}
		//vars
		$cachingTime = get_option('edbs_caching_time', 5); // default: 5min
		?>
        <div class="edoobox-plugin-admin wrap">
            <h1 class="mb-4"><?php _e("edoobox Online Booking System - Caching", "booking-system-edoobox") ?></h1>
            <form method="post"
                  action="">
                <div class="edoobox-notice is-info mb-4">
                    <p><?php _e('Caching has pros and cons. While it speeds up pageloading, it may cause the page to show outdated data. So a lower value will result in longer loading times, but more likely correct data. If edoobox seems slow however, we recommend adding a few minutes more.', 'booking-system-edoobox') ?></p>
                </div>
                <table class="form-table">
                    <tbody>
					<?php
					settings_fields('edbs-caching-options-group');
					wp_nonce_field('caching_meta_box_nonce', 'caching_meta_box_nonce');
					?>
                    <tr>
                        <th><label><?php _e('Caching Time (Minutes)', 'booking-system-edoobox') ?>:</label></th>
                        <td>
                            <input id="edbs_caching_minutes"
                                   class="border border-blue-700 border-solid px-4 py-2 rounded text-blue-700"
                                   name="edbs_caching_minutes"
                                   value="<?php echo $cachingTime ?>"
                                   placeholder="<?php echo $cachingTime ?>"> ~
                            <span id="edbs_caching_hours"><?php echo $cachingTime / 60 ?></span> <?php _e('Hours', 'booking-system-edoobox') ?>
                            <p class="description"><?php _e('Define how long edoobox pages should be cached.', 'booking-system-edoobox') ?></p>
                        </td>
                    </tr>
                    <tr>
                        <th><?php _e('Flush Cache', 'booking-system-edoobox') ?>:</th>
                        <td>
                            <button id="edbs_flush_cache_btn" class="button"><?php _e('Flush Cache', 'booking-system-edoobox') ?></button>
                            <p class="description"><?php _e('By flushing the cache, you will immediately see changes in displayed pages.', 'booking-system-edoobox') ?></p>
                        </td>
                    </tr>
                    <tr>
                        <th><?php submit_button(); ?></th>
                    </tr>
                    </tbody>
                </table>
            </form>
            <div id="edbs_overlay" class="edbs_overlay hidden">
                <div class="edbs_overlay__inner">
                    <div class="edbs_overlay__content"><span class="edbs_spinner"></span></div>
                </div>
            </div>
            <script>
				let edbs_element = {};
				edbs_element.caching_minutes = document.getElementById('edbs_caching_minutes');
				edbs_element.caching_hours = document.getElementById('edbs_caching_hours');

				for (let item of ['change', 'keyup']) {
					edbs_element.caching_minutes.addEventListener(item, convertToHours);
				}

				function convertToHours() {
					edbs_element.caching_hours.innerHTML = edbs_element.caching_minutes.value / 60;
				};
            </script>
            <style>
                .edbs_overlay {
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    background: rgba(0,0,0,0.3);
                }

                .edbs_overlay__inner {
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                }

                .edbs_overlay__content {
                    left: 50%;
                    position: absolute;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }

                .edbs_spinner {
                    width: 75px;
                    height: 75px;
                    display: inline-block;
                    border-width: 2px;
                    border-color: rgba(255, 255, 255, 0.05);
                    border-top-color: #fff;
                    animation: edbs_spin 1s infinite linear;
                    border-radius: 100%;
                    border-style: solid;
                }

                @keyframes edbs_spin {
                    100% {
                        transform: rotate(360deg);
                    }
                }
            </style>
        </div>
		<?php
	}
}