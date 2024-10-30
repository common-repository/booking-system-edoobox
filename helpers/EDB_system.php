<?php
defined('ABSPATH') or die('No script kiddies please!');

/**
 * Class EDB_system
 * heaps of functions from the original EBS file (pre update)
 */
class EDB_system
{

	public $edbs_options = false;
	public $edbs_cachingTime = '5';
	public $shortcodeParameter = array(
		'url' => '',
		'language' => false,
		'tag' => '',
		'label' => '',
		'view' => '',
		'start' => '',
		'limit' => '5',
		'type' => 'default',
		'template' => 'List',
		'q' => '',
		'gtm' => false,
		'root' => false
	);
	public $PlaceH = '/img/placeholder_200x300.jpg';
	public $edbs_user_scripts = false;
	public $edbs_shortcode_counter = 0;
	public $bootstrap_name = false;
	public $gtm_id = false;
	public $cachingActive = true;

	/**
	 * EDB_system constructor.
	 * Needs a post Object to be passed so the init function can work.
	 */
	function __construct()
	{
		$this->edbs_options = get_option('edbs_options');
		$this->edbs_cachingTime = get_option('edbs_caching_time', 5);
		add_shortcode('edbs_panel', array($this, 'edbs_shortcode_handler'));
		add_filter('pre_get_document_title', array($this, 'edbs_title'));
	}

	/**
	 * Gets executed IF a shortcode was found in the content
	 * @param $atts
	 * @param null $content
	 *
	 * @return string
	 */
	public function edbs_shortcode_handler($atts, $content = null)
	{
		global $post;
		$options_next_templates = get_option('edbs_next_options_templates', [0 => '']);

		$atts = shortcode_atts($this->shortcodeParameter, $atts, 'edbs_panel');
		$ApiResult = $this->edbs_api($atts, $this->edbs_shortcode_counter);
		// return if there are multiple shortcodes, and the current page is on a "read more" sub-page
		if ($ApiResult === false) {
			return '';
		}
		$count = $this->edbs_shortcode_counter;
		$this->edbs_shortcode_counter++;

		// if option is set to use bootstrap download the file if it isn't already
		if ($this->edbs_options['design'] === 'bootstrap') {
			if (isset($ApiResult['api']['data']['header']['bootstrap'])) {
				$this->bootstrap_name = $ApiResult['api']['data']['header']['bootstrap'];
				$edb_bootstrap = new EDB_bootstrap();
				$edb_bootstrap->setup($post->ID, $this->bootstrap_name);
			}
		}

		if ($atts['gtm'] && $count === 0) {
			wp_enqueue_script('edbs_google_tag_manager', plugins_url('../js/libraries/google-tag-manager/guest-google-tag-manager.js', __FILE__), array(), '1.0');
			wp_add_inline_script('edbs_google_tag_manager', 'var theGtmID = "' . $ApiResult['api']['data']['footer']['gtm_id'] . '";', 'before');

			$this->gtm_id = $ApiResult['api']['data']['footer']['gtm_id'];
			add_action('wp_footer', function () {
				test($this->gtm_id);
			}, 30);

			function test($gtm_id)
			{
				echo '<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' . $gtm_id . '"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->';
			}
		}

		loadUserScripts($this->edbs_options['design'], $this->bootstrap_name);

		$noFrame = 0;
		if ($atts['root'] != false && strpos($ApiResult['provider_url'], 'edoobox.com')) {
			$noFrame = 1;
		}

		// set some defaults so PHP doesn't crash
		$output = '';
		if ($atts['type'] === '') {
			$atts['type'] = 'default';
		}

		// setting up view depending on the shortcode 'type'
		switch ($atts['type']) {
			case 'default':
				// runs if there is no type set
				$output = "<style>" . $ApiResult['api']['data']['header']['css_height'] . "</style>";

				global $wp;
				$rewrite = str_replace(home_url(add_query_arg(array(), $wp->request)) . $this->PlaceH, plugins_url('js' . $this->PlaceH, __FILE__), $ApiResult['api']['data']['content']['widgets']);
				if ($this->edbs_options['design'] !== 'bootstrap') {
					// TODO: Optimize
					if ($count === 0) {
						$rewrite = str_replace('<nav class="navbar navbar-default navbar-fixed-top" role="navigation">', '<nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="position: fixed; width: 100%; top: 0; left: 0; z-index: 2;">', $rewrite);
					} else {
						$rewrite = str_replace('<nav class="navbar navbar-default navbar-fixed-top" role="navigation">', '<nav class="navbar navbar-default navbar-fixed-top hidden" role="navigation" style="position: fixed; width: 100%; top: 0; left: 0; z-index: 2;">', $rewrite);
					}
				}
				break;
			case 'next':
				// runs if the shortcode type=next
				$prev_output = null;
				$templateObject = $ApiResult['api']['data'];

				$use_next_template = false;
				if ((isset($atts['template']) && $atts['template'] !== 'default')) {
					$use_next_template = true;
				}

				if ( ! array_key_exists($atts['template'], $options_next_templates) ) {
					// set the default template if it is not set in the shortcode
					$atts['template'] = 'List';
				}

				/**
				 * @param $templateName string name of the template which has to be displayed
				 * @param $options_next_templates array of templates like ['template1' => '...', 'template2' => '...']
				 * @return false|string
				 */
				function dbTemplateSwitch($templateName, $options_next_templates)
				{
					if ($templateName === 'default' || ! isset($options_next_templates[$templateName])) {
						return false;
					}
					return stripslashes($options_next_templates[$templateName]);
				}

				if ($use_next_template) {
					$htmlInput = dbTemplateSwitch($atts['template'], $options_next_templates);
				}
				if ( ! isset($htmlInput) || ! $htmlInput) {
					$use_next_template = false;
				}

				// load css for table view
				if ($atts['template'] === 'Table' || $atts['template'] === 'List') {
					wp_enqueue_style('edbs_google_tag_manager', plugins_url('../css/edbs-next.css', __FILE__), array(), '1.0');
				}

                // setup each template (array) for the template
                // then write it to the output
				foreach ($templateObject as $item) {

                    // --- Format Dates
                    try {
                        $item['start_date'] = (new DateTime($item['start_date']))->format("d.m.Y G:i");
                        $item['end_date'] = (new DateTime($item['end_date']))->format("d.m.Y G:i");
                        $item['deadline'] = (new DateTime($item['deadline']))->format("d.m.Y G:i");
                    } catch (Exception $exception) {
                        error_log($exception->getMessage());
                    }

					$rewriteOfferUrl = $item['offer_details_url'];
					$rewriteOfferUrl = $ApiResult['provider_url'] . $this->edbs_options['account_code'] . '/' . $rewriteOfferUrl;
					$item['rewriteUrl'] = $rewriteOfferUrl;
					$template_next = new EDB_template();
					if ($use_next_template) {
						$output = $template_next::view($htmlInput, $item, false);
					} else {
						if ($atts['template'] === 'Table') {
							$output = $template_next::view('shortcode_next_table.html', $item);
						} else {
							$output = $template_next::view('shortcode_next.html', $item);
						}
					}
					$prev_output .= $output;
				}


				$output = $prev_output;
				break;
		}

		if ($count === 0) {
			$script = '<script type="text/javascript" defer>var ed_permalink = "' . $ApiResult['provider_url'] . '";</script>';
		} else {
			$script = '';
		}

		if ( ! isset($output)) {
			$output = '';
		}
		if ( ! isset($rewrite)) {
			$rewrite = '';
		}

		return '<div class="edoobox-plugin edbs-' . $count . '" data-noframe="' . $noFrame . '">' . $output . $rewrite . $script . '</div>';
	}

