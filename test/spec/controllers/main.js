'use strict';

describe('Controller: MainCtrl', function () {

 /*beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });*/
beforeEach(function(){
        jasmine.addMatchers({
            toEqualData: function() { 
                return { 
                    compare: function(actual, expected) { 
                        return { 
                            pass: angular.equals(actual, expected)
                        };
                    } 
                };
            } 
        });
    });


  // load the controller's module
  beforeEach(module('publicApp'));
  beforeEach(module('appServices'));


  var MainCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('names/names.json').respond([{name: 'Joke Gysen'}, {name: 'Laurent Van Winckel'}]);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  })); 

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(4);
  });*/
 /* it('should attach a list of welcome to the scope', function () {
    expect(scope.welcome.hello).toEqual('hi');
  });*/


  /*verify that model doesn't exist on scope before response is received*/
  it('should create a names model with 2 names fetched from xhr', function(){
    expect(scope.names).toEqualData([]);
    $httpBackend.flush(); 

    expect(scope.names).toEqualData([{name: 'Joke Gysen'}, {name: 'Laurent Van Winckel'}]);
  });

  it('should set the default value of sortProp model', function(){
    expect(scope.sortProp).toBe('age');
  });

});
 