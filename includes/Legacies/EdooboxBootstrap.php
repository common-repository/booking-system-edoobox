<?php
/**
 * @package edoobox
 */
namespace Edoobox\Legacies;


use Edoobox\Base\BaseController;
use Edoobox\Base\Options;

class EdooboxBootstrap extends BaseController
{
    public $theBootstrapIndex = false;
    public $initialBootstrapIndex = [];
    public $pageID = false;
    public $bootstrapName = false;
    public $option_name = 'edoobox_bootstrap_index';
    public $first_run = false;


    // J: Write bootstrap CSS file from edoobox reduce CSS API endpoint to
    // J: this server, as long as it hasn't already been written.
    // J: Write reference of storage to DB, for future checks.
    function setup($pageID, $bootstrapName) {

        $this->pageID = $pageID;
        $this->bootstrapName = $bootstrapName;

        if ( ! $this->get_option($this->option_name) ) {
            add_option($this->option_name);
        }

        $this->theBootstrapIndex = $this->get_option($this->option_name);
        $this->initialBootstrapIndex = is_array($this->theBootstrapIndex) ? $this->initialBootstrapIndex : [];

        // J: Check if the "index" is an array?
        $is_array = is_array($this->theBootstrapIndex);

        if ( $is_array && in_array($this->bootstrapName, $this->theBootstrapIndex) ) {
            return true;
        }


        add_action('shutdown', function () {
            $this->addBootstrapCss();
        }, 1);

        return true;
    }

    function addBootstrapCss(): bool {
        wp_remote_get("$this->bootstrapCompilerURL/$this->bootstrapName.css", array('timeout' => 30));
        $this->initialBootstrapIndex[] = $this->bootstrapName;
        return Options::set($this->option_name, $this->initialBootstrapIndex);
    }

    function get_option($optionName) {
        return Options::get($optionName, []);
    }

    function add_option($optionName, $rawValue) {
        add_option($optionName, $rawValue);
    }

    function update_option($optionName, $rawValue) {
        $rawValue = array_unique($rawValue);
        if ( $rawValue === $this->initialBootstrapIndex ) {
            return false;
        }
        update_option($optionName, $rawValue);
    }

    public static function getBootstrapNameFromResponse($response) {
        if (isset($response["api"]["data"]["header"]["bootstrap"])) {
            return $response["api"]["data"]["header"]["bootstrap"];
        }
        if (isset($apiResponse['api']['data']['header']['bootstrap'])) {
            return $apiResponse['api']['data']['header']['bootstrap'];
        }
        return "50_edooboxstartstyle";
    }
}