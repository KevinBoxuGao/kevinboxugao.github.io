import 'bootstrap';
import $ from "jquery";

import './index.scss';

$(document).ready(function() {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('nav--scroll', $(this).scrollTop() > $nav.height());
  });

  $('.open-overlay').click(function () {
    $('.nav-overlay').height('100%');
  });

  $('.close-overlay').click(function () {
    $('.nav-overlay').height('0');
  });

  $('.scroll-down-button').click(function() {
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 1000);
  });

})

