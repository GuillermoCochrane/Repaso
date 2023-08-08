function medallaSegunPuesto(puesto){
    let posicion = ["Oro", "Plata", "Bronce"];
    if (puesto >= 1 && puesto <= 3 ){
        return posicion[puesto-1];
    }
        else {
        return "Seguí participando"
    };
}