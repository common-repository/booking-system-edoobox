<?php

namespace Edoobox\Base;

if ( ! function_exists( 'get_plugins' ) ) {
	require_once ABSPATH . 'wp-admin/includes/plugin.php';
}

class PluginCollection {

	static function drawAttentionIsInstalled() {
		return ! array_reduce(get_plugins(), fn($a, $b) => $a && $b["TextDomain"] !== "draw-attention", true);
	}

}