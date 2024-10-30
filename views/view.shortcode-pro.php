<?php settings_errors(); ?>
<div class="edoobox-plugin-admin wrap">

    <?php include_once "components/cmp.google-maps-missing.php" ?>

    <?php $developerFlag = true ?>
    <?php $title = __("Shortcode Pro", "booking-system-edoobox") ?>
    <?php include_once "components/cmp.view-title.php" ?>

    <!-- Notice Board [start] -->
    <div class="edoobox-notice is-info mb-4">
        <?php settings_errors(); ?>
        <p><?php _e('With the Shortcode Pro you have the possibility to highlight your next offers at a place defined by you (e.g. on the start page) shortly before the start. In the variable "limit" define the number of offers that will be displayed. With HTML knowledge you can also personalise them optically and create You will find the appropriate variables under "Example variables / extend values". We provide you with two templates. The template table and list view cannot be changed, but can be used for your own template.', 'booking-system-edoobox') ?></p>
        <p><?php _e("Below you can see a list of variables that are usable in the templates.", "booking-system-edoobox") ?>
            <br>
            <?php _e("The variables are white-space sensitive, meaning that they need a space between the variable and the double brackets like this --> {{ variable }}", "booking-system-edoobox") ?>
        </p>
        <p><?php _e('Copy the following shortcode and paste it into your desired page.', 'booking-system-edoobox') ?></p>
    </div>
    <!-- Notice Board [end] -->


    <!-- Your Shortcode [start] -->
    <h2 class="mb-4"><?php _e('Your Shortcode:', 'booking-system-edoobox') ?></h2>

    <div class="edoobox-notice mb-8">
        <div id="edbs_shortcode_preview"
             class="font-monospace">
            [edbs_panel
            type="<span style="background-color: #7FDBFF /*blue*/;"
                        data-tooltip="<?php _e('the shortcode type', 'booking-system-edoobox') ?>"
                        data-flow="top">next</span>"
            language="de"
            limit="<span style="background-color: #01FF70 /*lightgreen*/"
                         data-tooltip="<?php _e('the ammount of events to show. (1-X)', 'booking-system-edoobox') ?>"
                         data-flow="top">5</span>"
            template="<span class="edbs-replace"
                            data-tooltip="<?php _e('the template name that should be used.', 'booking-system-edoobox') ?>"
                            data-flow="top">custom</span>"
            root="<?= $shortcodeURL; ?>"]
        </div>
    </div>
    <!-- Your Shortcode [end] -->


    <!-- Copy Shortcode [start] -->
    <button
        id="edbs_copy_next_sc"
        class="button button-small flex items-center mb-4">
        <?php _e('copy shortcode', 'booking-system-edoobox') ?>
        <span class="hidden dashicons dashicons-saved"></span>
    </button>
    <!-- Copy Shortcode [end] -->


    <hr class="mb-8">

    <!-- Example Variables [start] -->
    <details class="mb-8">

        <!-- Expand Button [start] -->
        <summary class="button">
            <b>
                <?php _e("Expand example variables / values", "booking-system-edoobox") ?>
            </b>
        </summary>
        <!-- Expand Button [end] -->

        <!-- Code Example Variables [start] -->
        <pre>
            'id' => string 'offer_6c7c0547ab78_4450937827'
            'name' => string 'Event One'
            'number' => string ''
            'shortdescription' => string 'Our event focuses on the ability to concentrate ... '
            'user_maximum' => string '10'
            'user_minimal' => string '1'
            'start_date' => string '2024-07-08T23:55:00+02:00'
            'end_date' => string '2024-07-08T23:55:00+02:00'
            'deadline' => string '2024-07-08T23:55:00+02:00'
            'image' => string 'https://app1.edoobox.com/getFile/imgT/F_9051/2db6714e5e4795415b3db26451ab0adf.jpg'
            'place_id' => string 'place_02088ad3f332_-9086'
            'category_id' => string 'category_3e4cf003d4b5_4255119442'
            'status' => string '1'
            'lesson_booking' => boolean false
            'waiting_list' => boolean false
            'offer_details_url' => string 'Harmony/Kurs.ed.491763'
            'booking_status' => string 'normal'
            'booking_start_url' => string 'https://app1.edoobox.com/de/book/9cHWzgFd1o1bzBDaBNTc6ZFeaNEZsdENMFzR6RXayZ2N4ZUbXNlVkBFb5lkQCFWTJJjZxk1NytUZYNmZkNFZYxGSxIGNEFVORVlcWl0dygUQQNmS0p0bulmTP9iWzJFRhd3S2RkdMNkYWBza/?edstart=0'
            'rewriteUrl' => string '/sample-page/sub-shortcode/erin1992/Harmony/Kurs.ed.491763'
        </pre>
        <!-- Code Example Variables [end] -->

        <div class="edoobox-notice mb-8">
            <?php _e("Using 'name' the variable would look like this in the template: {{ name }} and output: 'Event One'", "booking-system-edoobox") ?>
            <br>
            <?php _e("Any returned variable from the v1/offers API is automatically added to usable template-variables.", "booking-system-edoobox") ?>
        </div>
    </details>
    <!-- Example Variables [end] -->


    <hr class="mb-8">


    <!-- Base / Custom Templates [start] -->
    <h2>
        <?php _e('Base and custom templates', 'booking-system-edoobox') ?>
    </h2>

    <form method="post">

        <table class="form-table mb-4">
            <tbody><?php
            settings_fields($this->shortcodeNextOptionsName);
            wp_nonce_field($this->shortcodeNextMetaBoxNonceName, 'next_meta_box_nonce');
            ?>

            <!-- Select Template [start] -->
            <tr>
                <th>
                    <label><?php _e('Select Template', 'booking-system-edoobox') ?></label>
                </th>
                <td>
                    <label for="edbs_options_select"
                           hidden></label>
                    <select id="edbs_options_select">

                        <option
                            disabled
                            hidden
                            selected
                            value="">
                            <?php _e('Select', 'booking-system-edoobox') ?>
                        </option>

                        <option value="List">
                            <?php _e('"List" View - Listenansicht (default/fallback)', 'booking-system-edoobox') ?>
                        </option>

                        <option value="Table">
                            <?php _e('"Table" View - Tabellenansicht', 'booking-system-edoobox') ?>
                        </option>

                        <?php
                        foreach ( $shortcodeTemplates as $key => $value ) {
                            echo '<option value="' . $key . '">' . $key . '</option>';
                        }
                        ?>
                    </select>
                </td>
            </tr>
            <!-- Select Template [end] -->

            <!-- Template Name [start] -->
            <tr>
                <th scope="row">
                    <label>
                        <?php _e('Template Name:', 'booking-system-edoobox') ?>
                    </label>
                </th>

                <td>

                    <input
                        id="edbs_next_template_keyname"
                        class="regular-text edbs_box_style mb-4"
                        placeholder="template-name"
                        style="padding: 5px;"
                        value="<?= $lastEditedShortcodeTemplate; ?>">

                    <br>

                    <div id="edbs_next_template_keyname_description"
                         class="description"
                         style="max-width: 80%;">
                        <p class="edbs-warning edbs_box_style"></p>
                        <p class="edbs-warning-2 edbs_box_style">
                            <?php _e('If there is already a saved template with that name, it will be overwritten.', 'booking-system-edoobox') ?>
                        </p>
                    </div>

                </td>
            </tr>
            <!-- Template Name [end] -->
            </tbody>
        </table>

        <textarea
            id="edbs_next_templates"
            name="edbs_next_options[templates][custom]"
            style="width:95%; min-height: 350px;"><?php
            echo trim($firstTemplate) ?>
        </textarea>

        <?php submit_button(); ?>
    </form>
    <!-- Base / Custom Templates [end] -->


    <div id="edbs_default"
         class="hidden"><?= file_get_contents($this->pluginPath . '/views/shortcode_next.html'); ?></div>

    <div id="edbs_table"
         class="hidden"><?= file_get_contents($this->pluginPath . '/views/shortcode_next_table.html'); ?></div>

    <div id="edbs_jumbotron"
         class="hidden"><?= file_get_contents($this->pluginPath . '/views/shortcode_next_jumbotron.html'); ?></div>

    <?php foreach ( $shortcodeTemplates as $key => $value ) { ?>

        <div id="edbs_cstm_<?= $key ?>"
             class="hidden"><?= $value ?></div>

    <?php } ?>

    <script>
		document.addEventListener("DOMContentLoaded", function (event) {

			let optionsSelectElement = document.getElementById('edbs_options_select');
			optionsSelectElement.options = optionsSelectElement.querySelectorAll('.option');
			let insertField = document.getElementById('edbs_next_templates');
			let shortcodePreviewText = document.querySelector('#edbs_shortcode_preview .edbs-replace');

			let copy_next_button = document.getElementById('edbs_copy_next_sc');
			copy_next_button.spanChild = copy_next_button.querySelector('span');
			let edbs_shortcode_preview = document.getElementById('edbs_shortcode_preview');

			let submit = document.getElementById('submit');
			submit.disabled = true;

			let templateKeyName = document.getElementById('edbs_next_template_keyname');
			let templateKeyNameWarning = document.querySelector('#edbs_next_template_keyname_description .edbs-warning');
			let templateKeyNameWarning2 = document.querySelector('#edbs_next_template_keyname_description .edbs-warning-2');

			let getDefaultTemplate = document.getElementById('edbs_default');
			let getTableTemplate = document.getElementById('edbs_table');

			const defaultTemplate = getDefaultTemplate.innerHTML;
			const tableTemplate = getTableTemplate.innerHTML;

			// initiating events so we don't have to rewrite the code to work well.
			function setCurrentTemplate() {
				let customEvent = {};
				customEvent.change = new CustomEvent('change');

				for (let item of optionsSelectElement) {
					if (item.value === templateKeyName.value) {
						item.selected = true;
						templateKeyName.dispatchEvent(customEvent.change);
						optionsSelectElement.dispatchEvent(customEvent.change);
					}
				}
			}

			optionsSelectElement.addEventListener('change', function () {
				let keyName = optionsSelectElement.options[optionsSelectElement.selectedIndex].value;
				let interrupt = false;
				templateKeyName.value = keyName;

				switch (keyName) {
					case 'List':
						interrupt = true;
						insertField.innerHTML = defaultTemplate;
						break;
					case 'Table':
						interrupt = true;
						insertField.innerHTML = tableTemplate;
						break;
				}

				templateKeyName.dispatchEvent(new Event('change', { 'bubbles': true }));

				if (interrupt) return;

				let keyValue = document.getElementById('edbs_cstm_' + keyName);
				insertField.innerHTML = keyValue.innerHTML;

			});

			for (let item of ['change', 'keyup']) {
				templateKeyName.addEventListener(item, showHints);
			}

			function showHints() {
				let value = (templateKeyName.value === 'List' || templateKeyName.value === 'Table');
				submit.disabled = value;
				insertField.setAttribute('name', 'edbs_next_options[templates][' + templateKeyName.value + ']');
				shortcodePreviewText.innerHTML = templateKeyName.value;
				shortcodePreviewText.style.backgroundColor = '#FFDC00 /*yellow*/';
				templateKeyNameWarning2.classList.remove('edbs_highlight');
				templateKeyNameWarning.classList.remove('edbs_highlight_bad');

				copy_next_button.spanChild.classList.add('hidden');

				for (let i = 0; i < optionsSelectElement.options.length; i++) {
					let issue = false;
					let item = optionsSelectElement.options[i];
					item.classList.remove('edbs_highlight');
					templateKeyName.classList.remove('edbs_highlight', 'edbs_highlight_bad', 'edbs_highlight_ok');

					if (item.innerHTML === templateKeyName.value) {
						item.classList.add('edbs_highlight');
						templateKeyNameWarning2.classList.add('edbs_highlight');
						templateKeyName.classList.add('edbs_highlight');
						issue = true;
					}
					if (value) {
						templateKeyNameWarning.innerHTML = templateKeyName.value + <?php _e('" is a base template. Please do not use the base templates predefined by edoobox as template names."', 'booking-system-edoobox'); ?>;
						templateKeyNameWarning.classList.add('edbs_highlight_bad');
						issue = true;
					} else {
						templateKeyNameWarning.innerHTML = '';
					}

					if ( ! issue) {
						templateKeyName.classList.add('edbs_highlight_ok');
					}
				}

			}

			copy_next_button.addEventListener('click', function () {
				// copy the shortcode
				let aux = document.createElement("input");
				aux.setAttribute("value", edbs_shortcode_preview.innerText);
				// Append the aux input to the body
				document.body.appendChild(aux);

				// Highlight the content
				aux.select();
				aux.setSelectionRange(0, 99999); /*For mobile devices*/

				// Execute the copy command
				document.execCommand("copy");
				// Remove the input from the body
				document.body.removeChild(aux);

				copy_next_button.spanChild.classList.remove('hidden');
				copy_next_button.spanChild.style.color = '#2ECC40 /*green*/';
			});

			setCurrentTemplate();

		});
    </script>

    <style>
        .edbs_highlight {
            background-color: #FFDC00 /*yellow*/;
        }

        .edbs_highlight_ok {
            background-color: #2ECC40 /*green*/;
        }

        .edbs_highlight_bad {
            background-color: #FF851B /*orange*/;
            color: black;
        }

        .edbs_box_style {
            border-radius: 5px;
            padding: 10px;
        }

        [data-tooltip] {
            position: relative;
            cursor: pointer;
        }

        [data-tooltip]:before,
        [data-tooltip]:after {
            line-height: 1;
            font-size: .9em;
            pointer-events: none;
            position: absolute;
            box-sizing: border-box;
            display: none;
            opacity: 0;
        }

        [data-tooltip]:before {
            content: "";
            border: 5px solid transparent;
            z-index: 100;
        }

        [data-tooltip]:after {
            content: attr(data-tooltip);
            text-align: center;
            min-width: 3em;
            max-width: 21em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 6px 8px;
            border-radius: 3px;
            background: #85144b /*maroon*/;
            color: #FFFFFF;
            z-index: 99;
        }

        [data-tooltip]:hover:before,
        [data-tooltip]:hover:after {
            display: block;
            opacity: 1;
        }

        [data-tooltip]:not([data-flow])::before,
        [data-tooltip][data-flow="top"]::before {
            bottom: 100%;
            border-bottom-width: 0;
            border-top-color: #85144b /*maroon*/;
        }

        [data-tooltip]:not([data-flow])::after,
        [data-tooltip][data-flow="top"]::after {
            bottom: calc(100% + 5px);
        }

        [data-tooltip]:not([data-flow])::before, [tooltip]:not([data-flow])::after,
        [data-tooltip][data-flow="top"]::before,
        [data-tooltip][data-flow="top"]::after {
            left: 50%;
            -webkit-transform: translate(-50%, -4px);
            transform: translate(-50%, -4px);
        }

        [data-tooltip][data-flow="bottom"]::before {
            top: 100%;
            border-top-width: 0;
            border-bottom-color: #4621FF;
        }

        [data-tooltip][data-flow="bottom"]::after {
            top: calc(100% + 5px);
        }

        [data-tooltip][data-flow="bottom"]::before, [data-tooltip][data-flow="bottom"]::after {
            left: 50%;
            -webkit-transform: translate(-50%, 8px);
            transform: translate(-50%, 8px);
        }

        [data-tooltip][data-flow="left"]::before {
            top: 50%;
            border-right-width: 0;
            border-left-color: #4621FF;
            left: calc(0em - 5px);
            -webkit-transform: translate(-8px, -50%);
            transform: translate(-8px, -50%);
        }

        [data-tooltip][data-flow="left"]::after {
            top: 50%;
            right: calc(100% + 5px);
            -webkit-transform: translate(-8px, -50%);
            transform: translate(-8px, -50%);
        }

        [data-tooltip][data-flow="right"]::before {
            top: 50%;
            border-left-width: 0;
            border-right-color: #4621FF;
            right: calc(0em - 5px);
            -webkit-transform: translate(8px, -50%);
            transform: translate(8px, -50%);
        }

        [data-tooltip][data-flow="right"]::after {
            top: 50%;
            left: calc(100% + 5px);
            -webkit-transform: translate(8px, -50%);
            transform: translate(8px, -50%);
        }

        [data-tooltip=""]::after, [data-tooltip=""]::before {
            display: none !important;
        }
    </style>

</div>