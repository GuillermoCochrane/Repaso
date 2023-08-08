function puedeJubilarse(edad, genero, aniosAporte) {
    return  estaEnEdad(edad, genero) && tieneSuficientesAportes(aniosAporte);
}

function estaEnEdad(edad, genero){
    return (edad>=60 && genero=="F") || (edad>=65 && genero=="M");
}

function tieneSuficientesAportes(aniosAporte){
    return aniosAporte>30;
}