<div class="edoobox-plugin-admin wrap">

    <?php $title = __('Information', 'booking-system-edoobox') ?>
    <?php include_once "components/cmp.view-title.php" ?>

	<!-- Notice Board [start] -->
	<div class="edoobox-notice is-info mb-4">
        <?php settings_errors(); ?>
		<p><?php _e('General information about the current installation. You can send this information to the edoobox support team, if you need help with your current plugin installation or configuration.', 'booking-system-edoobox') ?></p>
	</div>
	<!-- Notice Board [end] -->

	<!-- Informationen [start] -->
	<div class="flex items-center mt-8 mb-4">
		<span class="dashicons dashicons-info mr-2"></span>
		<h2><?= _e('Information', 'booking-system-edoobox') ?></h2>
	</div>

	<table class="edoobox-information-table">
		<tr>
			<td><strong><?= _e('Plugin Version:', 'booking-system-edoobox') ?></strong></td>
			<td><?= $registered_plugin_version ?></td>
		</tr>
		<tr>
			<td><strong><?= _e('WordPress Version:', 'booking-system-edoobox') ?></strong></td>
			<td><?= get_bloginfo('version') ?></td>
		</tr>
		<tr>
			<td><strong><?= _e('PHP Version:', 'booking-system-edoobox') ?></strong></td>
			<td><?= phpversion() ?></td>
		</tr>
		<tr>
			<td><strong><?= _e('Last Data Cleanse:', 'booking-system-edoobox') ?></strong></td>
			<td><?= $last_cleanup ?></td>
		</tr>
		<tr>
			<td><strong><?= _e('Last Cache Cleanse:', 'booking-system-edoobox') ?></strong></td>
			<td><?= $last_cache_cleanup ?></td>
		</tr>
		<tr>
			<td><strong><?= _e('Last Rewrite:', 'booking-system-edoobox') ?></strong></td>
			<td><?= $last_rewrite ?></td>
		</tr>
		<tr>
			<td><strong><?= _e('Valid Keys:', 'booking-system-edoobox') ?></strong></td>
			<td><?= $validKeys ?></td>
		</tr>
		<tr>
			<td><strong><?= _e('Environment:', 'booking-system-edoobox') ?></strong></td>
			<td><?= $environment ?></td>
		</tr>
		<tr>
			<td><strong><?= _e('Account:', 'booking-system-edoobox') ?></strong></td>
			<td><?= $account_code ?></td>
		</tr>
		<tr>
			<td><strong><?= _e('Cache Time:', 'booking-system-edoobox') ?></strong></td>
			<td><?= $cache_time ?></td>
		</tr>
	</table>
	<!-- Informationen [end] -->

	<!-- Rewrite Rules [start] -->
	<div class="flex items-center mt-8 mb-4">
		<span class="dashicons dashicons-admin-links mr-2"></span>
		<h2><?= _e('Shortcodes', 'booking-system-edoobox') ?></h2>
	</div>

	<table class="edoobox-information-table">
		<tr>
			<th><?= _e('Post ID', 'booking-system-edoobox') ?></th>
			<th><?= _e('Shortcode', 'booking-system-edoobox') ?></th>
		</tr>
        <?php foreach ($shortcodes as $shortcode) { ?>
			<tr>
				<td><?= $shortcode["post_id"] ?? 'n/a' ?></td>
				<td><?= $shortcode["shortcode"] ?? 'n/a' ?></td>
			</tr>
        <?php } ?>
	</table>
	<!-- Rewrite Rules [end] -->

	<!-- Rewrite Rules [start] -->
	<div class="flex items-center mt-8 mb-4">
		<span class="dashicons dashicons-admin-links mr-2"></span>
		<h2><?= _e('Rewrite Rules', 'booking-system-edoobox') ?></h2>
	</div>

	<table class="edoobox-information-table">
		<?php foreach ($rewrite_rules as $rule) { ?>
			<tr>
				<td><?= $rule ?></td>
			</tr>
		 <?php } ?>
	</table>
	<!-- Rewrite Rules [end] -->


	<style>
		.edoobox-information-table {
			border: 1px solid #d2d2d2;
            border-collapse: collapse; /* Ensures borders are collapsed */
            border-spacing: 0; /* Removes gaps between cells */
			max-width: 700px;
			width: 100%;
        }
		.edoobox-information-table th, td {
			padding: 1px 10px 1px 5px;
			text-align: left;
		}
		.edoobox-information-table tr:nth-child(even) {
            background: white;
		}
	</style>
</div>
<?php