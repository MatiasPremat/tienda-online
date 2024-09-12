function validar(){
    var nombre = document.getElementById("nombre").value
    var email = document.getElementById("email").value
    var comentario = document.getElementById("comentario").value

    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))) {
        alert("Campo email incompleto o incorrecto");
        return false;
    }
    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert("Campo Nombre incompleto");
        return false
    }
    if (comentario == null || comentario.length == 0 || /^\s+$/.test(comentario)) {
        alert("Campo mensaje incompleto");
        return false
    }
}