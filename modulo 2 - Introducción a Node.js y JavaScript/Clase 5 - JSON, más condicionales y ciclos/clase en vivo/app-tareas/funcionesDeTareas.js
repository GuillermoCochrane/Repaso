let fs = require('fs');

let funcionesDeTareas = {
    
    archivo:        "tareas.json",
    
    leerArchivo:    function(){
        let leerJSON = fs.readFileSync(__dirname + "/" + this.archivo,"utf-8");
        return JSON.parse(leerJSON)
    }

};

module.exports = funcionesDeTareas;