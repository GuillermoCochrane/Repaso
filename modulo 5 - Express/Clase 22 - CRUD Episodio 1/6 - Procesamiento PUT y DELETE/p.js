/* Asegurando la compatibilidad con PUT y DELETE
Ahora vamos a trabajar con rutas del tipo PUT y DELETE. Recordemos que las URL del tipo PUT se suelen usar para modificar la información, mientras que las rutas del tipo DELETE se utilizan para eliminar registros. Dado que estos métodos no son soportados por todos los navegadores, es necesario usar la dependencia method-override para asegurar la compatibilidad. Para eso, en este ejercicio, vamos a crear la constante methodOverride que requiera el módulo "method-override" y luego configurar el objeto app pasándole al método use la expresión methodOverride ("_method").

Consejo: recordemos que cuando estemos trabajando en nuestro proyecto la dependencia method-override no viene por defecto en Node.js, va a ser necesario que la instalemos ejecutando el siguiente comando en consola: npm install method-override --save */
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

app.listen(8000,()=>console.log("Levantando un servidor con Express en puerto 8000,\nhttp://localhost:8000"));
