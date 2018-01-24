!function(angular, undefined){

    'use strict';
	angular.module('busyIndicator', []).directive("busyIndicator", function($compile) {
	  return {
		restrict: 'E',
		replace: true,
		transclude: true,
		template: '<div class="progressDialog"><div>Please wait...</div></div>'
	  };
	});

}(window.angular);



