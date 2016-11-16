angular.module('myApp').controller('scrollctrl', 
	function($scope, detail, $routeParams, $window, $anchorScroll){

    $scope.scroll = function () {
        alert("hi");
        $location.hash('Hello');
	    $anchorScroll();
    };

	});
/// - scrollctrl