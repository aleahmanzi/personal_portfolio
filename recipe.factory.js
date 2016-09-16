angular.module('myApp')

.factory('search', function ($http){
	return function(recipeId){
		return $http ({
			url: 'http://api.yummly.com/v1/api/recipe/recipe-id?' + recipeId,
			method: 'JSONP',
			params: {callback: 'JSON_CALLBACK', 
			_app_id : '9fb53b76', 
			_app_key: 'd2fd726c3304d520c0ede8036c93f010',
		 	maxResult: '50',
		 	})
		 	}
		});
	}		
 })