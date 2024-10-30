<div class="edoobox-plugin-admin wrap">

    <?php include_once "components/cmp.google-maps-missing.php" ?>

    <?php $title = __('Caching', 'booking-system-edoobox') ?>
    <?php include_once "components/cmp.view-title.php" ?>

    <!-- Notice Board [start] -->
    <div class="edoobox-notice is-info mb-4">
        <?php settings_errors(); ?>
        <p><?php _e('Caching has pros and cons. While it speeds up pageloading, it may cause the page to show outdated data. So a lower value will result in longer loading times, but more likely correct data. If edoobox seems slow however, we recommend adding a few minutes more.', 'booking-system-edoobox') ?></p>
    </div>
    <!-- Notice Board [end] -->

    <div class="flex items-center mt-8">
        <span class="dashicons dashicons-admin-plugins mr-2"></span>
        <h2><?= _e('Plugin Cache', 'booking-system-edoobox') ?></h2>
    </div>

    <form class="mb-8"
          method="post">
        <table class="form-table mb-4">
            <tbody>
            <?php
            settings_fields('edbs-caching-options-group');
            wp_nonce_field('caching_meta_box_nonce', 'caching_meta_box_nonce');
            ?>
            <tr>
                <th><label><?php _e('Cache Time (in Seconds)', 'booking-system-edoobox') ?>:</label></th>
                <td>
                    <input id="edoobox_cache_time_in_s"
                           name="edoobox_cache_time_in_s"
                           value="<?php echo $cachingTime ?>"
                           placeholder="<?php echo $cachingTime ?>">
                    <p class="description"><?php _e('Define how long edoobox pages should be cached.', 'booking-system-edoobox') ?></p>
                </td>
            </tr>
            <tr>
                <th><?php _e('Flush Cache', 'booking-system-edoobox') ?>:</th>
                <td>
                    <button id="edbs_flush_cache_btn"
                            class="button">
                        <?php _e('Flush Cache', 'booking-system-edoobox') ?>
                    </button>

                    <p class="description"><?php _e('By flushing the cache, you will immediately see changes in displayed pages.', 'booking-system-edoobox') ?></p>
                </td>
            </tr>
            </tbody>
        </table>
	    <?php submit_button(); ?>
    </form>

    <div class="flex items-center">
        <span class="dashicons dashicons-art mr-2"></span>
        <h2><?= _e('Design Cache', 'booking-system-edoobox') ?></h2>
    </div>

    <p class="mb-4">
        <?php _e('The edoobox plugin minifies any custom styles, whenever that styles is loaded for the first time. From then on the minifies style is loaded and is no longer minified again. Should you need to minify the style again you can delete the references to the minified versions below.', 'booking-system-edoobox') ?>
    </p>

    <button
        id="remove-all-design-references"
        class="button flex items-center mb-4">
        <span class="dashicons dashicons-trash mr-2"></span>
        <span><?= _e('Remove All', 'booking-system-edoobox') ?></span>
    </button>

    <ul id="edoobox-design-references"
        class="edoobox-design-references">
        <?php foreach ( $designReferences as $reference ) { ?>
            <li
                id="item-<?= $reference ?>"
                class="flex items-center">
                <div>
                    <div class="flex items-center">
                        <span class="dashicons dashicons-admin-customizer mr-4"></span>
                        <p class="edoobox-design-reference-item"><?= $reference ?></p>
                    </div>
                </div>
                <div>
                    <button
                        id="<?= $reference ?>"
                        class="remove-design-reference-button">
                        <span class="dashicons dashicons-trash"></span>
                    </button>
                </div>
            </li>
        <?php } ?>
        <?php if ( ! $designReferences || empty($designReferences) ) { ?>
            <li><p><?= _e('Nothing cached yet.', 'booking-system-edoobox') ?></p></li>
        <?php } ?>
    </ul>

    <!-- Spinner [start] -->
    <div id="edbs_overlay"
         class="edbs_overlay hidden edoobox-spinner">
        <div class="edbs_overlay__inner">
            <div class="edbs_overlay__content"><span class="edbs_spinner"></span></div>
        </div>
    </div>
    <!-- Spinner [end] -->

    <div hidden
         id="ajax-url"><?= $this->ajaxURL ?></div>

    <script>
		// --- Remove all design references
		var ajaxURL = document.querySelector("#ajax-url").innerText;
		var removeAllButton = document.querySelector("#remove-all-design-references");
		var spinner = document.querySelector(".edoobox-spinner");

		removeAllButton && removeAllButton.addEventListener("click", function () {
			spinner.classList.remove("hidden");
			jQuery.post(ajaxURL, {
				action: "remove-design-references"
			}, function (response) {
				var referenceItems = document.querySelector("#edoobox-design-references");
				if (response.data && response.data.success) {
					referenceItems.innerHTML = "";
					spinner.classList.remove("hidden");
					spinner.classList.add("hidden");
				}
			});
		});

		// --- Remove one design reference
		var removeButtons = document.querySelectorAll(".remove-design-reference-button");
		var designReferences = Array.from(document.querySelectorAll(".edoobox-design-reference-item"));

		for (var button of removeButtons) {
			button.addEventListener("click", function (event) {
				var reference = event.target.closest("button").id;
				var references = designReferences
					.filter(function (r) {
						return r.innerHTML !== reference;
					})
					.map(function (r) {
						return r.innerHTML;
					});
				spinner.classList.remove("hidden");
				jQuery.post(ajaxURL, {
					action: "store-design-references",
					references: references
				}, function (response) {
					var referenceItems = document.querySelector("#edoobox-design-references");
					if (response.data && response.data.success) {
						var referenceItem = document.querySelector("#item-" + reference);
						referenceItem.parentNode.removeChild(referenceItem);
						spinner.classList.remove("hidden");
						spinner.classList.add("hidden");
					}
				});
			});
		}

		var edbs_element = {};
		edbs_element.caching_minutes = document.getElementById('edoobox_cache_time_in_s');
		edbs_element.caching_hours = document.getElementById('edbs_caching_hours');

		for (var item of ['change', 'keyup']) {
			edbs_element.caching_minutes.addEventListener(item, convertToHours);
		}

		function convertToHours() {
			edbs_element.caching_hours.innerHTML = edbs_element.caching_minutes.value / 60;
		};
    </script>
    <style>
        .edoobox-design-references li {
            border: 1px solid gray;
            justify-content: space-between;
            padding: .05rem 1rem;
        }

        .edbs_overlay {
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            position: fixed;
            background: rgba(0, 0, 0, 0.3);
        }

        .edbs_overlay__inner {
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            position: absolute;
        }

        .edbs_overlay__content {
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .edbs_spinner {
            width: 75px;
            height: 75px;
            display: inline-block;
            border-width: 2px;
            border-color: rgba(255, 255, 255, 0.05);
            border-top-color: #fff;
            animation: edbs_spin 1s infinite linear;
            border-radius: 100%;
            border-style: solid;
        }

        @keyframes edbs_spin {
            100% {
                transform: rotate(360deg);
            }
        }
    </style>
</div>
<?php