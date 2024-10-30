<?php
/**
 * @package edoobox
 */
namespace Edoobox\Legacies;


use Edoobox\Base\BaseController;

class EdooboxFrontendTemplate extends BaseController
{

    /**
     * "Renders" a file in the views folder with the give variables (array)
     * @param $variableArray array 'key' => 'value'
     * @param $isFile boolean true if $file is a file, if it's a string use false
     * @param $file string	: input a filename or a template string
     * @return false|string a "rendered" HTML string ready for output
     */
    function view($file, $variableArray, $isFile = true)
    {

        // J: Find and add all values to replace
        foreach ($variableArray as $key => $value) {
            $search[] = '{{ ' . $key . ' }}';
            $replace[] = $value;
        }

        // J: Search and replace 'variables' in template with 'values'.
        // J: $variableArray, is the 'offers'.
        if ($search && $replace) {
            if ($isFile) {
                $output = str_replace($search, $replace, file_get_contents($this->pluginPath . 'views/' . $file));
            } else {
                $decodedFile = stripslashes($file);
                $output = str_replace($search, $replace, $decodedFile);
            }
            return $output;
        }
    }
}