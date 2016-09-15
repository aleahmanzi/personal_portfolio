angular.module('myApp').controller('searchctrl', 
	function($scope, search){

  $scope.recipeList = [];
  $scope.matches = [];
  $scope.term = [{}]
  $scope.block = [{}]
  $scope.meal = [{}]

  /// - default values
  
 $scope.search = function(){
    console.log($scope.term, $scope.block);
     search($scope.term, $scope.block).success(function(result){
      console.log(result);
      $scope.matches = result.matches;
     })
  };

  $scope.photoUrl = function(match){
    var url = $scope.matches.imageUrlBySize.90
    console.log(url)
    return url
  }
/// - return matches for recipe search

$scope.addIngredient = function(){
  $scope.term.push({});
}

$scope.addBlock = function(){
  $scope.block.push({});
}
/// - + button for adding additional included/excluded ingredients



});


/// - searchctrl