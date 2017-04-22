$(function () {
    var okno = $(window);
    var menu = $('#main-nav');
    /*console.log(okno.scrollTop());*/

    /* Transparent scroll */

    if (okno.scrollTop() >= 100) {
        menu.addClass('scroll');
    }

    okno.scroll(function () {
        if (okno.scrollTop() >= 100) {
            menu.addClass('scroll');
        } else {
            menu.removeClass('scroll');
        }
    });
    /* Smooth scroll */

    $(document).on('click', 'a[href^="#"]', function (event) {
        
        event.preventDefault(); 
        var menuHeight = $('#main-nav').height();
        
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - menuHeight
        }, 500);
        /* a co jeśli zmienimy sobie wysokość menu w stylach? (google> get height)*/
    });
});
