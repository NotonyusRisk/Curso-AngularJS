var app = angular.module("applyApp", []);

app.controller("applyCtrl", function ($scope) {
  $scope.currentDateTime = new Date();

  $scope.updatedtime = function () {
    $scope.currentDateTime = new Date();
  };

  //Added an event listener.

  var event = document.getElementById("btnapply");

  event.addEventListener("click", function () {
    //The $apply method is use to update date time on rootScope forcefully.
    $scope.$apply(function () {
      //get dateTime
      $scope.currentDateTime = new Date();
    });
  });
});
