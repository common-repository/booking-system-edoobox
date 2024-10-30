<?php
/**
 * @package edoobox
 */
namespace PluginTests;

use Edoobox\Api\PostApi;
use Edoobox\Api\ShortcodeApi;
use PHPUnit\Framework\TestCase;
use PluginTests\Factories\PostApiFactory;

class PostApiTest extends TestCase
{
    public $tempPostIds = [];
    public $testShortcode = "edbs_test";

    /**
     * @test
     */
    public function returns_posts_with_shortcode_without_type_next_attribute() {
        $posts = PostApi::allWithShortcode($this->testShortcode);
        $this->assertCount(2, $posts);
    }

    /**
     * @test
     */
    public function returns_posts_with_shortcode_with_type_next_attribute() {
        $posts = PostApi::allWithShortcode($this->testShortcode, true);
        $this->assertCount(3, $posts);
    }

    /**
     * @test
     */
    public function setup_successfully_creates_four_posts() {
        $storedPosts = [];
        foreach ($this->tempPostIds as $tempPostId) {
            $post = get_post($tempPostId);
            if ($post) {
                array_push($storedPosts, $post);
            }
        }
        $this->assertCount(5, $this->tempPostIds);
        $this->assertCount(5, $storedPosts);
    }

    protected function setUp(): void {
        $this->tempPostIds = PostApiFactory::populatePostsWithShortcode($this->testShortcode);
    }

    protected function tearDown(): void {
        foreach ( $this->tempPostIds as $tempPostId ) {
            wp_delete_post($tempPostId, true);
        }
    }
}
