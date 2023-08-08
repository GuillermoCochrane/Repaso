/*Volviendo al secundario
Quizá no lo recuerdes bien, pero cuando pasamos por la secundaría aprendimos que cuando una expresión matemática tiene varios operadores, las multiplicaciones y divisiones se efectuarán antes que las sumas y las restas se efectuarán después de las sumas, a esto se le llama precedencia. Veamos un ejemplo simple:

5 * 3 + 8 / 4 - 3 = 14
Para que quede bien claro, lo que acaba de ocurrir es lo siguiente:

((5 * 3) + (8 / 4)) - 3 = 14
Lo primero que sucede es la multiplicación y la división y a su vez la suma de estos dos resultados. Acto seguido la resta y posterior resultado.

(15 + 2) - 3 = 14
Ahora bien, en JavaScript, al igual que en matemática, cuando usamos operadores lógicos, las expresiones se evalúan en un orden determinado, nuevamente, la precedencia.

¿Cuál es ese orden? ¡Hagamos la prueba! Veamos la siguiente función:

function pagoConTarjeta(seCobraInteres, cuotasTarjeta, efectivoDisponible) {
   return !seCobraInteres  && cuotasTarjeta >=3  || efectivoDisponible < 100;
}l
pagoConTarjeta(true, 6,320);
pagoConTarjeta(true, 8,80);
pagoConTarjeta(true, 2,215);
pagoConTarjeta(true, 1,32);
Utiliza la función console.log para mostrar los resultados de ejecutar la función pagoConTarjeta con distintos parámetros, al menos 4 veces. La función pagaConTarjeta ya se encuentra definida aunque no la veas, simplemente la tenés que llamar como en el ejemplo anterior y mostrar su resultado en consola.

----------------------------------------------------*/

function pagoConTarjeta(seCobraInteres, cuotasTarjeta, efectivoDisponible) {
   return !seCobraInteres  && cuotasTarjeta >=3  || efectivoDisponible < 100;
}

let pagosAChequear = [
   [true, 6,320],
   [true, 8,80],
   [true, 2,215],
   [false, 1,32]
]


for (let i=0; i < (pagosAChequear.length); i++){
   if(pagoConTarjeta((pagosAChequear[i])[0], (pagosAChequear[i])[1],(pagosAChequear[i])[2])){
       console.log('El pago con tarjeta ' + (i+1) +' es posible');
   }else{
       console.log('El pago con tarjeta ' + (i+1) +' no es posible');
   }
}