/* Acumulador variable
Con las ejercitaciones previas vimos cómo usar el for para ejecutar una acción una cantidad de veces fija y variable y cómo hacer algún procesamiento dentro del mismo.

En el ejercicio anterior supimos como calcular la sumatoria de 5 monedas de 25 centavos. La idea sería que logremos hacer una función que calcule la sumatoria de cualquier cantidad de monedas.

Para esto vamos a expandir el ejemplo de las empanadas anterior en el cual calculábamos las calorías de 3 empanadas.

let totalCalorias = 0 ;

for( let i = 0 ; i < 3 ; i++ ){ 
        totalCalorias = totalCalorias + 300;
}

console.log(totalCalorias); 
Para lograr esto, lo que tenemos que modificar es algo similar al ejercicio 2 de Variables Repetidas.

Primero tenemos que sacar el numero 3 y hacer que este sea variable, por ejemplo "x" o "cantidadDeEmpanadas"

let cantidadEmpanadas = 3;
let totalCalorias = 0;

for( let i = 0 ; i < cantidadEmpanadas ; i++ ){ 
        totalCalorias = totalCalorias + 300;
}

console.log(totalCalorias); 
Luego de hacer esta modificación, la variable cantidadEmpanadas podría ser un argumento de una función.

function caloriasDeEmpanadas(cantidadDeEmpanadas) {
    let totalCalorias = 0;

    for( let i = 0 ; i < cantidadEmpanadas ; i++ ){
        totalCalorias = totalCalorias + 300;
    }
    console.log(totalCalorias); 
}
Y de esta manera logramos hacer nuestra función, que al pasarle la cantidad de empanadas, esta imprime por pantalla la cantidad de calorías totales.

Te proponemos una última modificación. En vez de hacer que la función imprima, vamos a hacer que esta función devuelva un valor, para eso vamos a utilizar el return.

function caloriasDeEmpanadas(cantidadDeEmpanadas) {
    let totalCalorias = 0;

    for( let i = 0 ; i < cantidadEmpanadas ; i++ ){
        totalCalorias = totalCalorias + 300;
    }
    return totalCalorias; 
}
Sabiendo esto, escribí una función sumarMonedasDe25(cantidadDeMonedas), que tome como parámetro un valor numérico y retorne la sumatoria de las monedas de 25 centavos. Por ejemplo:

sumarMonedasDe25(7);  // Ejecuto la función con el número 7 como parámetro
1.75  // Éste es el resultado de ejecutar la operación 7 veces
Esto hizo la siguiente cuenta: 0.25 + 0.25 + 0.25 + 0.25 + 0.25 + 0.25 + 0.25

-------------------------------------------------------------------------------
 */
// this file is read only, you cannot write it

function sumarMonedasDe25(cantidadDeMonedas){
    let valorTotal = 0;
    for (i=0; i<cantidadDeMonedas ; i++){
        valorTotal = valorTotal + 0.25;
    };
    return valorTotal;
}
console.log(sumarMonedasDe25(7))