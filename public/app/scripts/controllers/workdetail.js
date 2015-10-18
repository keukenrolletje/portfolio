'use strict';

var App = angular.module('publicApp');
App.controller('workdetailCtrl', ['$rootScope', '$scope', '$routeParams', '$http', function ($rootScope, $scope, $routeParams, $http) {


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
.directive('iframecss', [function(){
	return{
		restrict: 'A',
		link: function(scope, element){
			element.contents().find('.embed-nav').css({
			    opacity: 1,
			    color: 'purple'
			});
		}
	};
}])
;
/*using directive to get html and script from json file. Html works with html-bind but script didn't work.*/