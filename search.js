angular.module('myApp').controller('searchctrl', 
	function($scope, search){

  $scope.recipeList = [];
  $scope.matches = [];
  $scope.term = {
   ingredient1: '',
   ingredient2: '',
   ingredient3: '',
   ingredient4: '',
   ingredient5: ''
   };
  $scope.block = {
   exclude1: '',
   exclude2: '',
   exclude3: '',
   exclude4: '',
   exclude5: ''
   };
  $scope.meal = {
   option1: '',
   option2: '',
   option3: '',
   option4: '',
   option5: ''
   };
  /// - default values
  
 $scope.search = function(){
    console.log($scope.block);
     search($scope.block).success(function(result){
      console.log(result);
      $scope.matches = result.matches;
     })
  };






});


/// - searchctrl