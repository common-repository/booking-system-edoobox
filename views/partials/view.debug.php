<h4>DEBUG INFORMATION</h4>
<table class='edoobox-debug'>
    <thead>
    <tr>
        <th>Key</th>
        <th>Value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Plugin Version</td>
        <td><?= $pluginVersion ?></td>
    </tr>
    <tr>
        <td>WP Version</td>
        <td><?= $wpVersion ?></td>
    </tr>
    <tr>
        <td>Cache Einstellung</td>
        <td><?= $cachingTime ?></td>
    </tr>
    <?= $shortcodes ?>
    </tbody>
</table>
<style>
    table.edoobox-debug {
        font-family: monospace, "Montserrat", sans-serif;
        font-size: 16px;
    }
    table.edoobox-debug tr th {
        background: yellow;
    }
    table.edoobox-debug tr td,
    table.edoobox-debug tr th {
        padding: 0.5rem;
    }
</style>
