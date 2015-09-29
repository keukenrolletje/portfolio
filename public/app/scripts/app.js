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
    'appFilters',
    'appServices',
    'appAnimations'
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
      .when('/portfolio/:workId', {
        templateUrl: 'views/workdetail.html',
        controller: 'workdetailCtrl'
      })
      /*.otherwise({
        redirectTo:'/'
      })*/
      ;
    

     // $locationProvider.html5Mode(true);
  });
