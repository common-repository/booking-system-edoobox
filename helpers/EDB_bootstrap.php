<?php


class EDB_bootstrap
{
	public $theBootstrapIndex = false;
	public $initialBootstrapIndex = false;
	public $pageID = false;
	public $bootstrapName = false;
	public $option_name = 'edbs_bootstrapIndex';
	public $first_run = false;

	function __construct()
	{
	}

	function setup($pageID, $bootstrapName)
	{
		$this->pageID = $pageID;
		$this->bootstrapName = $bootstrapName;

		// --- Set bootstrap index option
		if ( ! $this->get_option($this->option_name)) {
			add_option($this->option_name);
		}
		$this->theBootstrapIndex = $this->get_option($this->option_name);
		$this->initialBootstrapIndex = $this->theBootstrapIndex;
		$is_array = is_array($this->theBootstrapIndex);

		// --- Check if given bootstrap name was already stored in options (early return)
		if ($is_array && in_array($this->bootstrapName, $this->theBootstrapIndex)) {
			return true;
		}

		// --- If bootstrap name not already stored, but option exists
		// --- todo: some of these conditions may be redundant!
		if ($this->theBootstrapIndex) {
			if ( ! $is_array || $is_array && ! in_array($this->bootstrapName, $this->theBootstrapIndex)) {
				$this->first_run = true;
			}
			$this->theBootstrapIndex[] = $this->bootstrapName;
		} else {
			$this->theBootstrapIndex = array($this->bootstrapName);
			$this->first_run = true;
		}

		$this->update_option($this->option_name, $this->theBootstrapIndex);

		if ($this->first_run) {
			add_action(
				'shutdown',
				function () {
					if ( function_exists( 'fastcgi_finish_request' ) ) {
						ignore_user_abort(true);
						session_write_close();
						fastcgi_finish_request();
					}
					$fileWriteSuccess = $this->add_bootstrapcss();
					if ( ! $fileWriteSuccess) {
						// if there is an error: basically removing what just got added to the options
						$this->update_option($this->option_name, $this->initialBootstrapIndex);
					}
				}, 1
			);
		}
	}

	function add_bootstrapcss()
	{
	    // --- Prepare bootstrap CDN URL and storage path
		$url = 'https://reducecss.edoobox.com/bootstrap?style=' . $this->bootstrapName . '.css';
		$upload_dir = wp_upload_dir(); // Grab uploads folder array
		$dir = trailingslashit($upload_dir['basedir']) . 'edoobox/css/'; // Set storage directory path

        // --- Fetch bootstrap from edoobox CDN
		$data = wp_remote_get($url, array('timeout' => 30));


		// --- If $baseDir/edoobox doesn't exist create directory
		if ( ! file_exists(trailingslashit($upload_dir['basedir']) . 'edoobox')) {
			mkdir(trailingslashit($upload_dir['basedir']) . 'edoobox/', 0777);
		}

		// --- If $baseDir/edoobox/css doesn't exist create directory
		if ( ! file_exists(trailingslashit($upload_dir['basedir']) . 'edoobox/css')) {
			mkdir($dir, 0777);
		}

		// --- Write bootstrap to directory
		if (file_exists(trailingslashit($upload_dir['basedir']) . 'edoobox/css')) {
			$file = fopen($dir . $this->bootstrapName . '.css', 'w+');
			fwrite($file, $data['body']);
		}

		// --- Log error message, if not successful
		if ( ! file_exists(trailingslashit($upload_dir['basedir']) . 'edoobox/css/' . $this->bootstrapName . '.css')) {
			error_log('edoobox booking system can not write the necessary files to your uploads directory.', 0);
			return false;
		}

		return true;
	}

	function get_option($optionName)
	{
		$option = get_option($optionName);
		return unserialize($option);
	}

	function add_option($optionName, $rawValue)
	{
		$value = serialize($rawValue);
		add_option($optionName, $value);
	}

	function update_option($optionName, $rawValue)
	{
		$rawValue = array_unique($rawValue);
		if ($rawValue === $this->initialBootstrapIndex) {
			return false;
		}
		$value = serialize($rawValue);
		update_option($optionName, $value);
	}
}