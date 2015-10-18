'use strict';

var appServices = angular.module('appServices', []);

appServices.factory('myService', [ function(){
var savedData = {};
 function set(data) {
   savedData = data;
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 };

}]);