/* 1)-
Configurando session:

Ahora vamos a trabajar con Session. Este nos sirve para guardar información sobre el usuario independientemente de que este cambie de URL. Pero antes de poder usar Session es necesario hacer una pequeña configuración.
En este ejercicio vamos a tener que hacer un require de "express-session" y guardarlo dentro de la constante session.

Luego, debemos inicializar el middleware de Session: session({secret: "frase secreta"}).
*/
const express = require('express');
const app = express();
const path = require('path');
//-------
//1)-
const session = require('express-session');
app.use(session({secret: "frase secreta", resave: false, saveUninitialized: false}))
//-------
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({ extended: false }))


const middlewareJSON = express.json()
app.use(middlewareJSON)

let enMantenimiento = false;

const enMantenimientoMiddleware = (req, res, next) =>{
    if (enMantenimiento == true){
        return res.send('En Mantenimiento')
    }
    next()
}

app.use(enMantenimientoMiddleware)

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


const rutasMain = require('./routes/mainRoutes');
const rutasProductos = require("./routes/productosRoutes");

app.use('/', rutasMain);
app.use('/productos', rutasProductos);

app.listen(8000,()=>console.log("Levantando un servidor con Express en puerto 8000,\nhttp://localhost:8000"));
