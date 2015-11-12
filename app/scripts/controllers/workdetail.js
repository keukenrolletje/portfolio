'use strict';

var App = angular.module('publicApp');
App.controller('workdetailCtrl', ['$rootScope', '$scope', '$routeParams', '$http', function ($rootScope, $scope, $routeParams, $http) {


	$http.get('portfolio/' + $routeParams.id + '.json')
       .then(function(res){
          $scope.work = res.data;  

          if(window.innerWidth > 1559){
            var str = JSON.stringify($scope.work.code);
            var stringified = str.replace('510', '1400');
            $scope.work.code = JSON.parse(stringified);
          }   
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
