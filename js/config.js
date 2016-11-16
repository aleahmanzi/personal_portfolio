angular.module('myApp') 

 .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: './html/home.html',
        controller: 'scrollctrl'
    })
    .when('/about', {
        templateUrl: './html/about.html'
    })
    .when('/portfolio', {
        templateUrl: './html/portfolio.html'
    })
    .when('/contact', {
        templateUrl: './html/contact.html'
    })
    .when('/error', {
        template: '<p>page not found</p>'
    });
 }]); /// - config
