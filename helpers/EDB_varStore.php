<?php

/**
 * Class EDB_varStore
 * Temporary storage that only persists for each server-session
 */
class EDB_varStore
{
	public $bootstrapExecuted = false;
	public $edbs_user_scripts = false;

	/**
	 * returns state of variable then sets it to true
	 */
	function set($varName) {
		$temp = null;

		switch ($varName) {
			case ('bootstrapExecuted'):
				$temp = $this->bootstrapExecuted;
				$this->bootstrapExecuted = true;
				return $temp;
				break;
			case ('edbs_user_scripts'):
				$temp = $this->edbs_user_scripts;
				$this->edbs_user_scripts = true;
				return $temp;
				break;
		}
	}

	function get($varName) {
		switch ($varName) {
			case ('bootstrapExecuted'):
				return $this->bootstrapExecuted;
				break;
			case ('edbs_user_scripts'):
				return $this->edbs_user_scripts;
				break;
		}
	}
}