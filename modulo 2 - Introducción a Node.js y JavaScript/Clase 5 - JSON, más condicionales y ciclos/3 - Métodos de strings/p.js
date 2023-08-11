/* Completar URL

Debemos crear una función llamada dominio que recibirá un string como "digitalhouse.com.ar" y su función será retornar: "http://www.digitalhouse.com.ar".
 */

function dominio(string){
    return "http://www." + string
};

let string = "digitalhouse.com.ar";
console.log(dominio(string));

/* ---------------------------------------

Contar los caracteres

Lo primero que necesitamos es declarar una variable llamada texto, asignándole como valor un texto (string), el que queramos. Luego, utilizando la propiedad length, tendremos que imprimir en consola el total de caracteres que contiene la frase.
 */

let texto = "Lo esencial es invisible a los ojos";
console.log(texto.length);

/* ---------------------------------------

Reemplazo fast fast

Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:

1. Un texto.

2. La palabra que vamos a buscar para reemplazar.

3. La palabra que vamos a usar para reemplazar.

La función deberá devolver el texto con la palabra reemplazada.

Ejemplo:

let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones) //'Este texto es buena onda'
 */

function reemplazoFastFast(texto,palabraABuscar,palabraParaReemplazar){
    return texto.replace(palabraABuscar,palabraParaReemplazar);
};

let reemplazo = "importante";
let palabra = "esencial";
console.log(reemplazoFastFast(texto,palabra,reemplazo));

/* ---------------------------------------

¿Están hablando de mí?

Para el siguiente ejercicio vamos a suponer que tenemos un texto que copiamos y queremos saber si el texto menciona una palabra en particular.
Para lograrlo, tendremos que crear una función llamada menciona, que recibirá dos parámetros: un texto — que es donde vamos a buscar — y una palabra — que es la que vamos a averiguar si se menciona en el texto —. La misma función retorna true en el caso de encontrar la palabra.

Ejemplo:

menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'); // true */

function menciona(texto,palabra){
    return texto.indexOf(palabra) != -1
}

console.log(menciona(texto,palabra));
console.log(menciona(texto,reemplazo));

/* ----------------------------------------

Solo el nombre

Teniendo como punto de partida la cadena de texto '¡Hola!, soy Carli', deberemos recortarla para poder obtener el nombre 'Carli' en una nueva variable llamada licenciada.

IMPORTANTE: Para la resolución tendremos que usar la función slice(). */

let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11,16);
console.log(licenciada);