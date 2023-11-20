let sumaTotal = 0;
const pt = require("prompt-sync")({sigint: true});
while (true) {
    
    // Pedir al usuario que introduzca un número o "cancelar"
    let input = pt("Introduce un número o escribe 'cancelar' para finalizar:");

    // Salir del bucle si se introduce "cancelar"
    if (input.toLowerCase() === "cancelar") {
        break;
    }

    // Convertir la entrada a un número
    let numero = parseFloat(input);

    // Verificar si la entrada es un número válido
    if (isNaN(numero)) {
        console.log("No entendido. Por favor, introduce un número válido.");
    } else {
        // Sumar el número a la suma total
        sumaTotal += numero;
    }
}

// Mostrar la suma total al usuario
console.log("La suma total de los números introducidos es: " + sumaTotal);



