'use strict';

var App = angular.module('publicApp');
App.controller('workdetailCtrl', ['$rootScope', '$scope', '$routeParams', '$http', 'messages', function ($rootScope, $scope, $routeParams, $http, messages) {


	$http.get('portfolio/' + $routeParams.id + '.json')
       .then(function(res){
          $scope.work = res.data;     
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
