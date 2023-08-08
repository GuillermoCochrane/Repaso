/* Conteos
"Ah, pero esto no termina acá" - dijo Ana - "Quiero saber en cuántos meses hubo ganancia, es decir, que el saldo fue mayor a cero".

Completá la función cantidadDeMesesConGanancia. En esta oportunidad deberás de utilizar el for y si prestás atención notarás que tiene una estructura similar al problema anterior 

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 */

// this file is read only, you cannot write it

function cantidadDeMesesConGanancia(unPeriodo) {
  let cantidad = 0;
  let mesesConGanancia =[];
  for (let i = 0; i < unPeriodo.length;i++) {
    if (unPeriodo[i] > 0){
    cantidad = cantidad + 1;
    mesesConGanancia.push((i+1));
    }
  }
  return [cantidad,mesesConGanancia];
}
let unPeriodo = [2, 10, -20, 0, 0, 10, 10];
let resultados = cantidadDeMesesConGanancia(unPeriodo);

console.log("hubo " + resultados[0] +" meses con ganancia" );
console.log("");

let mesesConGanancia = resultados[1];

for( let i = 0; i<mesesConGanancia.length; i++){
  console.log("En el " + mesesConGanancia[i] +"º mes hubo ganancia" )
};


/* [100]
[100, 2]
[2, 10, -20]
[2, 10, -20, 0, 0, 10, 10] */