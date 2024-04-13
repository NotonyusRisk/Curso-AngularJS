let app = angular.module('mainModule', []);

app.controller('firstController', function($scope) {
    $scope.todo = [];
    $scope.newActv = {};

    $scope.addActv = () => {
        $scope.todo.push($scope.newActv);
        console.log($scope.todo)
    }
});