/* Ya vimos los operadores básicos matemáticos +, -, / y *

Ahora podemos usar las funciones para hacer las cuentas mas fáciles.

function sumar(numero1, numero2) {
    return numero1 + numero2;
}
Escribí la función multiplicar que tome dos parámetros, los multiplique y retorne su valor.


------------------------------------------------------------------------------------------------------------------------------------------------------- */

// this file is read only, you cannot write it
function multiplicar (numero1, numero2) {
    return numero1 * numero2;
}

let n1 = 6;
let n2 = 9;

console.log("La multiplicacion de " + n1 + " por " + n2 + " es: " + multiplicar(n1,n2));