<?php
use Edoobox\Base\Options;

$googleApiKey = Options::get('maps_google_api_key', '');

if (empty($googleApiKey)) {
    echo '<div class="error notice inline">
        <p>
                <b>Please deposit your Google Maps API key</b>
        </p>
    </div>';
}