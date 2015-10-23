'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */

angular
  .module('publicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap', 
    'appAnimations', 
    'duParallax',
    'duScroll'
      ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'workCtrl'
      })
      .when('/portfolio/:id', {
        templateUrl: 'views/workdetail.html',
        controller: 'workdetailCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      })
      /*.otherwise({
        redirectTo:'/'
      })*/
      ;

     // $locationProvider.html5Mode(true);
     // $location.Html5mode(true).hashbang("!");
  })
  .directive('randomnumber', function(){
    return {
      restrict: 'A',
      link: function($rootScope){
       var navbutton = angular.element('.menu-btn');
       navbutton.bind('click', function(){
          $rootScope.random = [];
          for (var i=0; i<7; i++) {
            var randomNbr = Math.random() * (0.7 - 0.1) + 0.1;
            $rootScope.random.push(randomNbr);
          }
       });
      }
  };
})
  ;
