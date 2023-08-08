/* Sumatoria
Visto lo aprendido hasta este momento, estamos en condiciones de hacer la siguiente ejercitación.

Para esto vamos a tener que utilizar todos los conceptos vistos del for hasta ahora:

Repeticiones variables
Procesar algo utilizando el for
El valor de la variable i
Sabiendo esto, escribí una función sumatoriaHasta, que tome como parámetro X (un valor numérico) y retorne (no imprima) la sumatoria de los números desde el 0 hasta el número X. Por ejemplo:

sumatoriaHasta(4);  // Ejecuto la función con el valor 4 como parámetro
6  // Éste es el resultado de la operación
Ésta función haría la siguiente cuenta:  0 + 1 + 2 + 3 (NO llegamos al 4, porque la función dice hasta X , no dice inclusive)

-------------------------------
 */

// this file is read only, you cannot write it
function sumatoriaHasta(x){
    let sumatoria = 0;
    for (i=1; i<x; i++){
        sumatoria = sumatoria + i
    };
    return sumatoria;
}

console.log(sumatoriaHasta(7))