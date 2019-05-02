function toggleNav() {
    if ($(".menu").width() > 0) {
        $(".menu").width(0);
    } else {
        $(".menu").width(200);
    }


}

$(function(){
    //change navbar on scroll
    $(document).scroll(function () {
        var $nav = $(".nav");
        $nav.toggleClass('nav--scrolled', $(this).scrollTop() > $nav.height());
    });
});