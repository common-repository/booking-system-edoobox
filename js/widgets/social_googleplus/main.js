export default function () {
    var userLang = navigator.language || navigator.userLanguage;
    
    var lang = 'de-DE';
    switch (userLang.split('-')[0]) {
        case 'de':
            lang = 'de-DE';
            break;
        case 'en':
            lang = 'en-US';
            break;
        case 'fr':
            lang = 'fr-FR';
            break;
    }
    
    window.___gcfg = { lang };
    
    (function () {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    })();
}