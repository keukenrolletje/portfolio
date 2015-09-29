'use strict';

var App = angular.module('publicApp');
App.controller('workdetailCtrl', [ '$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
	

	$http.get('portfolio/work.json')
       .then(function(res){
          $scope.workdetail = res.data;
          //$scope.works = res.data.splice(0, 5);       
        });

  }]);