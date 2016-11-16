var myApp = angular.module('myApp', []);
	myApp.controller('ctrl', function ($scope, $location, $http, $sce, $anchorScroll){

$scope.aleah = "hello there"      

		$scope.gotoAbout = function() {
      	console.log("hello");
        $location.hash('about');
        $anchorScroll();
      };

      $scope.meMe = function(){
      	console.log("hi there");
      }
 }); /// - ctrl
