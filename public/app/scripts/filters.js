'use strict';

angular.module('appFilters', []).filter('checkmark', function(){
	return function(input){
		return input ? '\u2713' : '\u2718';
	};
});