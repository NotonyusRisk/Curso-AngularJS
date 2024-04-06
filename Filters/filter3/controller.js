angular.module('mainModule', [])
.filter('removeHtml', function() {
    return function(texto) {
        return String(text).replace(/<[^>]+>/gm, '');
    }
})
.controller('FiltersController', function($scope){
    $scope.mi_html = {};
    $scope.mi_html.title = 'hola';
    $scope.mi_html.body = 'hola mundo';
    $scope.costo = 2;
})