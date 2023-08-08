/* Trasladar
Métodos de array, ya usamos el push(), usemos otro que es el pop(), si no lo recordás podés repasarlo del slide número 9 del Material complementario en este enlace.

Con la data que recordás (o que acabás de ver nuevamente) es hora de poner "manos a la obra

Declará una función trasladar, que tome dos arrays, saque el último elemento del primero y lo agregue al segundo.

Ejemplo:

let unArray = [1, 2, 3];
let otroArray = [4, 5];

trasladar(unArray, otroArray);

unArray //debería ser [1, 2]
otroArray //debería ser [4, 5, 3]

-----------------------------------------
 */
// this file is read only, you cannot write it

function trasladar(a1, a2){
    let quitado = a1.pop();
    a2.push(quitado);
    return [a1,a2]
};

let unArray = [1, 2, 3]
let otroArray = [4, 5]

console.log("Los arrays originales son: " + unArray + " y " + otroArray);

let ArrayModificado = trasladar(unArray,otroArray)
let unArrayNuevo = ArrayModificado[0]
let otroArrayNuevo = ArrayModificado[1]

console.log("Los arrays modificados son: " + unArrayNuevo + " y " + otroArrayNuevo); 
