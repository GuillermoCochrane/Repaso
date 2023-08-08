/* Declaración de funciones

Empecemos por lo básico:

Las funciones constan de 4 partes:

La palabra reservada function.
El nombre con el que vamos a llamar a la función:
function nombreFuncion
Los paréntesis donde van a ir los parámetros (si es que los necesita):
function nombreFuncion(parametro1,parametro2,...,parametroX)
Entre {} llaves el código que queremos que ejecute la función:
function nombreFuncion(parametro1,...,parametroX){ codigo }
Si queremos que una función nos devuelva un valor, vamos a necesitar la palabra clave return. Después de eso va a ir todo lo que queramos devolver.

Con las funciones, podemos hacer infinidad de cosas, pero vamos a empezar por algo fácil. Acá escribimos la función que dobla el valor del número que le pasemos.

function doble(numero) {
   return 2 * numero;
}
Como podemos ver, arriba declaramos una función con la palabra reservada function con el nombre doble. Entre los paréntesis, pusimos el parámetro numero el cual va a estar reemplazado por el número que le demos cuando lo llamemos. Para terminar, con la palabra return le decimos que lo que queremos es que devuelva 2 veces el número que le dimos.

Es muy importante comprender que ahora si bien estamos declarando una función no la estamos ejecutando.

Para ejecutar la función y que haga lo que queremos, hay que llamarla por el nombre y entre paréntesis ingresar el número que queremos que utilice.

Prueba declarando a la función triple, la cual triplique el valor pasado por parámetro y nos devuelva su resultado.	

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// this file is read only, you cannot write it

function triple(numero){
   return numero * 3;
};

let n1 = 7;

console.log("el triple de " + n1  + " es: " + triple(n1));