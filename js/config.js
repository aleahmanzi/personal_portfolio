angular.module('myApp') 

 .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: './html/home.html',
        controller: 'homectrl'
    })
    .when('/about', {
        templateUrl: './html/about.html',
        controller: 'about'
    })
    .when('/portfolio', {
        templateUrl: './html/portfolio.html',
        controller: 'portfolio'
    })
    .when('/contact', {
        templateUrl: './html/contact.html',
        controller: 'contact'
    })
    .when('/error', {
        template: '<p>page not found</p>'
    });
 }]); /// - config
