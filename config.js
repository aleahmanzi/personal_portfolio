angular.module('myApp') 

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
    .when('/:recipeId', {
        templateUrl: './recipeDetails.html',
        controller: 'detailsctrl'
    })
    .when('/error', {
        template: '<p>page not found</p>'
    });
 }]); /// - config
