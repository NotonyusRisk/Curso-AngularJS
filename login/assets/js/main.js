let app = angular.module("mainModule", []);

app.controller("controllerRegister", [
  "$scope",
  function ($scope) {
    $scope.name = "";
    $scope.username = "";
    $scope.password = "";

    $scope.signin = () => {
      localStorage.setItem("name", $scope.name);
      localStorage.setItem("username", $scope.username);
      localStorage.setItem("password", $scope.password);
      console.log("guardado");
      $scope.name = "";
      $scope.username = "";
      $scope.password = "";
    };
  },
]);

app.controller("controllerLogin", [
  "$scope",
  function ($scope) {
    $scope.username = "";
    $scope.password = "";
    $scope.message = "";

    $scope.login = () => {
      let username = localStorage.getItem("username");
      let password = localStorage.getItem("password");

      if (($scope.username === username) & ($scope.password === password)) {
        $scope.message = "Bienvenido";
      } else {
        $scope.message = "Usuario o contraseña equivocados";
      }
    };
  },
]);
