/* Agregando el middleware express.json()

1)- ¡Sin middleware no hay JSON!

Resulta muy común enviar en el body de un request datos en formato JSON. Es por eso SÚPER importante incorporar un middleware que nos permita usar esta estructura directamente dentro de nuestro proyecto en Express. Acceder a este middleware es sencillo: simplemente invocamos la función json() en nuestro módulo importado de Express, luego debemos decirle, a esa misma instancia, que agregue ese middleware.

Dado el siguiente código, debemos indicarle a Express que queremos incorporar el middleware.
---------------------------------------------------------------------------------------------------------------------------- */
const express = require('express');
const app = express();

const middlewareJSON = express.json()
//Agrear el middleware aquí

app.use(middlewareJSON)
app.use(express.urlencoded({extended: false}));

const rutasMain = require('./routes/mainRoutes');
const rutasProductos = require("./routes/productosRoutes");

app.use('/', rutasMain);
app.use('/productos', rutasProductos);


app.listen(8000,()=>console.log("Levantando un servidor con Express en puerto 8000,\nhttp://localhost:8000"));
