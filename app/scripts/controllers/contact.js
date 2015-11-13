'use strict';

angular.module('publicApp')
  .controller('contactCtrl', [ '$scope', function ($scope) {
     $scope.master = {};

  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  };
  }])
  ;