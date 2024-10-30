<?php

namespace Edoobox\Base;

class GoogleTagManager
{
    public static function set($gtm, $gtmId, $pluginURL)
    {
        if ($gtm) {
            wp_enqueue_script('edbs_google_tag_manager', $pluginURL . '/js/libraries/google-tag-manager/guest-google-tag-manager.js', [], '1.0');
            // Set theGtmID variable, that is required by GTM script, before the script is fired.
            wp_add_inline_script('edbs_google_tag_manager', 'var theGtmID = "' . $gtmId . '";', 'before');
            // Add GTM iframe to the footer, after setting the GTM ID into the iframe.
            add_action('wp_footer', function () use ($gtmId) {
                echo '<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' . $gtmId . '"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->';
            }, 30);
        }
    }
}