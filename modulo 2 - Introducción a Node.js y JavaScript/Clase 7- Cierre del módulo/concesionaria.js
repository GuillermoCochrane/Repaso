let autos = require('./autos');
let concesionaria ={

    autos: autos,

    buscarAuto: function(patente){
        let resultadoBusqueda = this.autos.filter(auto => auto.patente == patente);
        if (resultadoBusqueda == false){            
            return null
        }
        return resultadoBusqueda[0]
    },

    venderAuto : function(patente){
        let autoAvender = this.buscarAuto(patente)
        if (autoAvender != null){
            autoAvender.vendido = true;
        };
        return autoAvender
    },

    autosParaLaVenta: function(){
        let autosDisponibles = this.autos.filter(auto=> auto.vendido == false)
        if (autosDisponibles == false){            
            return null
        }
        return autosDisponibles
    },

}


console.log(concesionaria.autosParaLaVenta());