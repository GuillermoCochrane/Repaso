/* Más conteos
Ana, viendo que somos tan productivos, nos pidió algo más: ahora quiere saber en cuántos meses de un período hubo pérdida.

Decimos que hay pérdida en un período cuando el saldo es menor a cero.

Escribí la función cantidadDeMesesConPerdida. La estructura de la función es parecida a las que venimos haciendo, ¡animate!

----------------------------------------------------------------------------------------------------------------------------------
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

function cantidadDeMesesConPerdida(unPeriodo) {
  let cantidad = 0;
  for (let i = 0; i < unPeriodo.length;i++) {
    if (unPeriodo[i] < 0){
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

function saldosDeMesesConPerdida(periodo){
  let saldosNegativos =[];
  for(i=0; i < periodo.length; i++){
    if (periodo[i] < 0){
      saldosNegativos.push(periodo[i]);
    }
  }
  return saldosNegativos;
}

function mesesConGanancia(unPeriodo) {
  let mesesConGanancia =[];
  for (let i = 0; i < unPeriodo.length;i++) {
    if (unPeriodo[i] > 0){
    mesesConGanancia.push((i+1));
    }
  }
  return mesesConGanancia;
}

function mesesConPerdida(unPeriodo) {
  let mesesConPerdida =[];
  for (let i = 0; i < unPeriodo.length;i++) {
    if (unPeriodo[i] < 0){
    mesesConPerdida.push((i+1));
    }
  }
  return mesesConPerdida;
}

let unPeriodo = [2, 10, -20, 0, -10, 15, 25];

let totalMesesConGanancia = cantidadDeMesesConGanancia(unPeriodo);
let totalMesesConPerdida = cantidadDeMesesConPerdida(unPeriodo);
let saldosPeriodo = saldosDeMesesConGanancia(unPeriodo);
let perdidasPeriodo = saldosDeMesesConPerdida(unPeriodo);
let mesesGanancia = mesesConGanancia(unPeriodo);
let mesesPerdida = mesesConPerdida(unPeriodo);

console.log("hubo " + totalMesesConGanancia +" meses con ganancia" );
console.log("");


for( let i = 0; i<mesesGanancia.length; i++){
  console.log("En el " + mesesGanancia[i] +"º mes hubo ganancia y la ganancia fue de " + saldosPeriodo[i] )
};

console.log("");
console.log("hubo " + totalMesesConPerdida +" meses con perdida" );
console.log("");


for( let i = 0; i<mesesPerdida.length; i++){
  console.log("En el " + mesesPerdida[i] +"º mes no hubo ganancia y la perdida fue de " + perdidasPeriodo[i] )
};