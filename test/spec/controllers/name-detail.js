'use strict';

describe('namedetailCtrl', function(){

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

	/*important!! do beforeEach always*/
	beforeEach(module('publicApp'));



	var scope, $httpBackend, ctrl,
	xyzNameData = function(){
		return {
			name: 'Joke Gysen',
			images: ['images/joke.png', 'images/robot.png']
		};
	};

	beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET('names/joke-gysen.json').respond(xyzNameData());

		$routeParams.thingId = 'joke-gysen';
		scope = $rootScope.$new();
		ctrl = $controller('namedetailCtrl', {
			$scope: scope
		});
	}));

	it('should fetch name detail', function(){
		expect(scope.thing).toEqualData({});
		$httpBackend.flush();

		expect(scope.thing).toEqualData(xyzNameData());
	});  
}); 