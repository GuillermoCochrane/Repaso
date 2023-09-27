//enunciados en archivos de rutas
const express = require('express');
const app = express();
const rutasCelulares = require('./routes/celularesRoutes')
const rutasProductos = require("./routes/productosRoutes")

app.get('/', (req,res) => res.send('Home'))
app.use('/productos', rutasProductos)
app.use('/celulares', rutasCelulares)


app.listen(8000,()=>console.log("Levantando un servidor con Express en puerto 8000,\nhttp://localhost:8000"));
