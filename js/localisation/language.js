export function getUserLanguage() {
    return {
        de: "de",
        en: "en",
        fr: "fr",
        es: "es",
        cs: "cs",
        cn: "zh"
    }[(navigator.language || navigator.userLanguage).split("-")[0]] || "de";
}

export function tg(textcode) {
    return document.getElementById(`ed_wp_${ textcode }`)?.innerText?.trim();
}