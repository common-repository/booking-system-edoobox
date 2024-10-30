import { DateTime } from "luxon";
import { buildEventQueryParams, getQuery, pushQuery } from "../../router/router";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import luxon2Plugin from "@fullcalendar/luxon2";
import { getUserLanguage, tg } from "../../localisation/language";
import { getStatusInfoByBookingStatus } from "../../models/offer";

const state = {
    offers: {}
};


"dayGridMonth";
"timeGridWeek";
"timeGridDay";
"listWeek";

export const availableCalendarViews: Array<CalendarView> = [
    {
        keyEdoobox: "month",
        keyFullCalendar: "dayGridMonth"
    },
    {
        keyEdoobox: "agendaWeek",
        keyFullCalendar: "timeGridWeek"
    },
    {
        keyEdoobox: "agendaDay",
        keyFullCalendar: "timeGridDay"
    },
    {
        keyEdoobox: "listMonth",
        keyFullCalendar: "listWeek"
    },
];

export const calendarViewMap: object = {
    v1: availableCalendarViews[0].keyFullCalendar,
    v2: availableCalendarViews[1].keyFullCalendar,
    v3: availableCalendarViews[2].keyFullCalendar,
    v4: availableCalendarViews[3].keyFullCalendar
};

export default function ($) {
    var calendarElement = document.getElementById('calendar');
    var calendar = new Calendar(calendarElement, {
        allDaySlot: false,
        aspectRatio: 1.75,
        expandRows: true,
        plugins: [
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            luxon2Plugin
        ],
        buttonText: {
            today: tg('N88771')/*Heute*/,
            month: tg('N33644')/*Monat*/,
            week: tg('N17274')/*Woche*/,
            day: tg('N6351')/*Tag*/,
            list: tg('N91117')/*Liste*/
        },
        dayMaxEventRows: 4,
        headerToolbar: {
            start: 'prev,next today',
            center: 'title',
            end: getActiveCalendarViewsSetByAdmin().map((view: CalendarView) => view.keyFullCalendar).join(",")
        },
        editable: false,
        eventTimeFormat: 'HH:mm',
        firstDay: 1,
        initialDate: getInitialCalendarDate(),
        initialView: getInitialCalendarView(),
        locale: getUserLanguage(),
        moreLinkText: tg('N39246')/*Weitere*/,
        navLinks: true,
        slotLabelFormat: {
            hour: "2-digit",
            hour12: false,
            minute: "2-digit"
        },
        themeSystem: 'bootstrap3',
        weekends: !! +calendarElement.dataset.weekend ? true : false,
        allDayDidMount: updateCalendarUrlQueries,
        dayCellDidMount: updateCalendarUrlQueries,
        events: fetchEvents,
        eventDidMount: function (info) {
            var element = info.el;
            var offerId = info.event.extendedProps.offerid;
            var offer = state.offers[offerId];
            var {
                iconName,
                offerStatusText,
                secondButtonStatus,
                secondButtonText
            } = getStatusInfoByBookingStatus(offer.booking_status);
            var statusTemplate = $('<span class="offer_status glyphicon glyphicon-' + iconName + '" style="margin-right: 4px"></span>');

            $(element).find('.fc-daygrid-event-dot').replaceWith(statusTemplate);
            $(element).addClass('edevents_' + offerId);
            $(element).addClass('edevents');

            element.title = info.event.title;

            $(".edevents").popover({
                placement: 'top',
                trigger: "click",
                container: ".edoobox-plugin",
                content: function () {
                    var content = '<div style="max-width: 300px"><span class="close">&times;</span>';

                    //Wurde ein Bild übermittelt?
                    if (offer.image) {
                        content += '<div>';
                        content += '<div><img src="' + offer.image + '" class="img-rounded img-responsive"></div>';
                        content += '</div>';
                        content += '<div>';
                    } else {
                        content += '<div>';
                    }

                    content += '<dl class="dl-horizontal ed-cal-dl">';

                    //Gibt es eine Beschreibung?
                    if (offer.shortdescription.length > 4) {
                        content += '<dt><span class="glyphicon glyphicon-info-sign"></span></dt>' + '<dd>' + offer.shortdescription + '</dd>';
                    }

                    content += '<dt><span class="glyphicon glyphicon-calendar"></span></dt>';

                    if (DateTime.fromISO(offer.start_date).toFormat('LLLL d, yyyy') == DateTime.fromISO(offer.end_date).toFormat('LLLL d, yyyy')) {
                        content += '<dd>' + DateTime.fromISO(offer.start_date).toFormat('LLLL d, yyyy t') + ' – ' + DateTime.fromISO(offer.end_date).toFormat('HH:mm') + '</dd>';
                    } else {
                        content += '<dd>' + DateTime.fromISO(offer.start_date).toFormat('LLLL d, yyyy t') + ' – ' + DateTime.fromISO(offer.end_date).toFormat('LLLL d, yyyy t') + '</dd>';
                    }

                    content += '<dt><span class="offer_status glyphicon glyphicon-' + iconName + '"></span></dt>' + '<dd>' + offerStatusText + '</dd>' +

                        '</dl>';

                    content += '<div class="ed-cal-btns-grp"><a class="ed-cal-btn btn btn-info" href="' + offer.offer_details_url + '">' + tg('N3238')/*Details*/ + '</a>';

                    if (secondButtonText) {
                        content += '<a class="ed-cal-btn btn btn-' + secondButtonStatus + '" href="' + offer.booking_start_url + '">' + secondButtonText + '</a></div>';
                    }

                    content += '</div></div>';
                    return content;
                },
                html: true
            });

            $(".edevents").on('click', function () {
                $(".edevents").not(this).popover('hide');
            });

            $(".edevents").on("shown.bs.popover", function (e) {
                $(".close").on("click", function (e) {
                    $(".edoobox-plugin .popover").remove();
                });
            });

        },
        viewDidMount: updateCalendarUrlQueries
    });
    calendar.render();
}

