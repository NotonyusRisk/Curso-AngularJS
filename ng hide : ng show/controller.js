let app = angular.module("MyFirstApp", []);

app.controller('FirstController', function($scope, $http) {
    $scope.posts = [];
    $scope.hide_show = true;
    $scope.textBtn = 'Show Information';
    
    $http({
        method: 'GET',
        url: 'https://api-generator.retool.com/Guzci3/data'
    }).then(function successCallback(response){
        console.log(response.data)
        $scope.posts = response.data
    })

    $scope.controlData = () => {
        if ($scope.hide_show){
            $scope.hide_show = false;
            $scope.textBtn = 'Hide Information';
        } else if (!$scope.hide_show) {
            $scope.hide_show = true;
            $scope.textBtn = 'Show informacion';
        }
    }
});
