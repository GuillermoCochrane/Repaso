let fs = require('fs');

let funcionesDeTareas = {
    archivo:  "tareas.json",

    leerArchivo:    function()  {
        let leerJSON = fs.readFileSync(this.archivo, 'utf-8');
        return JSON.parse(leerJSON)
    },

    escribirJSON: function(listadoDeTareas) {
        let listadoDeTareasJSON = JSON.stringify(listadoDeTareas);
        fs.writeFileSync(this.archivo,listadoDeTareasJSON);
    },
    
    guardarTarea: function (tareaAGuardar) {
        let listadoDeTareas = this.leerArchivo();
        listadoDeTareas.push(tareaAGuardar);
        this.escribirJSON(listadoDeTareas); 
    },

    filtarPorEstado: function(estado) {
        let listadoDeTareas = this.leerArchivo();
        let listadoFiltrado = listadoDeTareas.filter((tarea) => tarea.estado == estado  )
        return listadoFiltrado
    },

    mostrarEstados: function(arrayDeObjetos){
        arrayDeObjetos.forEach((elemento,indice) => {
            console.log((indice+1) + ". " + elemento.titulo + " - " + elemento.estado)
        });
    },

    mostrarAcciones: function(array){
        array.forEach((elemento,indice) => {
            console.log((indice+1) + ". " + elemento)
        })
    }

};

module.exports = funcionesDeTareas;