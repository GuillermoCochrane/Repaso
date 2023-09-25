//requerimos modulos
const express = require('express');
const path = require("path");
const app = express();
const mainRoute = require("./routers/mainRouter.js")

//variables de configuración

const port = process.env.PORT || 3003
const publicPath = path.join(__dirname, "./public")

// seteamos la carpeta de recursos estáticos

app.use(express.static(publicPath));

//seteamos las rutas
app.use('/', mainRoute)


app.listen(port, () =>
console.log(`Levantando un servidor con Express en puerto ${port}
\nhttp://localhost:${port}`));