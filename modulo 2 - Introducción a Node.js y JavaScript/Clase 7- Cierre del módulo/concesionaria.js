let autos = require('./autos');
let concesionaria ={

    autos: autos,

    buscarAuto: function(patente){
        let resultadoBusqueda = this.autos.filter(auto => auto.patente == patente);
        if (resultadoBusqueda == false){
            resultadoBusqueda = null
        }
        return resultadoBusqueda
    },

    vender: function(){

    }

}


console.log(concesionaria.buscarAuto("abc123"));