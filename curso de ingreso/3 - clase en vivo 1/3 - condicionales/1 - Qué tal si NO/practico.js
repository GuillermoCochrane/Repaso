/*¿Qué tal si NO?
En el ejercicio anterior analizamos el siguiente código:

if ( diaSoleado == true ){
    console.log('¡Qué bien! Salgamos a la plaza');
}
Y comentamos que siempre y cuando el valor de diaSoleado sea exactamente igual a true, vamos a ejecutar el bloque de código que se encuentra dentro de las {}.

Muy bien, pero ¿qué pasa si queremos hacer algo en caso de que el día no esté soleado?. Es ahí en donde entra el else, la contraparte del if. Se vería así:

if ( diaSoleado == true ){
    console.log('¡Qué bien! Salgamos a la plaza');
} else {
    console.log('¡Ufff, que mal! Bueno, mejor nos quedamos haciendo código');
} 
El condicional else nos permite ejecutar un bloque de código, en el caso que la condición del if no se cumpla, es decir, no sea verdadera. A diferencia del if, la estructura del else solo tiene 2 partes:

La palabra reservada else.
El bloque de código que se ejecuta en el caso que la condición del if no se cumpla.
Entonces, ahora que sabemos cómo funcionan el if  y  else, es importante que sepas que ¡podemos incorporar condicionales a nuestras funciones! Veamos un ejemplo de una función que nos retorna true si un número es mayor a 5, o false en caso contrario:

function esMayor(unNumero) {
   if ( unNumero > 5){
       return true;
   } else {
       return false;
   }
}
En el ejemplo anterior, la función se encargará de recibir un número por parámetro y utilizando if  y  else, retorna true  o  false  si el mismo es mayor a 5.

Si! Seguro que ya te diste cuenta! Cómo estamos trabajando con funciones, a diferencia del ejercicio anterior, ahora volvemos a utilizar la palabra reservada return .

Definí la función sePoneLaOlla, la cual recibe por parámetro el string del día de la semana. Esta función retorna "¡Pongamos la olla, hoy se comen pastas!" si recibe por parámetro el valor "Domingo", caso contrario retornará "Mejor lo dejamos para el domingo".

-------------------------------------------------------------------------------------------------------------------------------------------------------
*/

function sePoneLaOlla(dia) {
if (dia == "Domingo") {
        return "¡Pongamos la olla, hoy se comen pastas!"
    }
    else {
        return "Mejor lo dejamos para el domingo"
    }
}

console(sePoneLaOlla('lunes'))