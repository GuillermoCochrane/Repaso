/*Tablas de verdad
Siguiendo con los planteamientos filosóficos y analizando la siguiente tabla, podemos concluir que en la lógica booleana, se puede definir el comportamiento de una expresión mediante una tabla de la verdad. En donde siendo A y B expresiones que evalúan true o false y usando el símbolo ^ (que representa la conjunción de las mismas), podemos determinar si su unión nos arroja un Verdadero o Falso.

A	B	A ^ B
V	V	V
V	F	F
F	V	F
F	F	F
Cualquier expresión booleana puede ser una proposición. ¿Nos creés? Probá en la consola tu función filosofoHipster con los siguientes valores y comprobá si se comporta como en la tabla:

filosofoHipster("Músico","Argentina",5); // Ésto da como resultado la true
filosofoHipster("Fubolista","Brasil",12); // Ésto da como resultado la false
filosofoHipster("Músico","Argentina",1); // Ésto da como resultado la false
Utiliza la función console.log para mostrar los resultados de ejecutar la función filosofoHipster con distintos parámetros, al menos 3 veces. La función filosofoHipster ya se encuentra definida aunque no la veas, simplemente la tenés que llamar como en el ejemplo anterior.

------------------------------*/

let filosofoHipster = function(profesion, nacionalidad, kmCaminados ){

    return ( (profesion == 'Músico') && (nacionalidad == 'Argentina') && (kmCaminados > 2))

}


let personas = [["Músico","Argentina",5],
                ["Fubolista","Brasil",12],
                ["Músico","Argentina",1]];

for (let i=0; i < (personas.length); i++){
    if(filosofoHipster((personas[i])[0], (personas[i])[1],(personas[i])[2])){
        console.log('La persona numero ' + (i+1) +' es filosofo Hipster');
    }else{
        console.log('La persona numero ' + (i+1) +' no es filosofo Hipster');
    }
}

