<div class="edoobox-plugin-admin wrap">

    <?php include_once "components/cmp.google-maps-missing.php" ?>

    <?php $title = __('Page Indexing', "booking-system-edoobox") ?>
    <?php include_once "components/cmp.view-title.php" ?>


    <!-- Notice Board [start] -->
    <div class="edoobox-notice is-info mb-4">
        <p>
            <?php _e("To optimize the loading time of Wordpress pages, all pages containing an edoobox plugin shortcode are indexed in advance.", "booking-system-edoobox") ?>
            <br>
            <?php _e("All pages that contain an edoobox shortcode are listed here. If a page is missing, newly added or incorrectly identified, click on the button \"Search All Pages\" to re-index the pages.", "booking-system-edoobox") ?>
        </p>
    </div>
    <!-- Notice Board [end] -->


    <!-- Start Indexing Button [start] -->
    <button
        id="edo-ajax-output-btn"
        type="button"
        class="block button button-primary mb-4">
        <span
            class="dashicons dashicons-code-standards edbs-margin-r"
            style="padding-top: 4px;"></span>
        <?php _e("Search All Pages", "booking-system-edoobox") ?>
    </button>
    <!-- Start Indexing Button [end] -->


    <!-- Pages With Shortcodes List [start] -->
    <ul><?php

        // The post array must be defined before including this file.
        // It must contain WP_Post objects that have a shortcode in the post_content.
        foreach ( $postArray as $post ) {

            $permalinkOfPost = get_permalink($post->ID);
            $editPostLink = get_edit_post_link($post->ID);

            preg_match_all('/\[.*edbs_panel.*]/', $post->post_content, $match);

            // todo:i currently only first match is shown.
            $shortcodesOfPost = $match[0];

            if ( ! $shortcodesOfPost ) {
                continue;
            } ?>

            <!-- Page with a shortcode [start] -->
            <li class="flex flex-wrap indexed-page items-center">

                <!-- Page Information and Edit Buttons [start] -->
                <div class="flex items-center w-full">
                    <button
                        class='button mr-4'>
                        <a href="<?php echo $permalinkOfPost ?>">
                            <?php _e("View Post", "booking-system-edoobox") ?>
                        </a>
                    </button>

                    <a class="mr-4"
                       href="<?php echo $permalinkOfPost ?>">
                        <strong><?php echo $post->post_title ?></strong>
                    </a>

                    <a class="mr-4"
                       href="<?php echo $editPostLink ?>">
                        <?php _e("Edit Post", "booking-system-edoobox") ?>
                    </a>

                    <button
                        class='collapsible mr-4'
                        type='button'>
                        <?php _e('Shortcodes', 'booking-system-edoobox') ?>
                    </button>
                </div>
                <!-- Page Information and Edit Buttons [end] -->

                <!-- List of Shortcodes [start] -->
                <div class="content shortcode-tags w-full"
                     style='display: none;'><?php
                    foreach ( $shortcodesOfPost as $shortcode ) {
                        echo "<pre>$shortcode</pre>";
                    }
                    ?>
                </div>
                <!-- List of Shortcodes [end] -->

            </li>
            <!-- Page with a shortcode [end] -->

            <?php
        }

        ?>
    </ul>
    <!-- Pages With Shortcodes List [end] -->

</div>
<style>
    .edbs-green {
        background-color: #00FF33 /*green*/ !important;
    }
</style>
<script>
	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var content = this.closest("li").querySelector(".shortcode-tags");

			if ( ! content) return;

			if (content.style.display === "block") {
				content.style.display = "none";
			} else {
				content.style.display = "block";
			}
		});
	}
</script>