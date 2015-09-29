'use strict';

var App = angular.module('publicApp');
App.controller('workCtrl', [ '$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
	$scope.tags = [
	{
		"name" : "all",
		"tag" : ""
	},
	{
		"name" : "work",
		"tag" : "work"
	},
	{
		"name" : "experiment",
		"tag" : "experiment"
	}
	];

	$http.get('portfolio/work.json')
       .then(function(res){
          $scope.works = res.data;
          //$scope.works = res.data.splice(0, 5);       
        });

       $scope.filters = { };

		$scope.selectedIndex = 0;
  
		  $scope.itemClicked = function ($index) {
		    console.log($index);
		    $scope.selectedIndex = $index;
		  };

  }]);
