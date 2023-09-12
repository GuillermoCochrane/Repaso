//modulos y configuraciones 
const express = require("express");
const path = require("path");
const app = express();

const port = 3003;
const publicPath = path.join(__dirname, "./public")

// seteamos la carpeta de recursos estáticos

app.use(express.static(publicPath));

//rutas
app.get('/', (req,res) => {
    res.send("probando 1, 2, 3, probando...")
});

//levantamos el server

app.listen(port, ()=>{console.log("Levantando servidor en puerto " + port + ": http://localhost:" + port)
});
