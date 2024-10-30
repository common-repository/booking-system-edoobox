<?php

namespace PluginTests\Arr;

use Edoobox\Helpers\Arr;
use PHPUnit\Framework\TestCase;

class Arr_getTest extends TestCase {

    public array $array = [
        "url" => "You Are Elle",
        "nested_url" => [
            "even_more_nested" => [
                "url" => "Nested URL"
            ]
        ]
    ];

    /**
     * @test
     */
    public function returns_value_of_url_key() {
        $url = Arr::get($this->array, "url");
        $this->assertEquals("You Are Elle", $url);
    }

    /**
     * @test
     */
    public function returns_fallback_of_missing_key() {
        $url = Arr::get($this->array, "missing_key", "fallback");
        $this->assertEquals("fallback", $url);
    }

    /**
     * @test
     */
    public function returns_null_because_of_missing_key_and_no_fallback() {
        $url = Arr::get($this->array, "missing_key", );
        $this->assertEquals(null, $url);
    }

    /**
     * @test
     */
    public function returns_value_of_super_nested_key() {
        $url = Arr::get($this->array, "nested_url.even_more_nested.url");
        $this->assertEquals("Nested URL", $url);
    }
}