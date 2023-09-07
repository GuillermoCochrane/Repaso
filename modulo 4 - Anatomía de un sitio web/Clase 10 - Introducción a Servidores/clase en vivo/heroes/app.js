// Dependencias,  datos y configuraciones
const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

app.use(express.static("./public"));

// funcion para generear rutas
let routerHTML = (endpoint) =>{
    app.get('/'+endpoint, (req,res) => { 
        res.sendFile(path.join( __dirname ,"./views/"+endpoint+".html"))
    } );
};

let endpoints = ["babbage","berners-lee","hamilton","hopper","lovelace","turing","clarke"];

//sistema de ruteo

app.get('/', (req,res) => { 
    res.sendFile(path.join( __dirname ,"./views/index.html"))
} );

app.get('/home', (req,res) => { 
    res.sendFile(path.join( __dirname ,"./views/index.html"))
} );

endpoints.forEach((endpoint)=> routerHTML(endpoint));

/* 
app.get('/babbage', (req,res) => { 
    res.sendFile(path.join( __dirname ,"./views/babbage.html"))
} );

app.get('/berners-lee', (req,res) => { 
    res.sendFile(path.join( __dirname ,"./views/berners-lee.html"))
} );

app.get('/hamilton', (req,res) => { 
    res.sendFile(path.join( __dirname ,"./views/hamilton.html"))
} );

app.get('/hopper', (req,res) => { 
    res.sendFile(path.join( __dirname ,"./views/hopper.html"))
} );

app.get('/lovelace', (req,res) => { 
    res.sendFile(path.join( __dirname ,"./views/lovelace.html"))
} );

app.get('/turing', (req,res) => { 
    res.sendFile(path.join( __dirname ,"./views/turing.html"))
} );

app.get('/clarke', (req,res) => { 
    res.sendFile(path.join( __dirname ,"./views/clarke.html"))
} );
 */

//ponemos el servidor en marcha

app.listen(port, ()=>{console.log("Levantando servidor en puerto " + port + ": http://localhost:" + port)
});
