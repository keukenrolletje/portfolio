'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */

 var App = angular.module('publicApp');
App.controller('quotesCtrl', [ '$scope', '$http', function ($scope, $http) {

  $http.get('portfolio/quotes.json')
       .then(function(res){
          var quotes = res.data;
          $scope.quote = quotes[Math.floor(Math.random()*quotes.length)];
        });
  }]);
