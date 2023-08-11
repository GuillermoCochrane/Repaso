/* let fs = require('fs');
let datosJSON = fs.readFileSync(__dirname + "/tareas.json","utf-8");
let datos = JSON.parse(datosJSON); */

const listadoDeFunciones = require("./funcionesDeTareas");
let datos = listadoDeFunciones.leerArchivo();

let accion = process.argv[2];

console.log("----------------------------------------------------------");
switch (accion) {

    case 'listar':
        for (let i=0; i<datos.length; i++){
            console.log((i+1) + ". " + datos[i].titulo + " - " + datos[i].estado)
        };
        break;

    case undefined :
        console.log("Atención - Tienes que pasar una acción.");
        break
    
    default:
        console.log("No entiendo qué quieres hacer, escribe una acción válida");
        break;
    };
    console.log("----------------------------------------------------------");
