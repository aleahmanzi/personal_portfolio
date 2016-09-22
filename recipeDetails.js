angular.module('myApp').controller('detailsctrl', 
	function($scope, detail, $routeParams){

$scope.recipeId = $routeParams.recipeId
$scope.ingredientLines = '';

detail($scope.recipeId).success(function(data){
  console.log(data);
  $scope.ingredientLines = data.ingredientLines;
})


});
/// - detailsctrl