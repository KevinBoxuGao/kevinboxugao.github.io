function openNav() {
    var nav = $(".navbar__menu");
    console.log(nav.hasClass('responsive'));
    if (nav.hasClass('responsive')) {
        nav.removeClass('responsive');
    }
    else {
        nav.addClass("responsive");
    }
}

$(function(){
    //change navbar on scroll
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});