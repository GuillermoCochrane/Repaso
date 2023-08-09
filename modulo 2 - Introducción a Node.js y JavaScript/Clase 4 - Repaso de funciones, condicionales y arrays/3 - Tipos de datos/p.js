/* Una variable de cada tipo

Para este ejercicio, debemos declarar 4 variables de tipo let con los nombres: verdadero, nada, texto y numero. A cada una de ellas, tendremos que asignarle el tipo de dato que sugiera su nombre, según corresponda.
 */

let verdadero = true;
let nada = null ;
let texto = "hola";
let numero = 13;

console.log(verdadero);
console.log(nada);
console.log(texto);
console.log(numero);

/* ------------------------------------------------------------------------------------------------------------------------------------------

Usando Number()
Ya vimos cómo declarar una variable y asignarle el tipo de dato que queramos como valor. Ahora, creemos 3 variables numéricas, pero esta vez haciendo uso de la función nativa Number().

Una función nativa es una función que ya existe en el lenguaje de JavaScript, no tenemos que definirla, solo ejecutarla en el momento en que la necesitemos. En el caso de la función Number(),  esta espera que le pasemos un parámetro dentro de los paréntesis para trasformar el dato que le hayamos pasado, en un tipo de dato numérico. Por ejemplo:

var unNuevoNumero = Number('50');
// La función hará que solo se tome el valor 50 como dato numérico (cuando se lo pasamos como parámetro 
era un string) y lo va a dejar almacenado en la variable unNuevoNumero


IMPORTANTE: Si utilizamos la función Number() y como parámetro le pasamos un dato que no puede convertirse en número —como por ejemplo el string "hola"—, nos va a devolver Nan. Esto es un valor con el cual no podemos operar como si fuese un número (Not a Number).

Sabiendo esto, creemos tres variables utilizando la función Number(), las mismas se deberán llamar positivo, negativo y decimal. Cada una de ellas deberá almacenar un número que se corresponda con su nombre. En la variable positivo, almacenar un número positivo; en la variable  negativo, almacenar un número negativo; y en la variable decimal, almacenar un número decimal.
 */

let positivo = Number('43') ;
let negativo = Number('-43') ;
let decimal = Number('0.43') ;

console.log(positivo);
console.log(negativo);
console.log(decimal);

/* ------------------------------------------------------------------------------------------------------------------------------------------

Usando parseInt()
Una buena forma de aprender a usar una función nativa es pasarle distintos tipos de datos y ver qué pasa en cada caso. Vamos a hacer uso de esa práctica.

En este caso vamos a utilizar otra función nativa llamada parseInt(). Esta nos devuelve el valor entero de un dato que le pasemos como parámetro, siempre y cuando el mismo se pueda operar como dato numérico. Por ejemplo:

var valorEntero = parseInt('167.64');
// La función hará que solo se tome el valor 167 y lo va a dejar almacenado en la variable valorEntero.


IMPORTANTE: Esta función no redondea, ¡solo devuelve el valor entero del número! 

Ahora sí, probemos:

Tenemos una variable ya declarada llamada nan a la cual queremos asignarle, como valor, la función parseInt() y, como parámetro, darle un dato que haga que la misma no pueda operar con el valor dado, es decir, que nos devuelva el valor NaN.
Además, tenemos una variable ya declarada llamada correcto, a la cual queremos asignarle, como valor, la función parseInt() y, como parámetro, darle un dato que haga que la misma sí pueda operar. */

const nan = parseInt("casa");
const correcto = parseInt('28.28');

console.log(nan);
console.log(correcto);