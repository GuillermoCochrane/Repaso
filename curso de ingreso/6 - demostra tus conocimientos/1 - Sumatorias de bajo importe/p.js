/* Sumatorias de bajo importe
Resulta que cuando hay que presentar ganancias mayores a $ 1.000 no se presentan junto con las rendiciones que veníamos haciendo, por lo cual vamos a necesitar darle una vuelta de tuerca mas a nuestra función de Sumatorias.
Escribí la función sumatoriaBajoImporte la cual recibiendo un array con importes nos devuelva el resultado final de la suma de los importes de todos los meses que tienen ganancia, a excepción de los que superen un importe de $ 1.000

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 */
// this file is read only, you cannot write it

function sumatoriaBajoImporte(periodo){
  let resultado = 0;
  for (let i=0; i<periodo.length; i++){
    if(periodo[i]>0 && periodo[i]<=1000)
    resultado=resultado+periodo[i]
  }
  return resultado
}

let periodo =[2000, 150, -200, 0, 0, 900, 500, 1000];

console.log(sumatoriaBajoImporte(periodo))