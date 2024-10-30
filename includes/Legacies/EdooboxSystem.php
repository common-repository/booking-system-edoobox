<?php
/**
 * @package edoobox
 */

namespace Edoobox\Legacies;

use Edoobox\Api\ShortcodeApi;
use Edoobox\Base\BaseController;
use Edoobox\Base\Cache;
use Edoobox\Base\Debugger;
use Edoobox\Base\GoogleTagManager;
use Edoobox\Base\LogTime;
use Edoobox\Base\Options;
use Edoobox\Base\Scripts;
use Edoobox\Base\Settings;
use Edoobox\Helpers\Arr;
use Edoobox\Requests\Auth;
use Edoobox\Requests\Helpers\Shortcode;
use Edoobox\Requests\Next;
use Edoobox\Requests\Page;
use Edoobox\Requests\Template;

class EdooboxSystem extends BaseController {
    public $auth;
    public $cacheKey;
    public $edbs_options = false;
    public $shortcodeCounter = 0;
    public $bootstrapName = '';

    public function __construct() {
        global $post;
        parent::__construct();

        if ( ! $post ) {
            return;
        }

        if ( is_singular() && ShortcodeApi::hasShortcode($post) ) {
            add_shortcode(Settings::SHORTCODE_NAME, [$this, 'renderTemplate']);
            add_filter('pre_get_document_title', [$this, 'setDocumentTitle']);
        }
    }

