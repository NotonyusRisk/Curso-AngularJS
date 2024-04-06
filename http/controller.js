let app = angular.module("MyFirstApp", []);

app.controller('PeticionesHTTP', function($scope, $http) {
    $scope.posts = [];
    $scope.newPost = {};
    $http({
        method: 'GET',
        url: 'https://api-generator.retool.com/Guzci3/data'
    }).then(function successCallback(response){
        console.log(response.data)
        $scope.posts = response.data
    })

    $scope.refresh = () => {
        $http({
            method: 'GET',
            url: 'https://api-generator.retool.com/Guzci3/data'
        }).then(function successCallback(response){
            console.log(response.data)
            $scope.posts = response.data
        })
    }

    $scope.addPost = () => {
        $http({
            url: 'https://api-generator.retool.com/Guzci3/data',
            method: 'POST',
            data: {
                names: $scope.newPost.names,
                accounts: $scope.newPost.accounts
            }
        }).then(function successCallback(response){
            $scope.newPost={};
            $scope.refresh();
        })
    }
});
