export function buildEventQueryParams({ start, end }) {
    return `&${ new URLSearchParams({
        start,
        end,
        permalink: ed_permalink // note: von Backend übergeben
    }).toString() }`;
}

export function getQuery(key) {
    return (new URL(document.URL)).searchParams.get(key);
}

export function pushQuery(key, value) {
    let currentUrl = new URL(document.URL);
    if (currentUrl.searchParams.get(key) === value) return;
    currentUrl.searchParams.set(key, value);
    window.history.pushState({}, '', currentUrl);
}