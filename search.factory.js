angular.module('myApp')

.factory('search', function ($http){
	return function(term, block){
		return $http ({
			url: 'http://api.yummly.com/v1/api/recipes',
			method: 'JSONP',
			params: {callback: 'JSON_CALLBACK', 
			_app_id : '9fb53b76', 
			_app_key: 'd2fd726c3304d520c0ede8036c93f010',
		 	maxResult: '50',
		 	excludedIngredient: block.map(function(e){
		 		return e.name
		 	}),
		 	allowedIngredient: term.map(function(e){
		 		return e.name
		 	})
		 	}
		});
	}		
 })
