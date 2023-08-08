/* Contiene
¡Ahora te toca a vos!


Escribí la función contiene que recibe como parámetros un array y un número. Ésta función deberá retornar un booleano (true) que nos diga si el número que tenemos como parámetro se encuentra dentro del array o el otro booleano en el caso contrario (false).

Por ejemplo:

contiene([1, 6, 7, 6], 7)
true
contiene([1, 6, 7, 6], 6)
true
contiene([], 7)
false
contiene([8, 5], 7)
false

--------------------------------------
 */
// this file is read only, you cannot write it

function contiene( array, numero ){
    return array.indexOf(numero) != -1
}

let arrays =[[1, 6, 7, 6],[1, 6, 7, 6],[],[8, 5]];
let numeros =[7,6,7,7];


for(let i=0;i<arrays.length;i++){
    let a = contiene(arrays[i],numeros[i])

    if(a){
        console.log("el array nº " + (i+1) + " tiene el numero " + numeros[i]  )
    }else{
        console.log("el array nº " + (i+1) + " no tiene el numero " + numeros[i]  )
    }
    

}