'use strict';

var App = angular.module('publicApp');
App.controller('workCtrl', ['$rootScope', '$scope', '$routeParams', '$http', function ($rootScope, $scope, $routeParams, $http) {
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
		"name" : "experiments",
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
		    $scope.selectedIndex = $index;

		  };

		if($rootScope.exp === 'experiment'){
			$scope.exp = $rootScope.exp;
			$scope.selectedIndex = 2;
		}
		else{
			$scope.exp = '';
		}

		$scope.isdef = function(work){
		    return (work.tag === 'experiment');
		};
		console.log($(window).width());

  }]).directive('reset', ['$document', function($document) {
  return {
    restrict: 'A',
    link: function($rootScope) {
      $document.on('click', function() {
        $rootScope.exp = '';
        /*use apply to tell angular about the change and prevent clicking 2 times to change tag*/
        $rootScope.$apply();
      });
    }
  };
}])

 .directive('scrollLoad', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			$(element).visible(scope.$eval(attrs.scrollLoad));
		}
	};
}).directive('scroll', function($window){
	return function(){
		angular.element($window).bind("scroll", function() {
		var els = angular.element('.module');
			angular.forEach(els, function( el ){
			  var a = angular.element(el);
			  if(a.visible(true)){
			  	if(a.hasClass('work-left') && !a.hasClass('already-visible')){
			  		a.addClass('come-in-left');
			  	}
			  	if(a.hasClass('work-right') && !a.hasClass('already-visible')){
			  		a.addClass('come-in-right');
			  	}
			  }
			});
		});
	};
});