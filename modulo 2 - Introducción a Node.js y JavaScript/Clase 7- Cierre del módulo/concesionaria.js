let autos = require('./autos');
let concesionaria ={

    autos: autos,
    // busca un auto ingresando como parametro la patente
    buscarAuto: function(patente){
        let resultadoBusqueda = this.autos.filter(auto => auto.patente == patente);
        if (resultadoBusqueda == false){            
            return null
        }
        return resultadoBusqueda[0]
    },

    // cambia el estado de un auto sin vender (false) a vendido (true)
    venderAuto : function(patente){
        let autoAvender = this.buscarAuto(patente)
        if (autoAvender != null){
            autoAvender.vendido = true;
        };
        return autoAvender
    },

    // develve un array de objetos con los autos disponible para la venta
    autosParaLaVenta: function(){
        let autosDisponibles = this.autos.filter(auto => auto.vendido == false)
        if (autosDisponibles == false){            
            return null
        };
        return autosDisponibles
    },

    //auto 0 km es aquel que tenga un kilometraje menor a 100.
    autosNuevos: function(){
        return this.autosParaLaVenta().filter( autoNuevo =>autoNuevo.km < 100 );
    },

    //devuelve una lista que contiene el precio de venta de cada auto vendido.
    listaDeVentas: function(){
        let autosVendidos = this.autos.filter(auto => auto.vendido == true);
        return autosVendidos.map(auto => auto.precio);
    },

    //Nos devuelva la sumatoria del valor de todas las ventas realizadas.
    totalDeVentas: function(){
        if(this.listaDeVentas().length == 0){
            return 0
        }else{
            return this.listaDeVentas().reduce((acumulador, precio) =>  acumulador+precio);
        };
    },

    //ingresando una persona y la patente de un auto, nos devuelve si puede comprar el mismo
    puedeComprar: function(auto,persona){
        let autoPorComprar = this.buscarAuto(auto)
        return ((autoPorComprar.precio/autoPorComprar.cuotas) <= persona.capacidadDePagoEnCuotas && autoPorComprar.precio <= persona.capacidadDePagoTotal);
    },

    // Ingresando una persona, nos devuelve el listado de autos que puede comprar
    autosQuePuedeComprar: function(persona){
        return this.autosParaLaVenta().filter(auto => ((auto.precio/auto.cuotas) <= persona.capacidadDePagoEnCuotas && auto.precio <= persona.capacidadDePagoTotal))
    }

};

let persona = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
};

console.log(concesionaria.autosQuePuedeComprar(persona));