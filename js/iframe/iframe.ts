export function initialise(selector, callback) {
    if ( ! openLinkInIFrameAllowed(".edoobox-plugin")) {
        return;
    }
    const allEdooboxLinks: NodeList = document.querySelectorAll(`${ selector } a[href*=".edoobox.com/"]`);
    allEdooboxLinks.forEach((element: HTMLElement) => element.addEventListener("click", function (e) {
        e.preventDefault();
        callback(element.closest(".edoobox-plugin"), element.getAttribute('href'));
    }));
}

export function openLinkInIFrameAllowed(selector: string): boolean {
    const pluginElement = document.querySelector(".edoobox-plugin") as HTMLElement | null;
    return pluginElement?.dataset?.noframe === "0";
}

export function sizeFrame(id: string) {
    if ( ! id) return;
    postMessage(id);
    setTimeout(() => postMessage(id), 50);
    setTimeout(() => postMessage(id), 150);
}

function postMessage(id: string): void {
    try {
        window.parent.postMessage(['setheight', document.body.clientHeight, id], '*');
    } catch (e) {
    }
}