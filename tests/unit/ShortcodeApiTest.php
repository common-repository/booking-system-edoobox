<?php

namespace PluginTests;

use Edoobox\Api\ShortcodeApi;
use PHPUnit\Framework\TestCase;
use PluginTests\Factories\PostApiFactory;

class ShortcodeApiTest extends TestCase
{
    public $originalPanelData = null;
    public $registry = "edbs_test_registry";
    public $shortcodeName = "edbs_test";
    public $temporaryPostIds = [];


    // --- index()

    /**
     * @test
     */
    public function index_two_post_ids_with_shortcodes_without_next_type() {
        $initialRegistry = ShortcodeApi::getPostIdsFromRegistry($this->registry);
        ShortcodeApi::index($this->shortcodeName, $this->registry);
        $indexedRegistry = ShortcodeApi::getPostIdsFromRegistry($this->registry);
        $this->assertCount(0, $initialRegistry);
        $this->assertCount(2, $indexedRegistry);
    }

    /**
     * @test
     */
    public function index_two_post_ids_with_shortcodes_with_next_type() {
        $initialRegistry = ShortcodeApi::getPostIdsFromRegistry($this->registry);
        ShortcodeApi::index($this->shortcodeName, $this->registry, true);
        $indexedRegistry = ShortcodeApi::getPostIdsFromRegistry($this->registry);
        $this->assertCount(0, $initialRegistry);
        $this->assertCount(3, $indexedRegistry);
    }


    // --- getPostIdsFromRegistry()

    /**
     * @test
     */
    public function return_empty_array_if_registry_is_empty() {
        // Overwrite options content
        update_option(ShortcodeApi::PANEL_REGISTRY_NAME, "");
        $results = ShortcodeApi::getPostIdsFromRegistry();
        $this->assertEquals([], $results);
    }

    /**
     * @test
     */
    public function return_empty_array_if_registry_is_not_set() {
        // Remove options content
        delete_option(ShortcodeApi::PANEL_REGISTRY_NAME);
        $results = ShortcodeApi::getPostIdsFromRegistry();
        $this->assertEquals([], $results);
    }

    /**
     * @test
     */
    public function return_array_with_entries_if_registry_is_not_empty() {
        // Remove options content
        $expected = [1, 2, 3];
        update_option(ShortcodeApi::PANEL_REGISTRY_NAME, $expected);
        $results = ShortcodeApi::getPostIdsFromRegistry();
        $this->assertEquals($expected, $results);
    }

    /**
     * @test
     */
    public function return_empty_array_if_registry_is_not_serializable() {
        // Remove options content
        $unserializable = "ups{cannot-serialize}ups";
        update_option(ShortcodeApi::PANEL_REGISTRY_NAME, $unserializable);
        $results = ShortcodeApi::getPostIdsFromRegistry();
        $this->assertEquals([], $results);
    }


    // --- writePostIdsToRegistry()

    /**
     * @test
     */
    public function write_post_ids_to_registry_if_array_of_ids_is_given_and_return_true() {
        $expect = [1, 1, 2, 3, 5, 8];
        $return = ShortcodeApi::writePostIdsToRegistry($expect);
        $results = get_option(ShortcodeApi::PANEL_REGISTRY_NAME) ?? ['allowed_classes' => false];
        $this->assertEquals($expect, $results);
        $this->assertTrue($return);
    }

    public function setUp(): void {
        $this->originalPanelData = get_option(ShortcodeApi::PANEL_REGISTRY_NAME);

        // --- Populate Data
        $this->temporaryPostIds = PostApiFactory::populatePostsWithShortcode($this->shortcodeName);
    }

    public function tearDown(): void {
        update_option(ShortcodeApi::PANEL_REGISTRY_NAME, $this->originalPanelData);
        foreach ( $this->temporaryPostIds as $tempPostId ) {
            wp_delete_post($tempPostId, true);
        }
        ShortcodeApi::writePostIdsToRegistry([], $this->registry);
    }
}