    /**
     * filters the title and returns the edoobox equivalent of the current page as <title>-tag.
     * @param $title
     * the <title> of the page (in the browser tab)
     * @return mixed|string
     */
	public function edbs_title($title)
	{
		global $post;
		$pattern = get_shortcode_regex();
		preg_match_all("/$pattern/", $post->post_content, $matches);
		if (is_array($matches) && array_key_exists(0, $matches) && array_key_exists(0, $matches[0])) {
			$attr1 = shortcode_parse_atts($matches[0][0]);
			$attr2 = $this->shortcodeParameter;
			foreach ($attr1 as $key => $val) {
				if (array_key_exists($key, $attr2)) {
					$attr2[$key] = $val;
				}
			}
			$ApiResult = $this->edbs_api($attr2);
			return isset($ApiResult['api']['data']['header']['title']) ? $ApiResult['api']['data']['header']['title'] : '';
		}
		return $title;
	}

	/**
	 * @param $attr
	 * the shortcode attributes
	 * @return array
	 */
	public function edbs_api($attr, $counter = 0)
	{
		global $wp_query;
		$dateNow = date('c');
		$ApiDataDecode = false;
		if ($this->edbs_cachingTime === 0 || $this->edbs_cachingTime === '0') {
			$this->cachingActive = false;
		}

		if ($attr['root'] != false) {
			$provider_url = esc_url($attr['root']);
		} else {
			$provider_url = esc_url(get_the_permalink());
		}

		$query_var = $attr['url'];
		if (isset($wp_query->query_vars['ed_url']) && $wp_query->query_vars['ed_url'] != '') {
			$query_var = $this->edbs_options['account_code'] . '/' . $wp_query->query_vars['ed_url'];
			// return empty if this is a page generated from a "read more" sub-page
			if ($counter > 0) {
				return false;
			}
		} else {
			if ($attr['url'] == '') {
				$query_var = $this->edbs_options['account_code'];
				// return empty if this is a page generated from a "read more" sub-page
				if ($counter > 0) {
					return false;
				}
			}
		}

		// setting non individual api data
		$API_Data = array(
			'api1' => $this->edbs_options['public_key'],
			'api2' => $this->edbs_options['secret_key'],
			'language' => $attr['language'],
		);

		if ($attr['type'] === '') {
			$attr['type'] = 'default';
		}

		// whitelist of available attributes
		if ( ! in_array($attr['type'], ['default', 'next'], true)) {
			return false;
		}

		// set the API request data based on the shortcode 'type'
		switch ($attr['type']) {
			case 'default':
				$urlAPIedoobox = ( getenv('ED_API_URL') ?: "https://app1.edoobox.com" ) . '/v1/templates';
				$API_Data['filter'] = array(
					array(
						'property' => 'template.path',
						'value' => $query_var
					)
				);
				$API_Data['data'] = array(
					array(
						'property' => 'provider.url',
						'value' => $provider_url
					),
				);
				break;
			case 'next':
				$urlAPIedoobox = ( getenv('ED_API_URL') ?: "https://app1.edoobox.com" ). '/v1/offers';
				$API_Data['limit'] = (object)[
					'start' => $attr['start'],
					'reply' => $attr['limit']
				];
				$API_Data['filter'] = (object)[
					'startdate' => (object)[
						'property' => 'offer.startdate',
						'value' => $dateNow,
						'expression' => '>'
					],
					'status' => (object)[
						'property' => 'offer.status',
						'value' => '1,2',
					]
				];
				break;
		}

		$args = array(
			'body' => array('cms_data' => json_encode($API_Data)),
			'headers' => array(
				'Content-Type' => 'application/json; charset=utf-8',
				'Accept' => 'application/json'
			),
			'timeout' => 15,
			'method' => 'GET'
		);

		$API_Data_GET = array();
		foreach (array('edcode', 'edref', 'edtag', 'edlink', 'edstart', 'edend', 'edview', 'q') as $GetParam) {
			$tpm = get_query_var($GetParam);

			if ($tpm !== '') {
				$API_Data_GET[$GetParam] = $tpm;
			} else {
				if ($GetParam === 'q') {
					if ($attr['q'] !== '') {
						$API_Data_GET['q'] = $tpm;
					}
				} else {
					if (array_key_exists(substr($GetParam, 2), $attr) && $attr[substr($GetParam, 2)] !== '') {
						$API_Data_GET[$GetParam] = $attr[substr($GetParam, 2)];
					} else {
						if ($GetParam == 'edref' && $attr['label'] !== '') {
							$API_Data_GET[$GetParam] = $attr['label'];
						}
					}
				}
			}
		}

		if (count($API_Data_GET) > 0) {
			$urlAPIedoobox .= '?' . http_build_query($API_Data_GET);
		}

		$CacheName = md5(serialize(array($urlAPIedoobox, $args)));
		if ($this->cachingActive) {
			$ApiDataDecode = get_transient('edbs_template_' . $counter . '_' . $CacheName);
		}

		// If Api Data not already in Cache
		if ( ! $ApiDataDecode) {
			try {
				$ApiDataDecode = wp_remote_get($urlAPIedoobox, $args);
				// if there is a message, and code isn't success 200
				if (is_wp_error($ApiDataDecode)) {
					throw new Exception($ApiDataDecode->get_error_message());
				} elseif (isset($ApiDataDecode['response']['message']) && $ApiDataDecode['response']['code'] !== 200) {
					throw new Exception($ApiDataDecode['response']['message'], $ApiDataDecode['response']['code']);
				}
			} catch (Exception $e) {
				echo '<p style="color: blue; font-weight: bold;">' . __("Edoobox Could not fetch Api Data: ", "booking-system-edoobox") . $e->getMessage() . ' / ' . $e->getCode() . '</p>';
			}
			if ($this->cachingActive) {
				set_transient('edbs_template_' . $counter . '_' . $CacheName, $ApiDataDecode, 60 * $this->edbs_cachingTime);
			}
		}
		if ($ApiDataDecode['body'] == true) {
			$ApiData = json_decode($ApiDataDecode['body'], true);
		}
		if ($ApiData !== FALSE && $ApiData !== NULL && isset($ApiData['success']) && $ApiData['success'] == true) {
			return array(
				'CacheName' => $CacheName,
				'api' => $ApiData,
				'error' => true,
				'provider_url' => $provider_url
			);
		}
		return array(
			'CacheName' => $CacheName,
			'api' => array(
				'data' => array(
					'header' => array(
						'title' => '',
						'css_height' => ''
					),
					'content' => array(
						'widgets' => 'Booking System Error: ' . $ApiDataDecode['response']['code']
					)
				)
			),
			'error' => true,
			'provider_url' => $provider_url
		);
	}

}
