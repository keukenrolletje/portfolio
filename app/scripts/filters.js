/*'use strict';

// Setup the filter
angular.module('publicApp', []).filter('default', function() {

  // Create the return function and set the required parameter name to **input**
  return function(input) {

    var out = [];

    // Using the angular.forEach method, go through the array of data and perform the operation of figuring out if the language is statically or dynamically typed.
    angular.forEach(input, function(work) {

      if (work.tag === 'experiment') {
        out.push(work);
      }
      
    });

    return out;
  };

});*/