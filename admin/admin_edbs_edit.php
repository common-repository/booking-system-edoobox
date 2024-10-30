<div class="edoobox-plugin-admin wrap">
	<h1 class="mb-4"><?php _e('edoobox Online Booking System - Options', 'booking-system-edoobox');?></h1>
    <div class="edoobox-notice is-info mb-4">
        <?php settings_errors(); ?>
        <p><?php _e('1. To configure your edoobox Booking Plugin, you must <a href="https://app1.edoobox.com/login/signup">create an account</a> / <a href="https://app1.edoobox.com/login">login</a>', 'booking-system-edoobox');?></p>
        <p><?php _e('2. Copy your account code and public key from your edoobox account. You will find these
Information Under the account Shortcut (Top Left)> Settings> API Access Management> Public Key.', 'booking-system-edoobox');?></p>
        <p><?php _e('3. Copy the account code and the public key into the appropriate boxes', 'booking-system-edoobox');?></p>
        <p><?php _e('4. Integrate edoobox with the shortcode generator on your side.', 'booking-system-edoobox');?></p>
    </div>

	<div class="edoobox-booking-system-screen">
		<form method="post" action="">
			<?php
			settings_fields('edbs_options');
			$edbs_options = get_option('edbs_options');
			$edbs_options_template = get_option('edbs_options_template');
			wp_nonce_field( 'meta_box_nonce', 'meta_box_nonce' );
			if ( ! isset($edbs_options['design'])){
				$edbs_options['design'] = 'standard';
			}
			if ( ! isset($edbs_options['account_code'])){
				$edbs_options['account_code'] = '';
			}
			if ( ! isset($edbs_options['public_key'])){
				$edbs_options['public_key'] = '';
			}
			if ( ! isset($edbs_options['secret_key'])){
				$edbs_options['secret_key'] = '';
			}
			?>
			<table class="form-table">
				<tbody>
				<tr>
					<th scope="row"><label for="public_key"><?php _e(' Private API Key', 'booking-system-edoobox'); ?></label></th>
					<td>
						<input type="text" id="public_key" class="regular-text" name="edbs_options[public_key]" value="<?php echo $edbs_options['public_key']; ?>">
						<p class="description" id="tagline-description1"><?php _e(' You can find the Private Key at the top link in your edoobox account.', 'booking-system-edoobox'); ?></p>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="secret_key"><?php _e(' Secret API Key', 'booking-system-edoobox'); ?></label></th>
					<td>
						<input type="password" id="secret_key" class="regular-text" name="edbs_options[secret_key]" value="<?php echo $edbs_options['secret_key']; ?>">
						<p class="description" id="tagline-description2"><?php _e(' You can find the Secret API Key at the top link in your edoobox account.', 'booking-system-edoobox'); ?></p>
					</td>
				</tr>
                <tr>
                    <td>
                        <button id="edo-ajax-checkapicred-btn" type="button" class="button edbs-wiggle"><span class="dashicons dashicons-privacy" style="padding-top: 4px;"></span><?php _e("Check API Credentials", "booking-system-edoobox") ?></button><span id="edo-ajax-checkapicred"></span>
                    </td>
                </tr>
                <tr>
                    <th scope="row"><label for="account_code"><?php _e(' edoobox Account Code', 'booking-system-edoobox'); ?></label></th>
                    <td>
                        <input type="text" id="account_code" class="regular-text" name="edbs_options[account_code]" value="<?php echo $edbs_options['account_code']; ?>">
                        <p class="description" id="tagline-description"><?php _e(' You can find the account code above link in your edoobox account.', 'booking-system-edoobox'); ?></p>
                    </td>
                </tr>
				<tr>
					<th scope="row"><label for="design"><?php _e(' Design Select', 'booking-system-edoobox'); ?></label></th>
					<td>
						<select id="design" name="edbs_options[design]" class="regular-text">
							<option value="standard" <?php if($edbs_options['design'] == "standard") { echo "selected";} ?>><?php _e(' Standard Design (Standard)', 'booking-system-edoobox'); ?></option>
							<option value="bootstrap" <?php if($edbs_options['design'] == "bootstrap") { echo "selected";} ?>><?php _e(' Standard BootStrap Design from Website', 'booking-system-edoobox'); ?></option>
						</select>
						<p class="description" id="tagline-description3"><?php _e(' Choose if you want to adopt the design from the edoobox account or website design.', 'booking-system-edoobox'); ?></p>
					</td>
				</tr>
				</tbody>
			</table>
			<?php submit_button();?>
		</form>

        <style>
            .edbs-wiggle {
                -webkit-animation: shake 5s cubic-bezier(.36,.07,.19,.97) both;
                animation: shake 5s cubic-bezier(.36,.07,.19,.97) both;
                -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                -webkit-perspective: 1000px;
                perspective: 1000px;
            }

            @-webkit-keyframes shake {
                10%, 26% {
                    -webkit-transform: translate3d(-1px, 0, 0);
                    transform: translate3d(-1px, 0, 0);
                }

                12%, 24% {
                    -webkit-transform: translate3d(2px, 0, 0);
                    transform: translate3d(2px, 0, 0);
                }

                14%, 18%, 22% {
                    -webkit-transform: translate3d(-4px, 0, 0);
                    transform: translate3d(-4px, 0, 0);
                }

                16%, 20% {
                    -webkit-transform: translate3d(4px, 0, 0);
                    transform: translate3d(4px, 0, 0);
                }
            }

            @keyframes shake {
                10%, 26% {
                    -webkit-transform: translate3d(-1px, 0, 0);
                    transform: translate3d(-1px, 0, 0);
                }

                12%, 24% {
                    -webkit-transform: translate3d(2px, 0, 0);
                    transform: translate3d(2px, 0, 0);
                }

                14%, 18%, 22% {
                    -webkit-transform: translate3d(-4px, 0, 0);
                    transform: translate3d(-4px, 0, 0);
                }

                16%, 20% {
                    -webkit-transform: translate3d(4px, 0, 0);
                    transform: translate3d(4px, 0, 0);
                }
            }
        </style>
    </div>
</div>