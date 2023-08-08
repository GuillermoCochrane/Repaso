/* La clave secreta
Resulta que en una sala de escape para finalizar el juego le plantean a un grupo un desafío que es descifrar un mensaje oculto que es la clave para salir de la habitación.

Nelson, que no es programador, pudo descifrar la lógica de ese mensaje y te pasa la data así lo pasas a código.

Con la ayuda de lo que sabe Nelson tenes que realizar una función laClaveSecreta(), que tome como parámetro un conjunto de caracteres y te pueda devolver el mensaje de manera ordenada.

Por ejemplo: 

// Ejecutando la función con el siguiente parámetro:
laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] );  

// El resultado que nos devuelve la función es el siguiente: 
"El día es lunes";  
Otro ejemplo:

// Ejecutando la función con el siguiente parámetro:
laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] );  

// El resultado que nos devuelve la función es el siguiente: 
"Clave descifrada";  

-------
 */

function laClaveSecreta(caracteres){
    let mensaje = "";
    let iterador = 0 ;
    let contador = 0 ;
    for(let i=caracteres.length-1; i >= 0; i--){
        iterador = iterador + 1
        if (caracteres[i] != "*"){
            mensaje = mensaje + caracteres[i];
            contador = contador + 1
        };
    };
    return [mensaje,iterador-contador];
};

let caracteres = [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"];

console.log(("La clave secreta es: '" + laClaveSecreta(caracteres)[0]+ "', y del conjunto de caracteres hay " + laClaveSecreta(caracteres)[1]) + " caracteres no validos")

