// Funciones para el arrastrar y soltar
document.addEventListener('DOMContentLoaded', function() {
    const palabras = document.querySelectorAll('.palabra');
    const imagenes = document.querySelectorAll('.imagen');

    palabras.forEach(palabra => {
        palabra.addEventListener('dragstart', dragStart);
    });

    imagenes.forEach(imagen => {
        imagen.addEventListener('dragover', dragOver);
        imagen.addEventListener('drop', drop);
    });

    function dragStart(event) {
        event.dataTransfer.setData("text", event.target.id);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const palabraId = event.dataTransfer.getData("text");
        const palabraArrastrada = document.getElementById(palabraId);
        event.target.querySelector('.espacio-drop').appendChild(palabraArrastrada);
    }
});

// Función para comprobar respuestas
function comprobar() {
    const imagenes = document.querySelectorAll('.imagen');
    let resultado = '';

    imagenes.forEach(imagen => {
        const dropzone = imagen.querySelector('.espacio-drop');
        const palabra = dropzone.querySelector('.palabra');

        if (palabra) {
            resultado += `Imagen ${imagen.id.substr(-1)}: ${palabra.textContent}<br>`;
        } else {
            resultado += `Imagen ${imagen.id.substr(-1)}: Sin respuesta<br>`;
        }
    });

    document.getElementById('resultado').innerHTML = resultado;
}
// Funciones para el arrastrar y soltar
document.addEventListener('DOMContentLoaded', function() {
    const palabras = document.querySelectorAll('.palabra');
    const imagenes = document.querySelectorAll('.imagen');

    palabras.forEach(palabra => {
        palabra.addEventListener('dragstart', dragStart);
    });

    imagenes.forEach(imagen => {
        imagen.addEventListener('dragover', dragOver);
        imagen.addEventListener('drop', drop);
    });

    function dragStart(event) {
        event.dataTransfer.setData("text", event.target.id);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const palabraId = event.dataTransfer.getData("text");
        const palabraArrastrada = document.getElementById(palabraId);
        event.target.querySelector('.espacio-drop').appendChild(palabraArrastrada);
    }

    // Restaurar palabras si se sueltan fuera del área de destino
    document.addEventListener('dragend', function(event) {
        if (event.target.classList.contains('palabra') && !event.target.parentElement.classList.contains('espacio-drop')) {
            const opciones = document.querySelector('.opciones');
            opciones.appendChild(event.target);
        }
    });
});

// Función para comprobar respuestas
function comprobar() {
    const imagenes = document.querySelectorAll('.imagen');
    let resultado = '';

    imagenes.forEach(imagen => {
        const dropzone = imagen.querySelector('.espacio-drop');
        const palabra = dropzone.querySelector('.palabra');

        if (palabra) {
            resultado += `Imagen ${imagen.id.substr(-1)}: ${palabra.textContent}<br>`;
        } else {
            resultado += `Imagen ${imagen.id.substr(-1)}: Sin respuesta<br>`;
        }
    });

    document.getElementById('resultado').innerHTML = resultado;
}
