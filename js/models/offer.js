import { tg } from "../localisation/language.js";

export function getStatusInfoByBookingStatus(bookingStatus) {
    return {
        normal: {
            iconName: 'ok-circle text-primary',
            offerStatusText: tg('N7520')/*Für Anmeldungen geöffnet*/,
            secondButtonText: tg('N4929')/*Jetzt anmelden*/,
            secondButtonStatus: 'success'
        },
        guaranteed: {
            iconName: 'ok-sign text-success',
            offerStatusText: tg('N3832')/*Garantierte Durchführung*/,
            secondButtonText: tg('N4929')/*Jetzt anmelden*/,
            secondButtonStatus: 'success'
        },
        alreadystarted: {
            iconName: 'exclamation-sign text-warning',
            offerStatusText: tg('N850')/*Gestartet, Einstieg noch möglich*/,
            secondButtonText: tg('N4929')/*Jetzt anmelden*/,
            secondButtonStatus: 'success'
        },
        waitinglist: {
            iconName: 'hourglass text-info',
            offerStatusText: tg('N13104')/*Ausgebucht,  Eintrag in Warteliste möglich*/,
            secondButtonText: tg('N63385')/*Auf Warteliste eintragen*/,
            secondButtonStatus: 'warning'
        },
        full: {
            iconName: 'ban-circle text-danger',
            offerStatusText: tg('N72446')/*Ausgebucht / Anmeldefrist abgelaufen*/
        }
    }[bookingStatus];
}