/* Factorial
Escribí una función factorial, la misma debe recibir un número y calcular el factorial del mismo.

El factorial de un número n es el resultado de multiplicar todos los números enteros positivos menores o iguales que n.

-----------------------------------------------------------------------------------------------------------------------------
 */
// this file is read only, you cannot write it

function factorial(n){
    let resultado = 1
    for (let i = 1; i <= n; i++){
        resultado = resultado * i
    };
    return resultado
};

let n = 5
console.log("El factorial de " + n + " es " + factorial(n))