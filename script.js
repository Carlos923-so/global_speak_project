let orden_correcto = ['is', 'is', 'are', 'are', 'is', 'is', 'is'];
let posDisponible = ["", "", "", "", "", "", ""];

function agregarPalabra() {
    let select = document.getElementById("palabras");
    let palabraSeleccionada = select.value;

    let posLibre = posDisponible.indexOf("");
    if (posLibre !== -1) {
        document.getElementById(posLibre).innerHTML = palabraSeleccionada;
        posDisponible[posLibre] = palabraSeleccionada;

        // Mostrar el botón de verificar si todas las posiciones están ocupadas
        if (!posDisponible.includes("")) {
            document.getElementById("comprobar").style.display = "block";
        }
    } else {
        alert("Todas las posiciones están ocupadas.");
    }
}

function comprobar() {
    let txtResultado = document.getElementById("resultado");
    let totalAciertos = 0;

    for (let i = 0; i < orden_correcto.length; i++) {
        if (orden_correcto[i] === posDisponible[i]) {
            document.getElementById(i).style.background = "#c0ff33";
            totalAciertos++;
        } else {
            document.getElementById(i).style.background = "#fb4b4b";
        }
    }

    if (totalAciertos === orden_correcto.length) {
        txtResultado.innerHTML = "¡Muy bien!";
    } else {
        txtResultado.innerHTML = "Existen errores.";
    }

    // Deshabilitar el botón de verificar después de comprobar las respuestas
    document.getElementById("comprobar").style.display = "none";
}
