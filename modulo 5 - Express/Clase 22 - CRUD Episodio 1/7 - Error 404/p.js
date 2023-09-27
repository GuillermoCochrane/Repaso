/* ¿Qué pasa si el usuario ingresa a una ruta que no existe?
Ya tenemos nuestra aplicación casi lista. Fuimos agregando rutas y llamándolas con app.use(). Nos faltaría agregar la lógica para los casos en que el usuario ingrese por URL a una sección que no exista. Es decir, que no haya una ruta seteada para esa dirección.

Para eso vamos a setear una nueva línea al final de nuestro código en donde hagamos uso de app.use(). El método use va a recibir un callback el cual va a tener tres parámetros: req, res y next. Dentro de este callback, vamos a usar el parámetro res para retornar el status 404 y mostrar nuestra vista llamada "not-found". */

const express = require('express');
const app = express();
const methodOverride = require('method-override');


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride("_method"));

const rutasMain = require('./routes/mainRoutes');
const rutasProductos = require("./routes/productosRoutes");
const rutasPeliculas = require("./routes/peliculasRoutes")
const rutasCelulares = require("./routes/celularesRoutes")

app.use('/', rutasMain);
app.use('/productos', rutasProductos);
app.use("/peliculas", rutasPeliculas);
app.use('/celulares', rutasCelulares)

app.use((req,res,next) =>{
    res.status(404).send('error 404!! Not Found!!!')
})

app.listen(8000,()=>console.log("Levantando un servidor con Express en puerto 8000,\nhttp://localhost:8000"));
