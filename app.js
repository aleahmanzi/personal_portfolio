var myApp = angular.module('myApp',['ngRoute']); 

 myApp.factory('search', function ($http){
	return function(){
		return $http ({
			url: 'http://api.yummly.com/v1/api/recipes?_app_id=9fb53b76&_app_key=d2fd726c3304d520c0ede8036c93f010&maxResult=50&q=' + term,
			method: 'JSONP',
			params: {callback: 'JSON_CALLBACK'}
		});
	}		
 })

 .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: './home.html',
        controller: 'homectrl'
    })
    .when('/myrecipes', {
        templateUrl: './myrecipes.html',
        controller: 'recipesctrl'
    })
    .when('/search', {
        templateUrl: './search.html',
        controller: 'searchctrl'
    })
    .when('/error', {
        template: '<p>page not found</p>'
    });
 }]); /// - config







