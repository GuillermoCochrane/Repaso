//modulos , configuraciones, datos
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const publicPath = path.resolve(__dirname , './public');

//seteamos la carpeta de recursos estáticos
app.use(express.static(publicPath));

// funcion para generear rutas
let routerHTML = (endpoint) =>{
    app.get('/'+endpoint, (req,res) => { 
        res.sendFile(path.join( __dirname ,"./views/"+endpoint+".html"))
    } );
};
let endpoints = ["disponiendo-uls","respetando-medidas"]

//ruteo

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/index.html"));
})

endpoints.forEach((endpoint)=> routerHTML(endpoint));

//Levantamos el servidor
app.listen(port, ()=>{console.log("Levantando servidor en puerto " + port + ": http://localhost:" + port)
});
