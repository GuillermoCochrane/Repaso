/* Convertir a arrow function
Empecemos por practicar la sintaxis de una arrow function que no recibe parámetros.

Para este ejercicio vamos a dar tres funciones ya definidas. Nuestro trabajo será cambiarle la sintaxis y volver a escribirlas para que sean funciones de tipo arrow.
 */

/* function dameCinco(){
    return [1,2,3,4,5]
};

function multiplicarPorDos(){
    return 123 * 2
}

function mostrarNombre(){
    return "Mi nombre es Hernán"
} */

let dameCinco = () => [1,2,3,4,5];

let multiplicarPorDos = () => 123 * 2; 

let mostrarNombre = () => "Mi nombre es Hernán";

console.log(dameCinco());
console.log(multiplicarPorDos());
console.log(mostrarNombre());
/* -----------------------------------------------------------------------------------------------------------------------------------------------------

Arrow function con parámetro
Ahora nuestro trabajo será refactorizar la función saludar() que recibe un parámetro, es decir, escribirla con la sintaxis necesaria para convertirla en una arrow function.*/

/* 
function saludar(nombre){
    return 'Hola, ' + nombre + '!'
}
 */

let  saludar = nombre => 'Hola, ' + nombre + '!';

console.log(saludar("Juan"));
/* -----------------------------------------------------

Ahora probemos con más de uno
¡Vamos a pasar nuestra función declarada a una arrow!


Y sí, solo nos falta practicar la sintaxis de una arrow function que reciba más de un parámetro. Tomemos la función saludar(), que esta vez recibe un nombre y un apellido, y veamos de convertirla en una arrow function.
 */
/* 
function saluda(nombre,apellido){
    return 'Hola, ' + nombre + ' ' +  apellido + '!'
}
 */
let saluda = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';

console.log(saluda("Nicolas","Secco"));


