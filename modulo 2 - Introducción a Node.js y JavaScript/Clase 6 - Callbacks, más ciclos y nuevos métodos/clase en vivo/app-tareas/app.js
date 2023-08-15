const listadoDeFunciones = require("./funcionesDeTareas");
let datos = listadoDeFunciones.leerArchivo();
let accionesPosibles = ["listar", "crear","filtrar"]
let estadosPosibles = ["terminada", "en progreso", "pendiente"]
let prompt = process.argv

console.log("----------------------------------------------------------");
switch (prompt[2]) {

    case 'listar':
        console.log("Listado de tareas: ");
        console.log(" ");
        listadoDeFunciones.mostrarEstados(datos)
        break;
    
    case 'crear':
        let nuevaTarea = {
            titulo:     prompt[3],
            estado:     'pendiente',
        };
        listadoDeFunciones.guardarTarea(nuevaTarea);
        console.log("Nueva tarea guardada")
        break

    case 'filtrar':
        let estadoAFiltrar = prompt[3];
        if(estadoAFiltrar != "terminada" && estadoAFiltrar != "en progreso" && estadoAFiltrar != "pendiente" ){
            console.log('El estado ingresado no es valido.');
            console.log('Estados posibles: ');
            console.log(" ");
            listadoDeFunciones.mostrarAcciones(estadosPosibles)
            break
        };
        
        let funcionesFlitradas = listadoDeFunciones.filtarPorEstado(estadoAFiltrar);
        console.log("Tareas con estado: " + estadoAFiltrar );
        console.log(" ");
        listadoDeFunciones.mostrarEstados(funcionesFlitradas)
        break

    case undefined :
        console.log("Atención - Tienes que pasar una acción.");
        console.log("");
        listadoDeFunciones.mostrarAcciones(accionesPosibles);
        break
    
    default:
        console.log("No entiendo qué quieres hacer, escribe una acción válida");
        console.log("");
        listadoDeFunciones.mostrarAcciones(accionesPosibles);
        break;
    };
    console.log("----------------------------------------------------------");
