/* ¡Vamos al parque de diversiones!
Ya falta poco. Con cada ejercicio, vamos volviéndonos más expertos en condicionales. Vamos ahora a jugar un rato.

En el parque de diversiones de la ciudad instalaron una nueva montaña rusa y nos pidieron ayuda para que le avisemos a las personas, si pueden subirse o no, antes de hacer la fila. Los requisitos para que una persona pueda subir a la atracción son:

Alcanzar la altura mínima de 1.5m (o 1.2m si está acompañada por un adulto)
No tener ninguna afección cardíaca
Definí la función puedeSubirse, la cual, recibiendo 3 parámetros:

alturaPersona (number)
vieneConCompania (booleano)
tieneAfeccionCardiaca (booleano)
Retorne true  o  false  según el caso. Tené en cuenta, las condiciones necesarias, mencionadas anteriormente.

puedeSubirse(1.7, false, true);
// Ésto da como resultado false . No puede subirse porque aunque tiene mas de 1.5m, tiene una afección cardíaca.

------------------------------------------------ */

// this file is read only, you cannot write it

clientes = [[1.7, false, true],[1.7, false, false],[1.4, false, true],[1.4, false, false],[1.4, true, true],[1.4, true, false],]

function puedeSubirse(alturaPersona,vieneConCompania,tieneAfeccionCardiaca ){
    return ( (alturaPersona >= 1.5 ||(alturaPersona >= 1.2 && vieneConCompania)) && !tieneAfeccionCardiaca);
};

for (let i=0; i < (clientes.length); i++){
    if(puedeSubirse((clientes[i])[0], (clientes[i])[1],(clientes[i])[2])){
    console.log('la ' + (i+1) +'º persona puede subir a la montaña rusa');
}else{
    console.log('la ' + (i+1) +'º persona no puede subir a la montaña rusa')
}
};