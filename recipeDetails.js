angular.module('myApp').controller('detailsctrl', 
	function($scope, detail, $routeParams){

$scope.recipeId = $routeParams.recipeId
$scope.ingredientLines = '';

detail($scope.recipeId).success(function(data){
  console.log(data);
  $scope.data = data;
})

$scope.recipeImg = function(data){
	var url = data.images
	return url
}
/// - format results in an image

});
/// - detailsctrl