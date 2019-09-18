import './index.scss';
import 'bootstrap';
import {$,jQuery} from 'jquery';

window.$ = $;
window.jQuery = jQuery;

//collapse navbar on scoll

// Initial scroll position
var scrollState = 0;

// Primary scroll event function
var scrollDetect = function(home, down, up) {
  // Current scroll position
  var currentScroll = scrollTop();
  if (scrollTop() === 0) {
    home();
  } else if (currentScroll > scrollState) {
    down();
  } else {
    up();
  }
  // Set previous scroll position
  scrollState = scrollTop();
};

var scrollTop = function() {
	return window.scrollY;
};

function downAction() {
  $('navbar-collapse').removeClass('open');
  $('navbar-collapse').addClass('collapse');
}

function upAction() {
  $('navbar-collapse').removeClass('collapse');
  $('navbar-collapse').addClass('open');
}

$(document).ready(function() {
  window.addEventListener("scroll", function() {
    scrollDetect(homeAction, downAction, upAction);
  });
})
