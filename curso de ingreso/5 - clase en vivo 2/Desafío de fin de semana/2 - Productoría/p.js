/* Productoría
Necesitamos una función productoria que reciba un array de números y devuelva su productoria. La productoria es el resultado de multiplicar todos sus elementos entre ellos.

Por ejemplo, productoria([1, 4, 7]) debe devolver 28, que es 1 * 4 * 7.

Escribí la función productoria

-------------------------------------
 */
// this file is read only, you cannot write it

function productoria(array){
    let resultado = 1;
    for (let i = 0; i < array.length; i++){
        resultado =resultado*array[i]
    };
    return resultado
};

let numeros = [4, 8, 2];
console.log("La productoria de " + numeros + " da como resulatdo " + productoria(numeros));