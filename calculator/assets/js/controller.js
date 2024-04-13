let app = angular.module('mainModule', [])

app.controller('firstController', function ($scope, $http) {
    $scope.display = '0';
    $scope.primeraParte = '';
    $scope.operador = null;
    $scope.segundaParte = '';

    $scope.agregarNumero = (numero) => {
        if($scope.display === '0'){
            $scope.display = '';
        }
        $scope.display += numero;
    }

    $scope.agregarOperador = (operador) => {
        if ($scope.display !== ''){
            $scope.primeraParte = $scope.display;
            $scope.operador = operador;
            $scope.display = ''
        }
    }

    $scope.resultado = () => {
        if($scope.operador !== null && $scope.display !== ''){
            $scope.segundaParte = $scope.display;
        }
        
        let resultado;
        switch($scope.operador){
            case '+':
                resultado = parseFloat($scope.primeraParte) + parseFloat($scope.segundaParte);
                break;
            case '-':
                resultado = parseFloat($scope.primeraParte) - parseFloat($scope.segundaParte);
                break;
            case '*':
                resultado = parseFloat($scope.primeraParte) * parseFloat($scope.segundaParte);
                break;
            case '/':
                resultado = parseFloat($scope.primeraParte) / parseFloat($scope.segundaParte);
                break;
            case '^':
                resultado = parseFloat($scope.primeraParte) ** parseFloat($scope.segundaParte);
                break;
        }
        $scope.display = resultado.toString();
        $scope.primeraParte = resultado;
        $scope.operador = null;
        $scope.segundaParte = '';
    }

    $scope.borrarTodo = () => {
        $scope.display = '0';
        $scope.primeraParte = '';
        $scope.operador = null;
        $scope.segundaParte = '';
    }
})