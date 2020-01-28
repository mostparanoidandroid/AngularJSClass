(function(){
'use strict';

angular.module('LunchCheck', [])
       .controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.items = "";
  $scope.lunchMessage = "";
  $scope.textBoxState = "";
  $scope.messageState = "";

  $scope.displayFoodMessage = function () {
    var itemArray = $scope.items.split(',');
    var actualItemCount = 0;
    var invalid = 0;

    $scope.lunchMessage = "";
    $scope.textBoxState = "";
    $scope.messageState = "";

    for (var i = 0; i < itemArray.length; i++)
    {
      if (itemArray[i] != '')
      {
        actualItemCount += 1;
      }
    }

    if (actualItemCount == 0) {
     $scope.lunchMessage = "Please enter data first";
     invalid = 1;
    }
    else if (actualItemCount > 3) {
       $scope.lunchMessage = "Too much!";
     }
    else {
      $scope.lunchMessage = "Enjoy!";
    }

    if (invalid == 1) {
      $scope.textBoxState = "invalidTextboxInput";
      $scope.messageState = "invalidMessage";
    }
    else {
      $scope.textBoxState = "validTextboxInput";
      $scope.messageState = "validMessage";
    }
  }
}

})();
