'use strict';

var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('Name', ['$resource', function($resource){
	return $resource('names/:thingId.json', {}, {
		query: {method:'GET', params:{thingId:'names'}, isArray:true}
	});
}]);