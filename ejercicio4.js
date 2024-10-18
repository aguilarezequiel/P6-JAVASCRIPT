let numeroIngresado = prompt("Por favor, ingresa un número:");

if (numeroIngresado !== null && !isNaN(numeroIngresado)) {
    numeroIngresado = Number(numeroIngresado);

    if (numeroIngresado % 2 === 0) {
        console.log("El número " + numeroIngresado + " es par.");
    } else {
        console.log("El número " + numeroIngresado + " es impar.");
    }
} else {
    console.log("No ingresaste un número válido.");
}