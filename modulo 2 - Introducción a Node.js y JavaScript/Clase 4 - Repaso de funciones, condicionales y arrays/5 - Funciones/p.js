/* Declarar funciones

Empecemos a practicar cómo crear funciones.

Nuestra tarea es crear una función que se va a llamar ejemplo y tiene que devolver un String diciendo "hola, soy una función".
 */

function ejemplo (){
    return  "hola, soy una función"
};
console.log("");
console.log("--------------------------------------------------------------------");
console.log("ejercicio 1");
console.log("");
console.log(ejemplo())

/* -----------------------------------------------------------------------------------------------------------------------------------------
Declarando funciones en variables
¡Vamos a crear una función y asignarla a una variable!

Primero creamos una variable con el nombre  ejemplo y le asignamos como valor una función. La misma debe retornar un String que diga: "hola, soy una función expresada".
 */

let ejemplo1 = function(){
    return  "hola, soy una función expresada"
}
console.log("");
console.log("--------------------------------------------------------------------");
console.log("ejercicio 2");
console.log("");
console.log(ejemplo1());

/* -----------------------------------------------------------------------------------------------------------------------------------------
Funciones con parámetros
En el ejemplo que presentamos hay una función que ya está creada, pero sucede que cuando la invocamos, no funciona. Eso es porque la función necesita ciertos parámetros y no los tiene.

Debemos modificar el código que ya está escrito para agregarle los parámetros que la función necesita.
 */

function saludar(nombre,apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}
console.log("");
console.log("--------------------------------------------------------------------");
console.log("ejercicio 3");
console.log("");
console.log(saludar("Guillermo", "Cochrane"));

/* -----------------------------------------------------------------------------------------------------------------------------------------
Números pares

Hagamos una función más. La función debe llamarse esPar, debe recibir un número como parámetro, y nos devolverá un booleano (true/false) indicándonos si ese número es divisible por dos.

Tips: utilizar la consola para probar la función esPar y observar si devuelve el resultado esperado. Recordar utilizar el operador módulo.
 */

function esPar(n){
    return n % 2 == 0
}
console.log("");
console.log("--------------------------------------------------------------------");
console.log("ejercicio 4");
console.log("");
console.log(esPar(22));
console.log(esPar(13));

/* ------------------------------------------------------------------------------------------------------------------------------------------

Declarando tres funciones
¿Se acuerdan cuando declarábamos variables para poder utilizarlas luego? Bueno, aquí podemos hacer algo similar, pero en lugar de declarar variables (estructuras que contienen información) podemos declarar funciones (estructuras que procesan información).

Escribir las siguientes tres funciones:

anterior: recibe un número como parámetro y devuelve ese número menos uno.
triple: recibe un número como parámetro y devuelve el triple de ese número.
anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores, tendrá que devolver el número recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno).
Aclaración: este ejercicio conlleva cierta complejidad. Es normal que se tarde en llegar a la solución.
 */

function anterior(n){
    return n - 1
};
function triple(n){
    return n * 3
};
function anteriorDelTriple(n){
    return anterior(triple(n))
};
console.log("");
console.log("--------------------------------------------------------------------");
console.log("ejercicio 5");
console.log("");
console.log(anteriorDelTriple(8));
console.log("");
console.log("--------------------------------------------------------------------");