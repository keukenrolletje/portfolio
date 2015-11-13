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
    'ngRoute',
    'ngAria',
    'ngSanitize',
    'ui.bootstrap', 
    'appAnimations'
      ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Joke Gysen: Front-end developer'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        title: 'About Joke Gysen | Front-end developer'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'workCtrl',
        title: 'Portfolio Joke Gysen | Front-end developer'
      })
      .when('/portfolio/:id', {
        templateUrl: 'views/workdetail.html',
        controller: 'workdetailCtrl',
        title: '| Joke Gysen | Front-end developer'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl',
        title: 'Contact Joke Gysen | Front-end developer'
      })
      /*.otherwise({
        redirectTo:'/'
      })*/
      ;

      $locationProvider.html5Mode(true);
     // $location.Html5mode(true).hashbang("!");
  })
  .run(['$location', '$rootScope', '$routeParams', function($location, $rootScope, $routeParams){
    $rootScope.$on('$routeChangeSuccess', function(event, current){
      //$routeParams.id
      if(current.$$route.controller === 'workdetailCtrl'){
        $rootScope.title = $routeParams.id + ' ' + current.$$route.title;
      }
      else if(current.$$route){
        $rootScope.title = current.$$route.title;
      }
    });

  }])
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
  .directive('iestyles', function () {
    return {

      restrict: 'A',
      link: function(){
        // Browser with version  Detection
      navigator.sayswho= (function(){
          var ua= navigator.userAgent, tem;
          var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
          if(M && (tem= ua.match(/version\/([\.\d]+)/i))!== null){
            M[2]= tem[1];
          } 
          M= M[2];
          return M;
        })();

       //check for ie and apply ie specific styles
        var ua1 = window.navigator.userAgent;

        if (ua1.indexOf('Trident') > 0) {
          angular.element('body').addClass('ie');
        }
        else if(/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && navigator.sayswho < '7.9.9'){
          angular.element('body').addClass('saf');
        }
      }
    };
}).directive('outlineclick', function ($document) {
    return function () {
      $document.on('click', function(){
        angular.element('body').append('<style>:focus{outline:none;}</style>');
      });
    };
}).directive('outlinepress', function ($document) {
    return function () {
      $document.on('keypress keydown', function(){
        angular.element('body').append('<style>:focus{outline:2px solid #56b4d3;} a:focus .description-card, a:active .description-card{outline:2px solid #56b4d3;}  a:focus figure, a:focus .see-more{outline-offset: 10px; border:2px solid #56b4d3;} </style>');
      });
    };
})
;
