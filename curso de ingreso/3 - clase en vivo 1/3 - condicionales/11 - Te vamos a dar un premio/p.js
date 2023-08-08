/* ¡Te vamos a dar un premio!
Ya has llegado al nivel necesario para ganarte un premio por tu excelente rendimiento. Ahora que ya sabés lo suficiente de JavaScript, el jurado de un torneo de programación, nos pidió que desarrollemos la función medallaSegunPuesto, la cual retorne la medalla que le corresponde a los primeros puestos, según la siguiente lógica:

Primer puesto: le corresponde "Oro"
Segundo puesto: le corresponde "Plata"
Tercer puesto: le corresponde "Bronce"
Otros puestos: le corresponde "Seguí participando"
Si ejecutáramos la función con los siguientes puestos, el resultado sería así:

medallaSegunPuesto(1); // Ésto da como resultado la palabra Oro
medallaSegunPuesto(5); // Ésto da como resultado la frase Seguí participando
Definí entonces, la función medallaSegunPuesto.

TIP: en esta función vas a necesitar hacer uso de la estructura if / else if / else.

----------------------------------------- */

// this file is read only, you cannot write it

function medallaSegunPuesto(puesto){
    if (puesto == 1){
        return "Oro"
    }else if(puesto == 2){
        return "Plata"
    }else if(puesto == 3){
        return "Bronce"
    } else{
        return "Seguí participando"
    }
}

let premio = medallaSegunPuesto(4)

if (premio == "Seguí participando"){
    console.log(premio)
}else{
    console.log("Obtuviste una medalla de " + premio + "!!!")
}