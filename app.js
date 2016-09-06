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

demo.controller('homectrl', function($scope, $http){
  
  $scope.recipeList = [];

  /// - default values

 $scope.search = function(term) {
  console.log("working!")
  $http.get('http://api.yummly.com/v1/api/recipes?_app_id=9fb53b76&_app_key=d2fd726c3304d520c0ede8036c93f010&maxResult=50&q=' + term)
   .success(function(result){
   	 console.log(result);
   	 $scope.recipeList = result;
   });	
 }    
  /// - recipe search function

   
});

/// - homectrl


demo.controller('recipesctrl', function($scope){
});

/// - recipesctrl

demo.controller('searchctrl', function($scope){
});

/// - searchctrl



