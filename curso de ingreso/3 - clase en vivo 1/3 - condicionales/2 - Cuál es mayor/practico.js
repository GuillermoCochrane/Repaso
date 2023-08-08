/*¿Cuál es mayor?
Muy bien, veamos otro ejercicio para reforzar el funcionamiento del if  y  else.

Definí la función elMayor, la cual debe recibir por parámetro dos números, y como resultado nos devuelva (retorne) el mayor de los dos. Por ejemplo, si la función recibiera 4 y 5 retornaría 5 pues es el mayor, y si pasamos 10 y 4, retornará 10.

--------------------------------------------*/

// this file is read only, you cannot write it

function elMayor(numero1, numero2) {
    if(numero1 > numero2){
        return numero1;
    }else{
        return numero2; 
    }
}

let mayor = elMayor(1,9);

console.log("el numero mayor es: " + mayor);