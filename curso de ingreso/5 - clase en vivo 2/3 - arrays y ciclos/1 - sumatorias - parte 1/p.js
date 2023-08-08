/* Sumatorias - Parte 1
Ana, contadora de una conocida empresa, guarda las ganancias de cada mes en un array. Por ejemplo, para el último semestre del año pasado registró las siguientes:

//En Julio ganó $50, en Agosto perdió $12, etc
var gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];
Y nos pregunta recientemente: "¿puedo saber la ganancia de todo un semestre?"

"Obvio", dijimos, y escribimos el siguiente código:

function sumatoriaGananciasSemestre(unSemestre) {
    return unSemestre[0] + unSemestre[1] +
        unSemestre[2] + unSemestre[3] +
        unSemestre[4] + unSemestre[5];
}
//En Enero la empresa ganó $80, en Febrero, $453, en Marzo $1000
var gananciasPrimerTrimestre = [80, 453, 1000];
"Gracias", nos dijo Ana, y se fue calcular las ganancias usando la función que le pasamos. Pero un rato mas tarde, volvió contandonos que también había registrado las ganancias del primer trimestre de este año:

Y nos preguntó: "¿Podría usar esta función que me dieron para calcular las ganancias del primer trimestre?"

Y nos quedamos pensando .

¿Tiene algún problema la función sumatoriaGananciasSemestre que escribimos anteriormente? ¿Funcionará con trimestres? ¿Y con cuatrimestres?

¡Probala en la consola realizando distintas impresiones por pantalla!

----------------------------------------------------------------------
 */
// this file is read only, you cannot write it
function sumatoriaGananciasSemestre(unSemestre) {
    return unSemestre[0] + unSemestre[1] +
        unSemestre[2] + unSemestre[3] +
        unSemestre[4] + unSemestre[5];
}
console.log(sumatoriaGananciasSemestre[200, 100, 500, 400 ]);
console.log(sumatoriaGananciasSemestre[200, 20, 350]);
console.log(sumatoriaGananciasSemestre[25, -400 ]);
// tira undefined, porque la funccion no toma en cuenta el largo del vector de entrada