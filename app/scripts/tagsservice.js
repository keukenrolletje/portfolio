'use strict';
/*
* Use this service to remember tags when changing views
* In the controller save the clicked tags in messages.tags.tag
* Because controllers remove all data when the page is reloaded
*/
var App = angular.module('publicApp');
App.factory('messages',
    function() {

    	  var service = {
    	  	tags : {
    	  		tag: ''
    	  	}
    	  };

		  return service;
    }
);