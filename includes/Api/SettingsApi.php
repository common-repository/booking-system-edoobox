<?php
/**
 * @package edoobox
 */

namespace Edoobox\Api;


class SettingsApi
{
    public $adminPages = [];
    public $adminSubPages = [];

    public function register() {
        if ( ! empty($this->adminPages) ) {
            add_action('admin_menu', [$this, 'addAdminMenu']);
        }
    }

    public function addAdminMenu() {
        foreach ( $this->adminPages as $page ) {
            add_menu_page(
                $page['page_title'],
                $page['menu_title'],
                $page['capability'],
                $page['menu_slug'],
                $page['callback'],
                $page['icon_url'],
                $page['position']
            );
        }

        foreach ( $this->adminSubPages as $page ) {
            add_submenu_page(
                $page['parent_slug'],
                $page['page_title'],
                $page['menu_title'],
                $page['capability'],
                $page['menu_slug'],
                $page['callback']
            );
        }
    }

    public function addPages(array $pages) {
        $this->adminPages = $pages;
        return $this;
    }

    public function addSubPages(array $pages) {
        $this->adminSubPages = array_merge($this->adminSubPages, $pages);
        return $this;
    }

    public function withSubPage(string $title = null) {
        if ( empty($this->adminPages) ) {
            return $this;
        }

        $adminPage = $this->adminPages[0];

        $this->adminSubPages = [
            [
                'parent_slug' => $adminPage['menu_slug'],
                'page_title' => ($title) ?? $adminPage['page_title'],
                'menu_title' => ($title) ?? $adminPage['menu_title'],
                'capability' => $adminPage['capability'],
                'menu_slug' => $adminPage['menu_slug'],
                'callback' => $adminPage['callback']
            ]
        ];

        return $this;
    }
}