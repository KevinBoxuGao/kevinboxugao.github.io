import 'bootstrap';
import $ from 'jquery';

import './index.scss';

$(document).ready(function() {
  //navigation
  $(document).scroll(function() {
    var $nav = $('.navbar');
    $nav.toggleClass('nav--scroll', $(this).scrollTop() > $nav.height());
  });

  $('.open-overlay').click(function() {
    $('.nav__overlay').css('height', '100%');
  });

  $('.close-overlay').click(function() {
    $('.nav__overlay').height('0');
  });

  //scroll link buttons
  $('.scroll-down-button').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#portfolio').offset().top
      },
      1000
    );
  });

  //portfolio filtering
  $('.filter').click(function() {
    $('.active').toggleClass('active');
    $(this).toggleClass('active');

    $('.project').css('display', 'none');
    $('.project')
      .filter($(this).attr('data-filter'))
      .css('display', 'block');

    //.css('display', 'block');
  });
});
