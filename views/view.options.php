<?php // rendered in AdminCallbacks 'templateOptions'
use Edoobox\Base\BaseController;
?>

<div class="edoobox-plugin-admin wrap">

    <?php
	include_once "components/cmp.google-maps-missing.php" ?>

    <?php $title = __("Options", "booking-system-edoobox") ?>
    <?php include_once "components/cmp.view-title.php" ?>


    <!-- Notice Board [start] -->
    <div class="edoobox-notice is-info mb-4">
        <?php settings_errors(); ?>
        <p><?php _e('1. To configure your edoobox Booking Plugin, you must <a href="https://app1.edoobox.com/login/signup">create an account</a> / <a href="https://app1.edoobox.com/login">login</a>', 'booking-system-edoobox'); ?></p>
        <p><?php _e('2. Copy your account code and public key from your edoobox account. You will find these Information Under the account Shortcut (Top Left)> Settings> API Access Management> Public Key.', 'booking-system-edoobox'); ?></p>
        <p><?php _e('3. Copy the account code and the public key into the appropriate boxes', 'booking-system-edoobox'); ?></p>
        <p><?php _e('4. Integrate edoobox with the shortcode generator on your side.', 'booking-system-edoobox'); ?></p>
    </div>
    <!-- Notice Board [end] -->

    <!-- Declare variables [start] -->
    <?php $optionNameUseEdooboxV2 = "use_edoobox_v2" ?>
    <!-- Declare variables [end] -->

    <form method="post"><?php
        // --- Setup WP form settings.
        // --- Fetch previously stored data.
        settings_fields(self::SETTINGS_OPTION_NAME);
        $edbs_options_template = get_option(self::SETTINGS_OPTION_TEMPLATE_NAME);
        wp_nonce_field($this->metaBoxNoneName, 'meta_box_nonce');

        ?>

		<h2 class="mt-8">Haupteinstellungen</h2>
        <table class="form-table">
            <tbody>

			<!-- Private API Key [start] -->
			<tr>
				<th scope="row">
					<label for="public_key">
                        <?php _e('Private API Key', 'booking-system-edoobox'); ?>
					</label>
				</th>
				<td>
					<input
						id="public_key"
						class="regular-text"
						name="edbs_options[public_key]"
						type="text"
						value="<?php echo $this->edbs_options['public_key']; ?>">
					<p class="description"
					   id="tagline-description1">
                        <?php _e('You can find the Private Key at the top link in your edoobox account.', 'booking-system-edoobox'); ?>
					</p>
				</td>
			</tr>
			<!-- Private API Key [end] -->

			<!-- Secret API Key [start] -->
			<tr>
				<th scope="row">
					<label for="secret_key"><?php _e('Secret API Key', 'booking-system-edoobox'); ?></label>
				</th>
				<td>
					<input type="password"
						   id="secret_key"
						   class="regular-text"
						   name="edbs_options[secret_key]"
						   value="<?php echo $this->edbs_options['secret_key']; ?>">
					<p class="description"
					   id="tagline-description2"><?php _e('You can find the Secret API Key at the top link in your edoobox account.', 'booking-system-edoobox'); ?></p>
				</td>
			</tr>
			<!-- Secret API Key [end] -->

			<!-- Account Code [start] -->
			<tr>
				<th scope="row">
					<label for="account_code"><?php _e("edoobox Account Code", "booking-system-edoobox"); ?></label>
				</th>
				<td>
					<input type="text"
						   id="account_code"
						   class="regular-text"
						   name="edbs_options[account_code]"
						   value="<?php echo $this->edbs_options['account_code']; ?>">
					<p class="description"
					   id="tagline-description"><?php _e('You can find the account code above link in your edoobox account.', 'booking-system-edoobox'); ?></p>
				</td>
			</tr>
			<!-- Account Code [end] -->

			<!-- Choose Environment [start] -->
			<tr>
				<th scope="row">
					<label for="environment"><?php _e('Choose Environment', 'booking-system-edoobox'); ?></label>
				</th>
				<td>
					<select id="environment"
							name="edbs_options[environment]"
							class="regular-text">
						<option value="app2" <?php if ($this->edbs_options[self::SETTINGS_ENVIRONMENT] == "app2") {
                            echo "selected";
                        } ?>><?php _e('APP 2 (Default)', 'booking-system-edoobox'); ?></option>
						<option value="app1" <?php if ($this->edbs_options[self::SETTINGS_ENVIRONMENT] == "app1") {
                            echo "selected";
                        } ?>><?php _e('APP 1', 'booking-system-edoobox'); ?></option>
					</select>
					<p class="description"
					   id="tagline-description3">
						<span
							style="display: block">
                            <?php _e('If your edoobox account was created after 01.06.2023, select APP 2. To determine which environment you need to select, check out the following documentation: ', 'booking-system-edoobox'); ?>
							<a href="https://v2.docs.edoobox.com/docs/">
                                <?php _e('What environment do I need to select?', 'booking-system-edoobox'); ?>
							</a>
						</span>
					</p>
				</td>
			</tr>
			<!-- Choose Environment [end] -->

            <!-- Choose Authentication Version [start] -->
            <tr>
                <th scope="row">
                    <label for="<?= self::USE_V2 ?>">
                        <?php _e('Use API V2', 'booking-system-edoobox'); ?>
                    </label>
                </th>
                <td class="flex items-center">
                    <input
                        id="<?= self::USE_V2 ?>"
                        class="mr-2 regular-text"
                        name="edbs_options[<?= self::USE_V2 ?>]"
                        type="checkbox"
                        <?= $this->edbs_options[self::USE_V2] ? 'checked' : '' ?>
                        value="true">
                    <p class="description"
                       id="tagline-description1">
                        <?php _e('If you are using edoobox V2, then activate this setting and add V2 API Keys', 'booking-system-edoobox'); ?>
                    </p>
                </td>
            </tr>
            <!-- Choose Authentication Version [end] -->
            </tbody>
        </table>

		<div class="flex items-center">
            <?php submit_button(); ?>
			<button
				id="edo-ajax-checkapicred-btn"
				class="button edbs-wiggle ml-2 mt-1"
				type="button">
				<span class="dashicons dashicons-privacy"
					  style="padding-top: 4px;"></span>
                <?php _e("Check API Credentials", "booking-system-edoobox") ?>
			</button>
			<span id="edo-ajax-checkapicred"></span>
		</div>

		<h2 class="mt-4">Weitere Einstellungen</h2>
		<table class="form-table">
			<tbody>
			<!-- Design Select [start] -->
			<tr>
				<th scope="row">
					<label for="design"><?php _e('Design Select', 'booking-system-edoobox'); ?></label>
				</th>
				<td>
					<select id="design"
							name="edbs_options[design]"
							class="regular-text">
						<option value="standard" <?php if ($this->edbs_options['design'] == "standard") {
                            echo "selected";
                        } ?>><?php _e('Standard Design(Standard)', 'booking-system-edoobox'); ?></option>
						<option value="bootstrap" <?php if ($this->edbs_options['design'] == "bootstrap") {
                            echo "selected";
                        } ?>><?php _e('Standard BootStrap Design from Website', 'booking-system-edoobox'); ?></option>
					</select>
					<p class="description"
					   id="tagline-description3">
						<span
							class="mb-8"
							style="display: block">
                            <?php _e('Choose if you want to adopt the design from the edoobox account or website design . ', 'booking-system-edoobox'); ?>
						</span>
						<span class="dashicons dashicons-info"></span>
						<strong><?php _e('Tip') ?></strong>:
                        <?php _e('Sollte bei der Option «BootStrap Design» das Design nicht übernommen werden, kann es am Caching der Seite liegen. Drücken Sie gleichzeitig die Tasten [CTRL], [SHIFT] und [R] auf der Tastatur. ') ?>

					</p>
				</td>
			</tr>
			<!-- Design Select [end] -->

			<!-- Plugin Informationen [start] -->
			<tr>
				<th scope="row">
					<label for="debug_code">
                        <?php _e('Debugger Code', 'booking-system-edoobox'); ?>
					</label>
					<label for="debug_code_active"
						   hidden>
                        <?php _e('Debugger Code Active', 'booking-system-edoobox'); ?>
					</label>
				</th>
				<td>
					<div class="flex items-center">
						<input
							id="debug_code_active"
							class="mr-2 regular-text"
							name="edbs_options[debug_code_active]"
							type="checkbox"
                            <?= $this->edbs_options['debug_code_active'] ?? '' ? 'checked' : '' ?>>
						<input
							class="mr-2 regular-text"
							disabled
							type="text"
							value="<?= $this->edbs_options['debug_code'] ?? ''; ?>">
						<input
							id="debug_code"
							class="mr-2 regular-text"
							hidden
							name="edbs_options[debug_code]"
							type="text"
							value="<?= $this->edbs_options['debug_code'] ?? ''; ?>">
						<button
							id="copy-debug-code"
							class="flex items-center mr-2"
                            <?= $this->edbs_options['debug_code'] ?? '' ? '' : 'disabled' ?>>
							<span class="dashicons dashicons-admin-page mr-2"></span>
							Code kopieren
						</button>
						<button
							id="generate-debug-code"
							class="flex items-center mr-2">
							<span class="dashicons dashicons-image-rotate mr-2"></span>
							Code generieren
						</button>
					</div>
					<p class="description"
					   id="tagline-description1">
                        <?php _e('Generieren Sie und senden Sie dem edoobox Support Team einen Code, um dem Support Einsicht in Ihre Plugin Konfiguration zu geben.', 'booking-system-edoobox'); ?>
					</p>
				</td>
			</tr>
			<!-- Plugin Informationen [end] -->

			<!-- Shortcode Pro aktivieren [start] -->
			<tr>
				<th scope="row">
					<label for="<?= self::USE_V2 ?>">
                        <?php _e('Shortcode Pro', 'booking-system-edoobox'); ?>
					</label>
				</th>
				<td class="flex items-center">
					<input
						id="<?= self::SHORTCODE_PRO_ACTIVE ?>"
						class="mr-2 regular-text"
						name="edbs_options[<?= self::SHORTCODE_PRO_ACTIVE ?>]"
						type="checkbox"
                        <?= $this->edbs_options[self::SHORTCODE_PRO_ACTIVE] ? 'checked' : '' ?>
						value="true">
					<p class="description"
					   id="tagline-description1">
                        <?php _e('Activate Shortcode Pro. We do not recommend using this feature anymore!', 'booking-system-edoobox'); ?>
					</p>
				</td>
			</tr>
			<!-- Shortcode Pro aktivieren [end] -->
			</tbody>
		</table>

        <?php submit_button(); ?>
    </form>

    <script type="application/javascript">
        function generateCode(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }
            return result;
        }

        document.querySelector("#copy-debug-code").addEventListener("click", async e => {
            e.preventDefault();
            var text = document.querySelector("#debug_code")?.value;
            await navigator.clipboard.writeText(text);
            alert("In die Zwischenablage kopiert!");
        });

        document.querySelector("#generate-debug-code").addEventListener("click", async e => {
            e.preventDefault();
            var code = generateCode(30);
            var input = document.querySelector("#debug_code");
            var checkbox = document.querySelector("#debug_code_active");
            input.removeAttribute("disabled");
            input.value = code;
            checkbox.setAttribute("checked", "");
            document.querySelector("#submit").click();
            input.setAttribute("disabled", "");
        });
    </script>