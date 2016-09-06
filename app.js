var demo = angular.module('demo',['ngRoute']); 
    demo.config(['$routeProvider', function($routeProvider){
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







