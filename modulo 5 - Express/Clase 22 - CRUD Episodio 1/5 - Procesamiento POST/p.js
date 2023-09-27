/* Preparando la constante para trabajar con POST
Ahora vamos a trabajar con POST. Recordemos que las URL del tipo POST se suelen usar para guardar información en nuestra base de datos o enviar información sensible.

Para recuperar los datos enviados, lo hacemos a partir del atributo body del objeto request. Pero antes es necesario indicarle a Express que vamos a trabajar con JSON y que la información la envíe en el formato correcto. Para eso es necesario ejecutar dos líneas de código mediante el método use del objeto app.

Ya teniendo creada la constante app, debemos usarla para agregar la configuración necesaria (urlenconded y json) para trabajar con POST. */
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const rutasMain = require('./routes/mainRoutes');
const rutasProductos = require("./routes/productosRoutes");

app.use('/', rutasMain);
app.use('/productos', rutasProductos);


app.listen(8000,()=>console.log("Levantando un servidor con Express en puerto 8000,\nhttp://localhost:8000"));
