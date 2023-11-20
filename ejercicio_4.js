let cadenasConcatenadas = "";
const pt = require("prompt-sync")({sigint: true});
while (true) {
    // Pedir al usuario que introduzca una cadena o "cancelar"
    let input = pt("Introduce una cadena de texto o escribe 'cancelar' para finalizar: ==>");

    // Salir del bucle si se introduce "cancelar"
    if (input.toLowerCase() === "cancelar") {
        break;
    }

    // Concatenar la cadena a las anteriores
    cadenasConcatenadas += input + "-";
}

// Eliminar el último guión de la cadena final
cadenasConcatenadas = cadenasConcatenadas.slice(0, -1);

// Mostrar todas las cadenas concatenadas al usuario
console.log("Cadenas concatenadas: " + cadenasConcatenadas);
