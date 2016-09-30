angular.module('myApp')

.factory('detail', function ($http){
	return function(recipeId){
		return $http ({
			url: 'https://api.yummly.com/v1/api/recipe/' + recipeId,
			method: 'JSONP',
			params: {
				callback: 'JSON_CALLBACK', 
				_app_id : '9fb53b76', 
				_app_key: 'd2fd726c3304d520c0ede8036c93f010'
		 	}
		 })
	};		
 });