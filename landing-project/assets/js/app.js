let app = angular.module('mainModule', []);

app.controller('mainController', function($scope) {
    $scope.nota = [];
    $scope.newNota = '';
    $scope.agregar = () => {
        return 'agregar'
    }

    $scope.eliminar = () => {
        return 'eliminar'
    }

})