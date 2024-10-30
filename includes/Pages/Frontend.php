<?php
/**
 * @package edoobox
 */
namespace Edoobox\Pages;


use Edoobox\Base\Auth;
use Edoobox\Base\BaseController;
use Edoobox\Legacies\EdooboxSystem;

class Frontend extends BaseController
{

    public function register() {
        $postIsNotBeingEdited = ! (isset($_REQUEST["context"]) && $_REQUEST["context"] === "edit");

        if (Auth::isGuest() && $postIsNotBeingEdited) {
            add_action('wp', [$this, 'boot']);
        }
    }

    function boot()
    {
        new EdooboxSystem();
    }

}