function validar(){
    let esValido = true;
    let nombre = document.getElementById("nombre").value
    let email = document.getElementById("email").value
    let comentario = document.getElementById("comentario").value

    // Limpiar mensajes de error previos
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.remove());

    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
        showError('email', 'El campo Email está incompleto o incorrecto.');
        esValido = false;
    }
    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        showError('nombre', 'El campo Nombre está incompleto.');
        esValido = false;
    }
    if (comentario == null || comentario.length == 0 || /^\s+$/.test(comentario)) {
        showError('comentario', 'El campo Comentario está incompleto.');
        esValido = false;
    }

    if (esValido) {
        alert('¡Formulario enviado correctamente!');
        document.getElementById('email').value = '';
        document.getElementById('nombre').value = '';
        document.getElementById('comentario').value = '';
    }

    return esValido;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.style.marginTop = '5px';
    error.textContent = message;
    field.parentNode.appendChild(error);
}