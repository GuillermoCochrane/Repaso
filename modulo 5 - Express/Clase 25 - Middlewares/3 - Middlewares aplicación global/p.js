/* Agregando el middleware express.json()

1)- ¡Sin middleware no hay JSON!

Resulta muy común enviar en el body de un request datos en formato JSON. Es por eso SÚPER importante incorporar un middleware que nos permita usar esta estructura directamente dentro de nuestro proyecto en Express. Acceder a este middleware es sencillo: simplemente invocamos la función json() en nuestro módulo importado de Express, luego debemos decirle, a esa misma instancia, que agregue ese middleware.

Dado el siguiente código, debemos indicarle a Express que queremos incorporar el middleware.
----------------------------------------------------------------------------------------------------------------------------
2)- Sitio en mantenimiento

Aprovechando la capacidad de los middlewares, vamos a crear un código que nos permitirá poner a nuestro sitio en "mantenimiento". Cuando el usuario intente ingresar a cualquier ruta, se le presentará la vista de mantenimiento.
Para resolver la ejercitación contamos con la variable enMantenimiento seteada por defecto con el valor false. Lo que debemos realizar es:

A) Hacer que el método use de app reciba un middleware. Recordemos que podemos definir un middleware como una función que recibe los parámetros req, res y next.

B) Implementar la lógica de negocio de forma tal que si la variable enMantenimiento es true, esta debe renderizar la página "mantenimiento", caso contrario, debe continuar con el flujo normal (next()).
 */
const express = require('express');
const app = express();

const middlewareJSON = express.json()
let enMantenimiento = false;

const enMantenimientoMiddleware = (req, res, next) =>{
    if (enMantenimiento == true){
        return res.send('En Mantenimiento')
    }
    next()
}

app.use(enMantenimientoMiddleware)
app.use(middlewareJSON)
app.use(express.urlencoded({extended: false}));

const rutasMain = require('./routes/mainRoutes');
const rutasProductos = require("./routes/productosRoutes");

app.use('/', rutasMain);
app.use('/productos', rutasProductos);

app.listen(8000,()=>console.log("Levantando un servidor con Express en puerto 8000,\nhttp://localhost:8000"));
