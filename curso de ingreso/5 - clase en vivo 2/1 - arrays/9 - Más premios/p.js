/* Más premios
Si le pedís un elemento en una posición que iguala o excede al tamaño del array, vas a obtener undefined. No parece algo terrible, pero el problema es que con undefined no podés hacer nada realmente útil.

Así que la recomendación es: ¡no te pases de índice!

Teniendo ésto en cuenta, va un desafío: escribí nuevamente la función medallaSegunPuesto, (si no la recordás la podés volver a ver en el ejercicio "Te vamos a dar un premio!" de la clase de Condicionales) pero esta vez usando como máximo un sólo if. Quizás los arrays te pueden ser útiles acá .

Por las dudas te recordamos que la función tiene que devolver la medalla que le corresponde a los primeros puestos de una competencia, por ejemplo:

medallaSegunPuesto(1)
"Oro"
medallaSegunPuesto(2)
"Plata"
medallaSegunPuesto(3)
"Bronce"
medallaSegunPuesto(4)
"Seguí participando"
medallaSegunPuesto(5)
"Seguí participando"

------------------------------------
 */

// this file is read only, you cannot write it

function medallaSegunPuesto(puesto){
    let posicion = ["Oro", "Plata", "Bronce"];
    if (puesto >= 1 && puesto <= 3 ){
        return posicion[puesto-1];
    }
        else {
        return "Seguí participando"
    };
}