export function dateIsValid(date: Date): boolean {
    return date instanceof Date && ! isNaN(date.getTime());
}

export function getInitialCalendarView(): string {
    return calendarViewMap[getQuery('edview')] ||
        getFullCalendarViewKeySetByAdmin() ||
        availableCalendarViews[0].keyFullCalendar;
}

export function getInitialCalendarDate(): Date {
    const dateFromShortcode: Date | undefined = getStartDateFromShortcode();
    const date: Date = dateFromShortcode || new Date(getQuery("edstart") || Date.now());
    return dateIsValid(date) ? date : new Date;
}

export function getQueryParamFromView(view: string): string {
    return Object.keys(calendarViewMap).find(key => calendarViewMap[key] === view);
}

export function getStartDateFromShortcode(): Date | undefined {
    const eventsUrl = calendarElement("#calendar")?.dataset?.events;
    const shortcodeDateAsString = new URLSearchParams(eventsUrl).get("edstart")?.split("?")[0];
    const shortcodeDate = new Date(shortcodeDateAsString);
    return dateIsValid(shortcodeDate) ? new Date(shortcodeDate) : undefined;
}

export function fetchEvents(info) {
    const queryParams = buildEventQueryParams({
        start: info.start.toISOString(),
        end: info.end.toISOString()
    });
    return fetch(calendarElement().dataset.events + queryParams)
        .then(response => response.json())
        .then(json => {
            state.offers = { ...(state.offers || {}), ...(json.offers || {}) };
            return Object.values(json.rsl)?.map(value => ({
                id: value.id,
                classNames: [value.id],
                title: json.offers[value['offerid']].name,
                start: value.start,
                end: value.end,
                borderColor: value.color,
                allDay: false,
                offerid: value['offerid']
            }));
        });
}

export function updateCalendarUrlQueries(view): void {
    const date: string = DateTime.fromJSDate(view.view.currentStart).toFormat("yyyy-LL-dd");
    const viewQueryParam: string = getQueryParamFromView(view.view.type);
    pushQuery("edstart", date);
    pushQuery("edview", viewQueryParam);
    document.querySelectorAll(".popover").forEach(element => element.remove());
}

function calendarElement(id: string = "#calendar"): HTMLElement | undefined {
    return document.querySelector(id);
}

function getActiveCalendarViewsSetByAdmin(): Array<CalendarView> {
    const availableViews: string = calendarElement()?.dataset?.views;
    return availableCalendarViews.filter(view => availableViews.includes(view.keyEdoobox));
}

function getFullCalendarViewKeySetByAdmin(): string {
    const edooboxViewKeySetByAdmin: string = calendarElement()?.dataset?.defaultview || "";
    return availableCalendarViews.find(view => view.keyEdoobox === edooboxViewKeySetByAdmin)?.keyFullCalendar || "";
}