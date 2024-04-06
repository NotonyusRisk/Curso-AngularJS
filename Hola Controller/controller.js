let app = angular.module("MyFirstApp", []);

app.controller("ControllerName", ['$scope', '$http', function(m, $http){
    m.nombre = 'Antonio';
    m.nuevoComentario = {};
    m.comentarios = [
        {
            comentario: 'Hola',
            username: 'Antonio123'
        },
        {
            comentario: 'hOLA',
            username: 'Manuel456'
        },
        {
            comentario: 'HoLa',
            username: 'Sara789'
        },
    ]
    m.agregarComentario = function (){
        m.comentarios.push(m.nuevoComentario);
        m.nuevoComentario = {};
    }
}])
