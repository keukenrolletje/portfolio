'use strict';

var App = angular.module('publicApp');
App.controller('workdetailCtrl', ['$rootScope', '$scope', '$routeParams', '$http',  function ($rootScope, $scope, $routeParams, $http) {


	$http.get('portfolio/' + $routeParams.id + '.json')
       .then(function(res){
          $scope.work = res.data;     
         $rootScope.exp = $scope.work.tag;
    });

  }])
.directive('html', [ function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.html(attrs.html);
    }
  };
}])
;
