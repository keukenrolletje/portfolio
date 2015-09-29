'use strict';

var appAnimations = angular.module('appAnimations', ['ngAnimate']);
//var menu = $('.menu-open');

appAnimations.animation('.menu-btn', function() {

  var animateOpen = function(element, className, done) {
    if(className !== 'menu-open') {
      return;
    }
    element.css({
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block'
    });

    jQuery(element).animate({
      top: 500
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  };

  var animateDown = function(element, className, done) {
    if(className !== 'active') {
      return;
    }
    element.css({
      position: 'absolute',
      left: 0,
      top: 0
    });

    jQuery(element).animate({
      top: -500
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  };

  return {
    addClass: animateOpen,
    removeClass: animateDown
  };
});