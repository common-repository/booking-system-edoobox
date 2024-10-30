<?php
/**
 * @package edoobox
 */

namespace Edoobox\Pages;

use Edoobox\Api\Callbacks\AdminCallbacks;
use Edoobox\Api\SettingsApi;
use Edoobox\Base\BaseController;
use Edoobox\Base\Settings;

class Admin extends BaseController
{
	public $callbacks;
    public $options;
	public $pages = [];
	public $settings;
	public $subPages = [];

	public function register() {
		$this->callbacks = new AdminCallbacks();
        $this->options = get_option(Settings::SETTINGS_OPTION_NAME);
		$this->settings = new SettingsApi();
		$this->setPages();
		$this->setSubPages();
		$this->settings
			->addPages($this->pages)
			->withSubpage(__('Options', 'booking-system-edoobox'))
			->addSubPages($this->subPages)
			->register();
	}

	private function setPages() {
		$this->pages = [
			[
				'page_title' => __('edoobox booking system', 'booking-system-edoobox'),
				'menu_title' => 'edoobox',
				'capability' => 'manage_options',
				'menu_slug' => 'edoobox-system-view', // added to Auth.php
				'callback' => [$this->callbacks, 'templateOptions'],
				'icon_url' => "$this->pluginURL/assets/edoobox-icon-17x17.png", //'dashicons-book',
				'position' => 100
			]
		];
	}

	private function setSubPages() {
        $shortcodeProActive = $this->options[Settings::SHORTCODE_PRO_ACTIVE] ?? false;
		$this->subPages = array_filter([
			[
				'parent_slug' => 'edoobox-system-view',
				'page_title' => __('Page Indexing', 'booking-system-edoobox'),
				'menu_title' => __('Page Indexing', 'booking-system-edoobox'),
				'capability' => 'manage_options',
				'menu_slug' => 'edoobox-page-view', // added to Auth.php
				'callback' => [$this->callbacks, 'templatePageIndexing']
			],
			! $shortcodeProActive ? false : [
				'parent_slug' => 'edoobox-system-view',
				'page_title' => __('Shortcode Pro', 'booking-system-edoobox'),
				'menu_title' => __('Shortcode Pro', 'booking-system-edoobox'),
				'capability' => 'manage_options',
				'menu_slug' => 'edoobox-next', // added to Auth.php
				'callback' => [$this->callbacks, 'templateShortcodePro']
			],
			[
				'parent_slug' => 'edoobox-system-view',
				'page_title' => __('Caching', 'booking-system-edoobox'),
				'menu_title' => __('Caching', 'booking-system-edoobox'),
				'capability' => 'manage_options',
				'menu_slug' => 'edoobox-caching', // added to Auth.php
				'callback' => [$this->callbacks, 'templateCaching']
			],
			[
				'parent_slug' => 'edoobox-system-view',
				'page_title' => __('Google Maps', 'booking-system-edoobox'),
				'menu_title' => __('Google Maps', 'booking-system-edoobox'),
				'capability' => 'manage_options',
				'menu_slug' => 'edoobox-maps-google', // added to Auth.php
				'callback' => [$this->callbacks, 'templateMapsGoogle']
			],
            [
                'parent_slug' => 'edoobox-system-view',
                'page_title' => __('Information', 'booking-system-edoobox'),
                'menu_title' => __('Information', 'booking-system-edoobox'),
                'capability' => 'manage_options',
                'menu_slug' => 'edoobox-information', // added to Auth.php
                'callback' => [$this->callbacks, 'templateInformation']
            ]
		], function ($subPage) {
            return !! $subPage;
        });
	}

}