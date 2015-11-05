'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */

 var App = angular.module('publicApp');
App.controller('MainCtrl', [ '$scope', '$http', function ($scope, $http) {

  $http.get('portfolio/work.json')
       .then(function(res){
          $scope.grid = res.data;
          $scope.grid = res.data.splice(0, 3);       
        });
  }]);
