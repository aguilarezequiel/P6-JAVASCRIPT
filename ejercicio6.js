let numero;

do {
  numero = prompt("Ingresa un número mayor a 100:");
} while (numero !== null && Number(numero) <= 100);

console.log("El número ingresado es: " + numero);
