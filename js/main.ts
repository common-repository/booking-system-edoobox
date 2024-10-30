import "./types/window";
import widgets from "./widgets/main";
import { Settings } from "luxon";
import { getUserLanguage } from "./localisation/language.js";
import { initialise, sizeFrame } from "./iframe/iframe";
import { initialiseGoogleMaps } from "./widgets/google-maps/main";

Settings.defaultLocale = getUserLanguage();

if (typeof edooboxIFrameInitialized === "undefined") {
    var edooboxIFrameInitialized = false; // only allow one initialization
}

(function run($) {
    var edbsLastInterval = false;

    const iframe = {
        data: {
            id: "",
            autoh3: 0,
            interval1: 0,
            t2: 0
        },
        set: function (selector, url) {
            //Ist es eine ID oder eine Class?
            // Creates a new ID for the new iframe.
            iframe.data.id = 'ediframe' + Math.round(new Date().getTime());

            // Prepare the new iframe with given URL.
            var i_html = '<iframe id="' + iframe.data.id + '" src="' + url + '" seamless="seamless" style="width:100%; height:300px; border:0 none;" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allowtransparency="true"></iframe>';

            // Insert the new iframe before the current iframe.
            $(i_html).insertBefore(selector);

            // Hide the current iframe.
            $(selector).hide();

            // Add the '#edinframe' hash to the URL.
            window.location.hash = '#edinframe';

            // Check if the event onhashchange is available on the window object.
            if ('onhashchange' in window) {
                // If yes, add callback to onhashchange event.
                // Callback will fire every time the hash changes.
                // Callback: If the hash is not #edinframe, then remove
                // event listeners for the "message" event, that is defined
                // below this callback.
                window.onhashchange = function (a) {
                    // If the new hash is not '#edinframe', then..
                    if (window.location.hash != '#edinframe') {
                        // .. fetch the '#edinframe + timestamp' (new) iframe, that was defined above.
                        // See: iframe.data.id = 'ediframe' + Math.round(new Date().getTime());
                        $('#' + iframe.data.id).remove();

                        // Show the default (previously referred to as: 'current') iframe.
                        $(selector).show();

                        // Stop listening to the "message" event.
                        // Message event listener is defined below in this 'set' function.
                        try {
                            if (window.addEventListener) {
                                window.removeEventListener("message", iframe.iFrameListener, false);
                            } else {
                                window.detachEvent("onmessage", iframe.iFrameListener);
                            }
                        } catch (e) {
                        }
                    }
                };
            }

            // Add event listender for the "message" event and fire callback iFrameListener.
            try {
                if (window.addEventListener) {
                    window.addEventListener("message", iframe.iFrameListener, false);
                } else {
                    window.attachEvent("onmessage", iframe.iFrameListener);
                }
            } catch (e) {
            }

            // Select the "new" iframe (which is the registration form).
            var iframetmp = document.getElementById(iframe.data.id);
            // Wait for the iframe to load and then set the height withing 20 * 100ms intervals.
            iframetmp.onload = function () {
                iframe.data.interval1 = setInterval(function () {
                    if (iframe.data.t2 < 20) {
                        if ($("#" + iframe.data.id).length == 1) {
                            if (typeof iframetmp.attributes['seamless'] != 'undefined' && typeof iframetmp.contentWindow != null) {
                                iframetmp.contentWindow.postMessage(['getheight', 1, iframe.data.id], '*');
                                iframe.data.t2++;
                            }
                        }
                    } else {
                        iframe.data.t2 = 0;
                        clearInterval(iframe.data.interval1);
                        iframetmp.style.overflow = "auto";
                    }
                }, 100);
            };
        },
        iFrameListener: function (e) {
            var eventName = e.data[0], data = e.data[1];
            var iframetmp = document.getElementById(iframe.data.id);
            if (iframetmp != null) {
                switch (eventName) {
                    //GTM E-Commerce Events
                    case 'gtmedoobox':
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({ecommerce: null});
                        dataLayer.push(data);
                        return;
                    case 'setheight':
                        if (iframe.data.autoh3 == 0 || data > iframe.data.autoh3 + 30 || data < iframe.data.autoh3 - 100) {
                            iframetmp.style.height = (data + 50) + 'px';
                            iframe.data.autoh3 = data;
                        }
                        break;
                }
            }
            // execute once on each new page
            var currentInterval = e.currentTarget?.frames?.iframe?.data?.interval1;
            if (edbsLastInterval !== currentInterval) {
                // write a div with id $edbsAnchor above the iframe
                function edbs_anchor() {
                    var edbsAnchor = e.currentTarget?.frames?.iframe?.data?.id;

                    // jump to the iframe anchor
                    if (document.getElementById(edbsAnchor)) {
                        function jump(anchorId) {
                            let url = location.href;               //Save down the URL without hash.
                            location.href = "#" + anchorId;                 //Go to the target element.
                            history.replaceState(null, null, url);   //Don't like hashes. Changing it back.
                        }

                        jump(edbsAnchor);
                    }
                }

                edbs_anchor();
                edbsLastInterval = e.currentTarget?.frames?.iframe?.data?.interval1;
            }
        }
    };

    // Initialize the iframe after DOM is loaded.
    window.onload = function () {
        if (edooboxIFrameInitialized) return;
        edooboxIFrameInitialized = true;

        // Initialization adds an event listener to
        initialise(".edoobox-plugin", iframe.set);

        $('.edoobox-plugin .hidden').removeClass('hidden');
        // Alle Widget Funktionen ausführen
        $('.edoobox-plugin .edoobox-func').each(function () {
            // --- Replace all faulty thumbnail placeholders
            // --- "placeholderImageURL" is passed in Enqueue.php service as an array.
            if (Array.isArray(window.placeholderImageURL)) {
                var placeholderImages = document
                    .querySelectorAll(".thumbnail img[src*='placeholder_200x300.jpg']");
                for (var image of (window.placeholderImages || [])) {
                    if (image.src.includes("plugins/booking-system-edoobox")) return;
                    image.src = window.placeholderImageURL[0];
                }
            }

            const widgetFunction = this.dataset?.func;

            if (typeof widgets($, iframe)[widgetFunction] === "function") {
                widgets($, iframe)[widgetFunction]($(this));
            }
        });

        sizeFrame(iframe.data.id);
    };

    window.initialiseGoogleMaps = initialiseGoogleMaps;
})(window.jQuery);

