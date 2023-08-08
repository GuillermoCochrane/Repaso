/* a sobre la hora , Ana nos dejó con un problema más interesante: quiere saber los saldos de los meses que hubo ganancia .

saldosDeMesesConGanancia([100, 20, 0, -10, 10])
[100, 20, 10]
Completá la función saldosDeMesesConGanancia. Nuevamente tiene una estructura similar a los problemas anteriores, pero, ¡no tan rápido!: esta función tiene que devolver un array.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 */
// this file is read only, you cannot write it

function cantidadDeMesesConGanancia(unPeriodo) {
  let cantidad = 0;
  for (let i = 0; i < unPeriodo.length;i++) {
    if (unPeriodo[i] > 0){
      cantidad = cantidad + 1;
    }
  }
  return cantidad;
}

function saldosDeMesesConGanancia(periodo){
  let saldos =[];
  for(i=0; i < periodo.length; i++){
    if (periodo[i] > 0){
      saldos.push(periodo[i]);
    }
  }
  return saldos;
}

function mesesesConGanancia(unPeriodo) {
  let mesesConGanancia =[];
  for (let i = 0; i < unPeriodo.length;i++) {
    if (unPeriodo[i] > 0){
    mesesConGanancia.push((i+1));
    }
  }
  return mesesConGanancia;
}

let unPeriodo = [2, 10, -20, 0, 0, 15, 25];
let cantidadDeMeses = cantidadDeMesesConGanancia(unPeriodo);
let saldosPeriodo = saldosDeMesesConGanancia(unPeriodo);
let mesesGanancia = mesesesConGanancia(unPeriodo)

console.log("hubo " + cantidadDeMeses +" meses con ganancia" );
console.log("");


for( let i = 0; i<mesesGanancia.length; i++){
  console.log("En el " + mesesGanancia[i] +"º mes hubo ganancia y la ganancia fue de " + saldosPeriodo[i] )
};