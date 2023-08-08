/* Teniendo estas funciones pequeñas, podemos combinarlas para hacer cosas más complejas. Esto se debe a que podemos llamar y ejecutar una función dentro de otra.

Por ejemplo, si queremos sumar dos números y después multiplicarlos por 3, podríamos hacerlo de la siguiente forma:

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function tripleDeLaSuma(numero3, numero4) {
    let resultadoDeSuma = sumar(numero3, numero4);
    return resultadoDeSuma * 3;
}
Acá vemos que al ya tener la función sumar() definida podemos llamarla dentro de otra función (en este caso dentro de tripleDeLaSuma()), guardar el resultado de su ejecución en una nueva variable y hacernos el trabajo más fácil.

Ahora te pedimos que declares una función llamada  tripleDeLaSuma() que reciba dos parámetros. Luego tiene que sumar ambos y devolvernos el triple del valor del resultado de sumar ambos parámetros . Para ello ya contás (aunque no la veas declarada) con la función triple, que recibe un parámetro y retorna el valor del mismo multiplicado por tres.

--------------------------------------------------------------------------------------------------------------------------------------------------------
 */
// this file is read only, you cannot write it

function triple(numero){
    return numero * 3;
};

function tripleDeLaSuma(numero1,numero2){
    return triple(numero1+numero2);
};

let n1 = 6;
let n2 = 9;

console.log("El triple de la suma de " + n1 + " y " + n2 + " es: " + tripleDeLaSuma(n1,n2));