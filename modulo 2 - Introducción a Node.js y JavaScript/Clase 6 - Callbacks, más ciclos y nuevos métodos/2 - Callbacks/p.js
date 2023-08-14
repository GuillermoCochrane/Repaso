/* Pasar un callback
Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.

La primera función se llamará doble. Esta recibirá un número y retornará el doble.

La segunda función se llamará triple. Esta recibirá un número y retornará el triple.

La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. Esta retornará el valor de aplicar dicha función al valor que recibió.

Ejemplo:

aplicarCallBack(2, doble); // 4
aplicarCallBack(4, triple); // 12
 */
let numero = 10
let doble = numero => numero*2;
let triple = numero => numero*3;
let aplicarCallBack = (numero, callback) => callback(numero);

console.log("------------------------------------");
console.log("ejercicio 1");
console.log("");

console.log("el doble de " + numero + " es " + aplicarCallBack(numero,doble));
console.log("el triple de " + numero + " es " + aplicarCallBack(numero,triple));
/* ---------------------------------------------------------------------------------------------------------------------------------

Hagamos una calculadora
Vamos a ver cómo podemos crear una función que nos sirva como calculadora. Empecemos con algo sencillo...

Creemos cuatro funciones que realicen las operaciones principales de una calculadora. Nuestro trabajo será definir la función suma, resta, multiplicacion y division. Cada una de ellas recibirá dos parámetros y deberá realizar la operación matemática según corresponda. Por ejemplo, la función suma deberá retornar la suma de ambos parámetros; la función resta, la resta de ambos parámetros, y así sucesivamente.
Ahora sí, con esas funciones ya definidas, creemos la función calculadora. Esta función recibirá dos parámetros numéricos y una función, que será nuestro callback.
 */

let numero1 = 5;
let suma = (numero1,numero2) => numero1 + numero2 ;
let resta = (numero1,numero2) => numero1 - numero2 ;
let multiplicacion = (numero1,numero2) => numero1 * numero2 ;
let division = (numero1,numero2) => numero1 / numero2 ;

let calculadora = (numero1, numero2, callback) => callback(numero,numero2);

console.log("------------------------------------");
console.log("ejercicio 2");
console.log("");

console.log("la suma de " + numero + " y " + numero1 +  " es " + calculadora(numero,numero1,suma));
console.log("la resta de " + numero + " y " + numero1 +  " es " + calculadora(numero,numero1,resta));
console.log("la multiplicacion de " + numero + " y " + numero1 +  " es " + calculadora(numero,numero1,multiplicacion));
console.log("la division de " + numero + " y " + numero1 +  " es " + calculadora(numero,numero1,division));

/* Pasar un callback reloaded
Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 

Para esto debemos completar la función procesar. Esta recibe dos parámetros:

1. El primer parámetro es un array.

2. El segundo parámetro que recibe es una función (al que solemos llamar callback).

La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada a un elemento del array pasado.

Dejamos unas funciones para comprender y probar con el ejemplo:
 */
/* 
let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]

let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
console.log(largoDeElmentos); // imprime [ 14, 13 ]
 */
let arrayUrl = ["www.google.com","www.yahoo.com","www.instagram.com"];
let agregarHttp = url => "http://" + url;
let mostrarEnConsola = dato => console.log(dato)

let procesar = (array,callback) => {
    let salida = [];
    for (let i=0;i<array.length;i++){
        salida[i] = callback(array[i])
    };
    return salida
};
console.log("------------------------------------");
console.log("ejercicio 3");
console.log("");

let procesado = procesar(arrayUrl,agregarHttp);
procesar(procesado,mostrarEnConsola);



