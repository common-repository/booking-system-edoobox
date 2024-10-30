import { sizeFrame } from "../../iframe/iframe";

export default function($, iframe){
    console.log('alektionen');
    if($('.alektionen').first().data('responsive') == '1'){
        $('.alektionen').stacktable();
        sizeFrame(iframe?.data?.id);
    }
}