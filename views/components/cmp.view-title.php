<?php if ( ! isset($title) ) { ?>

    <div>$title is missing.</div>

<?php } else { ?>

    <!-- Title [start] -->
    <div class="flex items-center mb-4">
        <img
            class="mr-4"
            alt="edoobox-logo"
            src="<?php echo plugin_dir_url(dirname(__FILE__)) . '../assets/cropped-edoobox_Icon_Farbig-270x270.png'; ?>"
            style="margin-top: 7px; width: 40px">
        <div>
            <h1 class="mr-4 mt-1">edoobox</h1>

            <div class="flex items-center">
                <h2 class="mr-4">
                    <?php _e('The online booking system', 'booking-system-edoobox')?>: <?= $title ?>
                </h2>
                <?php if (isset($developerFlag) && $developerFlag) { ?>
                    <div class="edoobox-tag is-accent">
                        <?= __('Developers only', 'booking-system-edoobox') ?>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
    <!-- Title [end] -->

<?php } ?>