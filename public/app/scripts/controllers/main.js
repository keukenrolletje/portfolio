'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */

 var App = angular.module('publicApp');
App.controller('MainCtrl', [ '$scope', 'Name', function ($scope, Name) {
    /*$http.get('names/awesomeThings.json')
       .then(function(res){
          $scope.awesomeThings = res.data;
          $scope.awesomeThings = res.data.splice(0, 5);            
        });*/

    $scope.names = Name.query();

    $scope.welcome = {
    	'hello' : 'hi'
    };

    $scope.sortProp = 'age';

    $scope.isCollapsed = true;

  }]);
