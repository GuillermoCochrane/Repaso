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

app.get('/primerSelector', (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/primerSelector.html"));
})

app.get('/masSelectores', (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/masSelectores.html"));
})

app.get('/atributoClass', (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/atributoClass.html"));
})

app.get('/css', (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/css.html"));
})

//Levantamos el servidor
app.listen(port, ()=>{console.log("Levantando servidor en puerto " + port + ": http://localhost:" + port)
});
