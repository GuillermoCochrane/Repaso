function asientosDisponibles(asientosLibres,asientoRequerido){
    if (asientosLibres.indexOf(asientoRequerido)!=-1){
        return "Felicitaciones, el asiento número " + asientoRequerido + " está disponible"
    }else {
        return "Lo sentimos, el asiento número "+ asientoRequerido +  " está ocupado, pero aún quedan "+ asientosLibres.length +" asientos disponibles" 
    };
};