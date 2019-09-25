import 'bootstrap';
import $ from "jquery";

import './index.scss';

$(document).ready(function() {

  //navigation
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('nav--scroll', $(this).scrollTop() > $nav.height());
  });

  $('.open-overlay').click(function () {
    $('.nav__overlay').height('100%');
  });

  $('.close-overlay').click(function () {
    $('.nav__overlay').height('0');
  });

  //scroll link buttons
  $('.scroll-down-button').click(function() {
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 1000);
  });

})

