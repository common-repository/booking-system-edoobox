<?php

/**
 * MICRO TEMPLATING ENGINE
 * use like {{ var }} in the template file.
 * Beware that there has to be a space between the variable and the braces.
 */
class EDB_template
{
	/**
	 * "Renders" a file in the views folder with the give variables (array)
	 * @param $variableArray array 'key' => 'value'
	 * @param $isFile boolean true if $file is a file, if it's a string use false
	 * @param $file string	: input a filename or a template string
	 * @return false|string a "rendered" HTML string ready for output
	 */
	static function view($file, $variableArray, $isFile = true)
	{
		foreach ($variableArray as $key => $value) {
			$search[] = '{{ ' . $key . ' }}';
			$replace[] = $value;
		}
		if ($search && $replace) {
			if ($isFile) {
				$output = str_replace($search, $replace, file_get_contents(EDBS_PLUGIN_PATH . 'views/' . $file));
			} else {
				$decodedFile = stripslashes($file);
				$output = str_replace($search, $replace, $decodedFile);
			}
			return $output;
		}
	}
}