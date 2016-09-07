angular.module('myApp').controller('searchctrl', 
	function($scope, search){

  $scope.recipeList = [];
  $scope.matches = [];
  /// - default values

   $scope.search = function(){
    console.log($scope.term);
     search($scope.term).success(function(result){
      console.log(result);
      $scope.matches = result.matches;
     })
   };

});



/// - searchctrl