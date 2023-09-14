//modulos , configuraciones, datos
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const publicPath = path.resolve(__dirname , './public');

//seteamos la carpeta de recursos estáticos
app.use(express.static(publicPath));

//ruteo

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/index.html"));
})

app.get('/ejercicio', (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/ejercicio.html"));
})

//Levantamos el servidor
app.listen(port, ()=>{console.log("Levantando servidor en puerto " + port + ": http://localhost:" + port)
});
