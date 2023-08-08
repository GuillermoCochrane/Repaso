/* Más sobre booleanos

El verdadero poder de los boolean es que pueden surgir como resultado de hacer comparaciones entre distintos valores con algunos operadores matemáticos. 

Por ejemplo: Sabemos  que si le hacemos a alguien la pregunta "¿2 es mayor que 1?" la persona nos contestaría "Si, es verdadero, 2 es mayor que 1". Lo mismo pasa en JavaScript, sólo que esa pregunta la hacemos de la siguiente manera:

2 > 1 ;

// JavaScript sabe que el resultado de ésto es true

Ésto quiere decir que " 2 > 1 " representa a un valor verdadero. También podríamos haber escrito el código anterior de la siguiente manera:

let operacion = 2  > 1;

// Como vimos 2 > 1 se corresponde con un valor de verdad, en éste caso asignamos la operación a una variablev
// Entonces el resultado es que el valor de la variable con nombre operacion es true

Y si le hacemos a alguien la siguiente pregunta: "¿2 es menor a 1?". En este caso la personas nos contestaría: "Eso es falso, 2 no es menor que 1". Nuevamente lo mismo sucede en JavaScript, pero lo consultamos de la siguiente manera: 

let otraOperacion = 2  < 1;
// JavaScript sabe que el valor de la variable otraOperacion es false

Para continuar, defini dos variables: unNumeroChico y unNumeroGrande, y asignales valores numéricos diferentes de acuerdo a sus nombres.
Luego definí la variable esMenor y asignale el resultado de comparar si unNumeroChico es menor que unNumeroGrande; y definí la variable esMayor, con el resultado de comparar si unNumeroChico es mayor que unNumeroGrande.

-----------------------------------------------------------------------------------------------------------------------------------*/

// this file is read only, you cannot write it
let unNumeroChico = 6;
let unNumeroGrande = 43;
let esMenor = unNumeroChico < unNumeroGrande;
let esMayor = unNumeroChico > unNumeroGrande;

if(esMenor){
    console.log("el numero " + unNumeroChico + " es menor que " + unNumeroGrande)
}else{
    console.log("el numero " + unNumeroChico + " es mayor que " + unNumeroGrande)
}