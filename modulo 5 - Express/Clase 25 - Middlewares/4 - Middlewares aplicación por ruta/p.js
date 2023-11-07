/* 
---------------------------------------------------------------------------
ver mainRoutes
---------------------------------------------------------------------------
 */
const express = require('express');
const app = express();


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

app.use(express.urlencoded({extended: false}));

const rutasMain = require('./routes/mainRoutes');
const rutasProductos = require("./routes/productosRoutes");

app.use('/', rutasMain);
app.use('/productos', rutasProductos);

app.listen(8000,()=>console.log("Levantando un servidor con Express en puerto 8000,\nhttp://localhost:8000"));
