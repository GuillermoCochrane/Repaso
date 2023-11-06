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

----------------------------------------------------------------------------------------------------------------------------
3)- Agregando la propiedad usuario

En el siguiente ejemplo tenemos definido un usuario dentro de la constante "usuario". Usando un middleware, debemos agregar en el objeto request la propiedad usuario con el valor de nuestra constante. De esta manera, todas las rutas deberían poder recuperar el valor de usuario mediante el objeto request. Ejemplo: req.usuario.
Para lograr esto vamos a llamar al método use de app y pasarle una función. Esta función debe recibir tres argumentos: req, res y next. Nosotros vamos a agregar al objeto req un nuevo parámetro llamado usuario y pasarle como valor la constante "usuario".

Finalmente debemos ejecutar el callback next.
 */

const express = require('express');
const app = express();

// 1)-
const middlewareJSON = express.json()
app.use(middlewareJSON)
// 2)-
let enMantenimiento = false;

const enMantenimientoMiddleware = (req, res, next) =>{
    if (enMantenimiento == true){
        return res.send('En Mantenimiento')
    }
    next()
}
app.use(enMantenimientoMiddleware)
// 3)- 
const usuario = {
    nombre: 'Máximo',
    apellido: 'Cozzetti'
};
const usuarioMiddleware = (req, res,  next) =>{
    req.usuario = usuario;
    next()
}
app.use(usuarioMiddleware)
//------------------------------------------------------

app.use(express.urlencoded({extended: false}));

const rutasMain = require('./routes/mainRoutes');
const rutasProductos = require("./routes/productosRoutes");

app.use('/', rutasMain);
app.use('/productos', rutasProductos);

app.listen(8000,()=>console.log("Levantando un servidor con Express en puerto 8000,\nhttp://localhost:8000"));
