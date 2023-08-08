/* Repetición variable
En ejercicios anteriores logramos hacer que se imprima por pantalla varias veces la palabra "Azul" de una manera mucho más eficiente y prolija gracias al for.

Ahora, muchas veces nos vamos a encontrar con que en vez de necesitar hacer algo una cantidad de veces constante, va a ser necesario que esto pueda variar.

Por ejemplo, podríamos hacer una función que imprima 5 veces azul y que esta los imprima usando el for. ¿Que pasaría si ahora tambien necesitamos que se imprima 4 veces? Para eso hoy en día necesitaríamos crear otra función. Como ven esto no escala, sin embargo con algunas cosas que vimos podemos darle una vuelta de rosca y hacer una función genérica que reciba cuantas veces queremos que se ejecute algo. Algo así como un imprimir varias veces "Azul" genérico.

Para esto tenemos que modificar el for. Si queremos repetir una instrucción 4 veces, podríamos escribir lo siguiente:

for( let i = 0 ; i < 4 ; i++ ){ 
        // Acá adentro escribo las instrucciones que quiero repetir
}
Para que el for sea dinámico y en vez de repetirse solo 4 veces pueda hacerlo x cantidad de veces solo hay que modificar el 4.

let x = 4 ;
for( let i = 0 ; i < x ; i++ ){ 
        // Acá adentro escribo las instrucciones que quiero repetir
}
Acá x es una variable numérica que en el caso de valer 4 sería el equivalente al anterior. El chiste es que ahora podemos asignarle distintos valores a la variable x. Una manera de obtener este valor sería si nos lo pasan como parametro de una función y adentro de la misma, usarla.

function repetirXVecesAlgo( cantidadDeVeces ){ 
    for( let i = 0 ; i < cantidadDeVeces ; i++ ){ 
        // Acá adentro escribo las instrucciones que quiero repetir
    }
}
Sabiendo esto escribí una función imprimirAzul, que toma como parámetro un valor numérico X e imprima "Azul" X cantidad de veces. IMPORTANTE te recordamos que "Azul" no es lo mismo que "azul" en este ejercicio debes utilizar "Azul".

Por ejemplo:

imprimirAzul(3);
// Imprime 3 veces la palabra Azul


---------------------------------------
 */
// this file is read only, you cannot write it

function imprimirAzul( cantidadDeVeces ){ 
    for( let i = 0 ; i < cantidadDeVeces ; i++ ){ 
        console.log("Azul")
    };
};

imprimirAzul(3);