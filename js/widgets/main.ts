import facebook from "./facebook/main";
import googlemap from "./google-maps/main";
import social_xing from "./social_xing/main";
import social_googleplus from "./social_googleplus/main";
import ucalendar from "./ucalendar/main";
import utable, { utableclick } from "./utable/main";
import alektionen from "./alektionen/main";
import { makeTableResponsive } from "./utable/main";
import sameHeight from "./sameHeight/sameHeight";

export default function ($, iframe) {
    return {
        //Lektionen Übersicht
        alektionen: () => alektionen($, iframe),
        facebook,
        googlemap,
        sameHeight: () => sameHeight($),
        social_xing,
        social_googleplus,
        ucalendar: () => ucalendar($),
        utable: () => utable($),
        utableclick: () => utableclick($)
    };
}