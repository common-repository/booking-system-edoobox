export default function () {
    window.fbAsyncInit = function () {
        FB.init({
            appId: '1945424902141041',
            cookie: true,
            xfbml: true,
            version: 'v2.11'
        });
    };
    var userLang = navigator.language || navigator.userLanguage;
    
    var lang = 'de_DE';
    switch (userLang.split('-')[0]) {
        case 'de':
            lang = 'de_DE';
            break;
        case 'en':
            lang = 'en_GB';
            break;
        case 'fr':
            lang = 'fr_FR';
            break;
        case 'es':
            lang = 'es_ES';
            break;
        case 'cs':
            lang = 'cs_CZ';
            break;
        case 'cn':
            lang = 'zh_CN';
            break;
    }
    
    
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/" + lang + "/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}