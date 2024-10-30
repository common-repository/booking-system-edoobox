jQuery(document).ready(function() {
    let button = document.getElementById('edo-ajax-output-btn')
    if (button) {
        button.addEventListener('click', edoAjaxCheckPosts)
    }

    let buttonCheckApi = document.getElementById('edo-ajax-checkapicred-btn')
    if (buttonCheckApi) {
        buttonCheckApi.addEventListener('click', checkAPICredentials)
    }

    let buttonFlushCache = document.getElementById('edbs_flush_cache_btn');
    if (buttonFlushCache) {
        buttonFlushCache.addEventListener('click', flushCache);
    }

    function edoAjaxCheckPosts() {
        let data = {
            'action': 'edo_ajax_action',
        };
        // We can also pass the url value separately from ajaxurl for front end AJAX implementations
        jQuery.post(ajax_object.ajax_url, data, function (response) {
            let the_id = 'edo-ajax-output'
            let element = document.getElementById(the_id)

            button.classList.add('edbs-green')
            location.reload();
        });
    }

    function checkAPICredentials() {
        let api1 = document.getElementById('public_key');
        let api2 = document.getElementById('secret_key');

        console.log(api1.value, api2.value)

        // We can also pass the url value separately from ajaxurl for front end AJAX implementations
        jQuery.post(ajax_object.ajax_url, {
            action: 'validate-api-credentials',
            api1: api1.value,
            api2: api2.value
        })
            .done(function(response){
                let element = document.querySelector('#edo-ajax-checkapicred-btn span')
                let button_wiggle = document.getElementById('edo-ajax-checkapicred-btn')
                element.classList.remove('dashicons-privacy', 'dashicons-yes-alt','dashicons-dismiss')
                button_wiggle.classList.remove('edbs-wiggle')

                if ( ! response.data.success) {
                    element.classList.add('dashicons-dismiss')
                    element.style.color = 'red';
                    api1.style.border = '2px solid red';
                    api2.style.border = '2px solid red';
                    return;
                }

                element.classList.add('dashicons-yes-alt')
                element.style.color = 'green';
                api1.style.border = '2px solid green';
                api2.style.border = '2px solid green';
            });
    }

    function flushCache(event) {
        event.preventDefault();
        let overlayLoader = document.getElementById('edbs_overlay');
        let cachingMinutes = document.getElementById('edoobox_cache_time_in_s');
        let nonce = document.getElementById('caching_meta_box_nonce');
        overlayLoader.classList.remove('hidden');

        setTimeout(function () {
            let data = {
                action: 'edo_ajax_flushcache_action',
                edoobox_cache_time_in_s: cachingMinutes?.value || 0,
                caching_meta_box_nonce: nonce?.value
            };

            // We can also pass the url value separately from ajaxurl for front end AJAX implementations
            jQuery.post(ajax_object.ajax_url, data)
                .done(function (response) {
                    setTimeout(() => {
                        overlayLoader.classList.remove('hidden');
                        overlayLoader.classList.add('hidden');
                    }, 200);
                })
                .fail(function (xhr, status, error) {
                    // error handling
                    console.log(error);
                });
        }, 0)
    }

});