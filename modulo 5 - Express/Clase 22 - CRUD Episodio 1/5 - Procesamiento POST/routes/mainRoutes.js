/* Recuperando información de POST
A diferencia de las rutas del tipo GET, en donde se recupera la información enviada a través del método query; en las rutas del tipo POST, lo hacemos por medio del atributo body del objeto request.
Vamos a crear una ruta del tipo POST llamada "/ver-body", en donde, a través del método send, mostremos en el navegador el contenido del atributo body.

Primero tenemos que crear la constante router y asignarle el objeto Router de Express.

Debemos crear la ruta mediante el método post del objeto Router. */

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req,res) =>{
    res.sendFile( path.join(__dirname, "../views/home.html"));
});
router.post("/ver-body", (req,res) =>{
    res.send(req.body)
})


module.exports = router