    public function renderTemplate($attr): string {
        global $post;

        if ( ! Arr::get($attr, 'url', false)) {
            return '<!-- edoobox error: url nicht im shortcode hinterlegt -->';
        }

        $this->auth = new Auth();
        $this->edbs_options = Options::get(Settings::SETTINGS_OPTION_NAME, []);
        $options_next_templates = Options::get('edbs_next_options_templates', [0 => ""]);
        $attributes = Shortcode::getMergedAttributes($attr);

        if ( ! Arr::get($attributes, 'url', false)) {
            return '<!-- edoobox error: url nicht im shortcode hinterlegt -->';
        }

        $template = new Template($attributes);
        $next = new Next($attributes);
        $useV2 = Arr::get($this->edbs_options, Settings::USE_V2, false);
        $this->cacheKey = Page::getCurrentPageCacheKey();
        $apiResponse = Cache::get($this->cacheKey);

        LogTime::start('fetch and cache');

        if ( ! $apiResponse && $attributes['type'] === 'default' ) {
            $apiResponse = $useV2 ? $template->fetchV2() : $template->fetchV1();
            Cache::set($this->cacheKey, $apiResponse, Options::get('edoobox_cache_time_in_s', 0));
        }

        if ( ! $apiResponse && $attributes['type'] === 'next' ) {
            $apiResponse = $useV2 ? $next->fetchV2() : $next->fetchV1();
            Cache::set($this->cacheKey, $apiResponse, Options::get('edoobox_cache_time_in_s', 0));
        }

        LogTime::stop('fetch and cache');

        if ( ! $apiResponse ) {
            return '';
        }

        $count = $this->shortcodeCounter;
        $this->shortcodeCounter++;
        $this->setBootstrap($post, $apiResponse);
        $gtm_id = $apiResponse['api']['data']['footer']['gtm_id'] ?? '';
        GoogleTagManager::set($attributes['gtm'], $gtm_id, $this->pluginURL);
        Scripts::enqueueFrontend($this->edbs_options['design'], $this->bootstrapName, $this->pluginURL);

        switch ( $attributes['type'] ) {
            case 'default':
                // case if no type is set
                // Add CSS from API results, that are stored in 'api.data.header'
                $output = "<style>" . $apiResponse['api']['data']['header']['css_height'] . "</style>";

                global $wp;

                $current_url = home_url(add_query_arg([], $wp->request)) . Settings::PLACEHOLDER_PATH;
                $plugin_url = plugins_url('js' . Settings::PLACEHOLDER_PATH, __FILE__);
                $content_widgets = $apiResponse['api']['data']['content']['widgets'];


                $rewrite = $content_widgets;

                // Check if placeholder exist
                if (strpos($content_widgets, $current_url) !== false) {
                    $rewrite = str_replace($current_url, $plugin_url, $content_widgets);
                }

                if ($this->edbs_options['design'] !== 'bootstrap') {
                    $nav_tag = '<nav class="navbar navbar-default navbar-fixed-top" role="navigation">';
                    $nav_replacement = '<nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="position: fixed; width: 100%; top: 0; left: 0; z-index: 2;">';
                    if ($count !== 0) {
                        $nav_replacement = '<nav class="navbar navbar-default navbar-fixed-top hidden" role="navigation" style="position: fixed; width: 100%; top: 0; left: 0; z-index: 2;">';
                    }

                    // Überprüfung und Ersetzung des Nav-Tags
                    if (strpos($rewrite, $nav_tag) !== false) {
                        $rewrite = str_replace($nav_tag, $nav_replacement, $rewrite);
                    }
                }

                break;
            case 'next': // todo: remove (deprecated)
                $prev_output = null;

                $templateObject = $apiResponse['api']['data'];
                $use_next_template = false;
                if ( (isset($attributes['template']) && $attributes['template'] !== 'default') ) {
                    $use_next_template = true;
                }

                if ( ! array_key_exists($attributes['template'], $options_next_templates) ) {
                    // set the default template if it is not set in the shortcode
                    $attributes['template'] = 'List';
                }

                /**
                 * Selects the correct template?
                 *
                 * @param $templateName string name of the template which has to be displayed
                 * @param $options_next_templates array of templates like ['template1' => '...', 'template2' => '...']
                 *
                 * @return false|string
                 */
                function dbTemplateSwitch($templateName, $options_next_templates) {
                    if ( $templateName === 'default' || ! isset($options_next_templates[$templateName]) ) {
                        return false;
                    }

                    return stripslashes($options_next_templates[$templateName]);
                }

                if ( $use_next_template ) {
                    $htmlInput = dbTemplateSwitch($attributes['template'], $options_next_templates);
                }

                if ( ! isset($htmlInput) || ! $htmlInput ) {
                    $use_next_template = false;
                }

                // load css for table view
                if ( $attributes['template'] === 'Table' || $attributes['template'] === 'List' ) {
                    // This has nothing to do with GTM right?
                    wp_enqueue_style('edbs_google_tag_manager', $this->pluginURL . '/css/edbs-next.css', [], '1.0');
                }

                foreach ( $templateObject as $item ) {
                    try {
                        $item['start_date'] = (new \DateTime($item['start_date']))->format("d.m.Y G:i");
                        $item['end_date'] = (new \DateTime($item['end_date']))->format("d.m.Y G:i");
                        $item['deadline'] = (new \DateTime($item['deadline']))->format("d.m.Y G:i");
                    } catch ( \Exception $exception ) {
                        error_log($exception->getMessage());
                    }

                    // Overwrite rewrite URL with WP provider URL and account code prepended.
                    if ( ! isset($item['image']) || ! $item['image'] ) {
                        $placeholderPath = Settings::PLACEHOLDER_PATH;
                        $item['image'] = "$this->pluginURL/js/$placeholderPath";
                    }
                    $rewriteOfferUrl = $item['offer_details_url'];
                    $rewriteOfferUrl = $apiResponse['provider_url'] . $this->edbs_options['account_code'] . '/' . $rewriteOfferUrl;
                    $item['rewriteUrl'] = $rewriteOfferUrl;

                    // Templating instance => methods are static and don't need instantiation...
                    $templateEngine = new EdooboxFrontendTemplate();

                    if ( $use_next_template ) {
                        // If custom template, then use $htmlInput from DB.
                        $output = $templateEngine->view($htmlInput, $item, false);
                    } else {
                        // If not custom template, then use 'Table' or default HTML.
                        if ( $attributes['template'] === 'Table' ) {
                            $output = $templateEngine->view('shortcode_next_table.html', $item);
                        } else {
                            $output = $templateEngine->view('shortcode_next.html', $item);
                        }
                    }
                    $prev_output .= $output;
                }
                $output = $prev_output;
                break;
        }

        if ( ! isset($output) ) {
            $output = '';
        }

        if ( ! isset($rewrite) ) {
            $rewrite = '';
        }

        Debugger::render($this->pluginPath);

        $settings = new Settings();
        $version = '<!--edoobox version: ' . Settings::PLUGIN_VERSION . '-->';
        $environment = '<!--edoobox environment: ' . $settings->get(Settings::SETTINGS_ENVIRONMENT) . '-->';
        LogTime::stop('time to render');

        return
            $version .
            $environment .
            LogTime::asHtmlCommentString(4) .
            '<div class="edoobox-plugin edbs-' .
            $count .
            '" data-noframe="' .
            $this->getFrameSetting($attributes, $apiResponse) .
            '">' . $output . $rewrite .
            $this->getScriptSetting($apiResponse) .
            '</div>';
    }

    public function setDocumentTitle($title) {
        global $post;
        $attributes = ShortcodeApi::getAttributes($post);
        $template = new Template($attributes);
        return $template->setDocumentTitle($title);
    }

    private function getFrameSetting($mergedAttributes, $apiResponse): int {
        $hasFrame = ($mergedAttributes['root'] && strpos($apiResponse['provider_url'], 'edoobox.com'));
        return $hasFrame ? 1 : 0;
    }

    private function getScriptSetting($apiResponse): string {
        // If this is the first shortcode, then add ed_permalink as a global JS variable.
        // Previously set 'provider_url'.
        return '<script type="text/javascript" defer>var ed_permalink = "' .
            $apiResponse['provider_url'] .
            '";</script>';
    }

    private function setBootstrap($post, $apiResponse) {
        if ( $this->edbs_options['design'] === 'standard' ) {
            $this->bootstrapName = EdooboxBootstrap::getBootstrapNameFromResponse($apiResponse);
            $edooboxBootstrap = new EdooboxBootstrap();
            $edooboxBootstrap->setup($post->ID, $this->bootstrapName);
        }
    }
}
