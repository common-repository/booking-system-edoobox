export default function utable($) {
    const tableElement: HTMLElement = document.querySelector(".utable1");
    const isResponsive: boolean = tableElement?.dataset?.responsive === "1";
    if (isResponsive) makeTableResponsive($);
}

export function utableclick($) {
    const tableRows: NodeList = document.querySelectorAll(".utable1 tbody tr.angebot_row:not(.btn)");
    tableRows.forEach((element: HTMLElement) => element.addEventListener("click", function () {
        const openDescriptions: NodeList = document.querySelectorAll(".utable1 tbody tr.wgd_tableview_beschr");
        const tableRows: NodeList = document.querySelectorAll(".utable1 tbody tr.angebot_row, .utable1 tbody tr.wgd_tableview_beschr");
        openDescriptions.forEach((descriptionElement: HTMLElement) => descriptionElement.style.display = "none");
        tableRows.forEach((row: HTMLElement) => row.classList.remove("selected"));
        element.classList.remove("selected");
        element.classList.add("selected");
        this.nextElementSibling.classList.remove("selected");
        this.nextElementSibling.style.display = "table-row";
    }));
    utable($);
}

export function makeTableResponsive($): void {
    $('.utable1').stacktable({ headIndex: $('.utable1').data('nameindex') });
    $('.utable1.small-only .wgd_tableview_beschr').hide();
}