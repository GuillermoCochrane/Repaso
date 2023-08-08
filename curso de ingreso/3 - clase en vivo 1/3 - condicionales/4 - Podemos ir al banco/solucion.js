function puedoIrAlBanco ( diaDeLaSemana , horaActual ){

    return (diaDeLaSemana != "Sábado") && (diaDeLaSemana != "Domingo")  && (horaActual >= 10) && (horaActual <= 15);
    
    }