<div class="edoobox-plugin-admin wrap">

    <?php include_once "components/cmp.google-maps-missing.php" ?>

    <?php $title = __('Google Maps', 'booking-system-edoobox') ?>
    <?php include_once "components/cmp.view-title.php" ?>

    <div class="mb-8"></div>

    <form
        class="mb-8"
        method="post">
        <?php
        settings_fields('google-maps-api-key');
        wp_nonce_field('google-maps-api-key_meta_box_nonce', 'google-maps-api-key_meta_box_nonce');
        ?>
        <h4>
            <label for="maps_google_api_key">
                <!--Google Maps API Schlüssel-->
                <?php _e('Google Maps API Key', 'booking-system-edoobox') ?>
            </label>
        </h4>

        <input
            id="maps_google_api_key"
            name="maps_google_api_key"
            value="<?= $mapsGoogleAPIKey; ?>"
            placeholder="******************">

        <?php submit_button(); ?>
    </form>

    <?php _e('Here you can find all the necessary instruction: ', 'booking-system-edoobox') ?>
    <br>
    <a class="mb-4"
       href="https://docs.edoobox.com/knowledge-base/googel-maps-aktivieren-fuer-das-plugin/"
       target="_blank"><?php _e('Activate Google Maps for the Plugin', 'booking-system-edoobox') ?></a>
    <br>
    <a class="mb-4"
       href="https://docs.edoobox.com/knowledge-base/template-angebot-details/"
       target="_blank"><?php _e('Add Google Maps in your Design Manager', 'booking-system-edoobox') ?></a>

