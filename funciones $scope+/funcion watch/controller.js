let app = angular.module("watchApp", []);

app.controller("watchCtrl", function ($scope) {
  $scope.count = -1;

  $scope.$watch("txtval", function (newval, oldval) {
    $scope.count = $scope.count + 1;
  });
});
