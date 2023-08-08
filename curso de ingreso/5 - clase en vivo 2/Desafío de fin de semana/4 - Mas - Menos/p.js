/* Mas | Menos
Necesitamos una función masMenos que reciba un array y devuelva otro con los siguientes tres números:

En la primera posición, la fracción de números que son positivos
En la segunda posición, la fracción de números que son cero
En la última posición, la fracción de números que son negativos
Por ejemplo, masMenos([1, 2, 0, -1]) debería devolver [0.5, 0.25, 0.25], dado que hay 50% de positivos, 25% de ceros, y 25% de negativos.

Escribí la función masMenos.

------------------------------------------------------ */

// this file is read only, you cannot write it

function masMenos(array){
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i] > 0){
            positivos = positivos+1
        } else if(array[i] < 0 ){
            negativos = negativos+1
        }else{
            ceros = ceros + 1
        };
    };

    return [
        (positivos/(array.length)),
        (negativos/(array.length)),
        (ceros/(array.length))
    ];
}

let arrayDeEntrada = [1, 2, 0, -1];

console.log(" ")
console.log("Dado el siguente array: " + arrayDeEntrada  )
console.log(" ")
console.log("Contiene " + masMenos(arrayDeEntrada)[0]*100+ "% de numeros positivos, " + masMenos(arrayDeEntrada)[1]*100+ "% de numeros negativos y " +  masMenos(arrayDeEntrada)[2]*100+ "% de numeros cero")
