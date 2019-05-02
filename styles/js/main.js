function toggleNav() {
    if ($(".sidebar").width() > 0) {
        $(".sidebar").width(0);
    } else {
        $(".sidebar").width(150);
    }
}

$(function(){
    //change navbar on scroll
    $(document).scroll(function () {
        var $nav = $(".nav");
        $nav.toggleClass('nav--scrolled', $(this).scrollTop() > $nav.height());
    });
});