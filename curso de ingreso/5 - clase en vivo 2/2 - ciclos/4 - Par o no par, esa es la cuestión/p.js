/* Par o no par, esa es la cuestión

Siguiendo las ejercitaciones anteriores, vamos a crear una función llamada pasandoPorLosPares que por cada iteración de i, si el valor de i es par, imprima por pantalla “acá i tiene el valor de x”.

Realizar una función llamada pasandoPorLosPares() que muestre por consola acá i tiene el valor de x por cada valor PAR que va tomando i desde 0 hasta 6 (inclusive). Te recordamos que debes prestar especial atención con los espacios. En el ejercicio debe haber un solo espacio entre cada palabra.

----------------------
 */
// this file is read only, you cannot write it
function pasandoPorLosPares(){
    for (i=0; i<=6; i=i+2){
        if (i%2 == 0){
            console.log("acá i tiene el valor de " + i + " y es par");
        };
    };
};

pasandoPorLosPares()