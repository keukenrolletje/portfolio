'use strict';

var App = angular.module('publicApp');
App.controller('workCtrl', ['$rootScope', '$scope', '$routeParams', '$http', 'messages', function ($rootScope, $scope, $routeParams, $http, messages) {
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
        });

       $scope.filters = { };

		$scope.selectedIndex = 0;
  
		  $scope.itemClicked = function ($index) {
		    $scope.selectedIndex = $index;

		  };
		  $scope.filters = messages.tags;

		  if($scope.filters.tag === 'experiment'){
		  	$scope.selectedIndex = 2;
		  }
		  else if($scope.filters.tag === 'work'){
		  	$scope.selectedIndex = 1;
		  }

  }]).directive('reset', ['messages', function(messages) {
  return {
    restrict: 'A',
    link: function(scope) {
    	var el = angular.element('.work-filter');
      el.on('click', function() {
			messages.tags= scope.filters;
			scope.$apply();
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
})
 .directive('scroll', function($window){
	return function(){
		var els = angular.element('.module');

		angular.forEach(els, function( el) {
			  var a = angular.element(el);
			  if (a.visible(true)) {
			    a.addClass("already-visible"); 
			  } 
		});

		angular.element($window).bind("scroll", function() {
			
			 angular.forEach(els, function( el) {
			    var a = angular.element(el);
			    
			    if (a.visible(true) && a.hasClass('work-left') && !a.hasClass('already-visible')) {
			      a.addClass("come-in-left"); 
			    } 
			    if (a.visible(true) && a.hasClass('work-right') && !a.hasClass('already-visible')) {
			      a.addClass("come-in-right"); 
			    } 
			  });
		});
	};
});