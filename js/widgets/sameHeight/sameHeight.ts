export default function ($) {
    let tallest: number = 0;
    $('.sameheight').each(function () {
        var thisHeight = $(this).innerHeight();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    $('.sameheight').find('.thumbnail').css('min-height', tallest + 'px');
}