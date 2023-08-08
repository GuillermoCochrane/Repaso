/* Variables y operaciones

Vimos cómo declarar una variable y asignarle un valor, y probablemente ahora te preguntes: ¿y para qué sirve almacenar datos en  variables?.

Las variables nos permiten reutilizar el dato asignado en la misma con solo invocar su nombre.

Por ejemplo:

let unNumero = 124;
console.log(unNumero);
// Podemos usar console.log para imprimir el valor que tiene asignado unNumero. Su resultado será 124.

También algo muy importante, así como podemos hacer operaciones matemáticas como sumar (+) o restar (-) números, podemos hacer lo mismo con variables que ya hayan sido declaradas.

Por ejemplo:

let unNumero = 124;
let siguienteNumero = unNumero + 1;
console.log(siguienteNumero);
// Se imprimirá por pantalla el valor que tiene asignado la variable siguienteNumero que será 125.

Veamos si se entiende: Declará y asigná dos variables numeroA  y  numeroB , para posteriormente en las variables (¡qué tenes que definir vos!)  resultadoSuma , resultadoResta , resultadoMultiplicacion y resultadoDivision almacenar el resultado de la operación que corresponda al nombre de cada una de ellas.


---------------------------------------------------------------------------------------------------------------------------------- */

// this file is read only, you cannot write it

let numeroA = 10;
let numeroB = 5;

let resultadoSuma = numeroA + numeroB;
let resultadoResta = numeroA - numeroB;
let resultadoMultiplicacion = numeroA * numeroB;
let resultadoDivision= numeroA / numeroB;
console.log("----------------------------------");
console.log("Dados los numeros: " + numeroA + " y " + numeroB + " :");
console.log(" ")
console.log("La suma de ambos da: "+  resultadoSuma);
console.log("La multiplicacion de ambos da: "+  resultadoMultiplicacion);
console.log("La resta de " + + numeroA + " con " + numeroB  + " da: " +  resultadoResta);
console.log("La division de " + + numeroA + " con " + numeroB  + " da: " +  resultadoDivision);
console.log("----------------------------------");