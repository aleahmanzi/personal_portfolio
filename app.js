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
  $scope.appKey = "";
  $scope.appID = "";

  /// - default values

 $scope.search = function(term) {
  console.log("working!")
  $http ({ url: 'http://api.yummly.com/v1/api/recipes?appID&appKey&' + term, method: 'JSONP', params: {callback: 'JSON_CALLBACK'} })
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



