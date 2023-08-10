let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');

let numeroA = 10;
let numeroB = 5;
let numeroC = 0;

console.log("la suma de " + numeroA + " y " + numeroB + " es " + sumar(numeroA,numeroB));
console.log("la resta de " + numeroA + " y " + numeroB + " es " + restar(numeroA,numeroB));
console.log("la multiplciacion de " + numeroA + " y " + numeroB + " es " + multiplicar(numeroA,numeroB));
console.log("la multiplicacion de " + numeroA + " y " + numeroC + " es " + multiplicar(numeroA,numeroC));
console.log("la division de " + numeroA + " y " + numeroB + " es " + dividir(numeroA,numeroB));
console.log("la division de " + numeroA + " y " + numeroC+ " da que " + dividir(numeroA,numeroC));