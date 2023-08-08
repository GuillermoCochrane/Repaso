/* Ejectuando funciones
Hasta ahora estuvimos declarando funciones. Esto quiere decir que estuvimos escribiendo el código que van a ejecutar, pero nunca las ejecutamos, ¿o si?.

Veamos el siguiente ejemplo.

Acá declaramos la función doble.

function doble(numero) {
   return 2 * numero;
}
Con esto ahora contamos con la funcionalidad doble, una función que al ejecutarla (llamarla) va a devolvernos el doble del número que le pasemos.

Ahora podemos usarla de la siguiente forma:

doble(2);
Esto lo que va a hacer es efectivamente ejecutar el código que escribimos antes. Va a llamarse a la función doble y se le va a pasar por parámetro el valor 2. La función doble va a tomar este valor (2) y va a retornar ese valor * 2. Lo interesante es que ahora también podemos usar esta función y probar con los valores que querramos.

Si quisiéramos mostrar por consola (en Playground es la pantalla que está por debajo del botón de Ejecutar respuesta y que dice Terminal) ese resultado tendríamos que imprimirlo usando una función propia de JavaScript llamada console.log de la siguiente forma: 

console.log(doble(2));
Como ves, console.log

Como veras, ye te damos la función cuadruple que recibe un número y lo multiplica por 4. Ahora te pedimos que debajo de la declaración te encargue de ejecutar esa función, para ello necesitas darle un valor de reemplazo al parámetro, en este caso te pedimos que el valor sea 5. Además queremos que imprimas por consola el resultado de esa ejecución.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 */
// this file is read only, you cannot write it

function cuadruple(numero) {
   return numero*4;
}

let n1 = 43;

console.log("el cuadruple de " + n1  + " es: " + cuadruple(n1));

