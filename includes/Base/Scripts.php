<?php

namespace Edoobox\Base;

class Scripts
{
    const BOOTSTRAP_CDN = "https://sandbox.cdn.edoobox.ch/bootstrap";

    public static function enqueueFrontend($design, $bootstrapName, $pluginUrl)
    {
        if ($design === 'bootstrap') {
            wp_enqueue_style('prefix_bootstrap', $pluginUrl . '/css/bootstrap.min.css');
        } else {
            wp_enqueue_style('edbs_' . $bootstrapName . 'bootstrap', self::BOOTSTRAP_CDN . "/wp-css_$bootstrapName.css");
        }
    }
}