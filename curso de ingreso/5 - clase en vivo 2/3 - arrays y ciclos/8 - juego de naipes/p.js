/* juego de naipes
¡Cerremos esta lección con un desafío!

Queremos escribir una función naipes, que dado un palo, devuelva una lista de strings, una por cada carta de ese palo según los naipes de la baraja española:

------

imagen 

------

naipes("espadas")
["1 de espadas", "2 de espadas", "3 de espadas" ..., "12 de espadas"]
Tomá en cuenta que los naipes de la baraja española incluyen todas las numeradas del 1 al 12, pero para éste ejercicio no queremos incluir los 8 y los 9.

Escribí la función naipes que reciba el tipo de palo como parámetro y devuelva un array como resultado.
------------------------------------------------
*/

function naipes(palo){

    let cartas = [];
    let frase = " ";
    
    for (let i = 1; i<13; i++){

        if ( i!=8 && i!=9){

            frase = i + " de " + palo;
            cartas.push(frase);

        }
    }
    return cartas;
}

console.log(naipes("Diamante"));