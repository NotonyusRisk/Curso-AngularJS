var app = angular.module("digestApp", []);

app.controller("digestCtrl", function ($scope) {
  $scope.currentDateTime = new Date();
  $scope.updatedtime = function () {
    $scope.currentDateTime = new Date();
  };

  //Added an event listener.
  var event = document.getElementById("btndigest");
  
  event.addEventListener("click", function () {
    //get dateTime
    $scope.currentDateTime = new Date();
    
    //The digest method is use to update date time forcefully.
    $scope.$digest();
  });
});
