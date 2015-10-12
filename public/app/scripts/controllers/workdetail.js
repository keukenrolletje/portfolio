'use strict';

var App = angular.module('publicApp');
App.controller('workdetailCtrl', [ '$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {


	$http.get('portfolio/' + $routeParams.id + '.json')
       .then(function(res){
          $scope.work = res.data;
          //$scope.works = res.data.splice(0, 5);       
        });

  }]);