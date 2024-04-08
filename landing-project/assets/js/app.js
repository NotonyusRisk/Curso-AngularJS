let app = angular.module('mainModule', []);

app.controller('mainController', function($scope) {
    $scope.agregar = () => {
        return 'agregar'
    }

    $scope.eliminar = () => {
        return 'eliminar'
    }
})