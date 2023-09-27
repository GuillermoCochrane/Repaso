/* Seteando un objeto con Data de POST
Para este ejercicio tenemos un objeto ya creado que tiene dos atributos, ambos están seteados en null. Nosotros vamos a tener que indicar un valor para cada uno de nuestros atributos según los datos que nos envien por POST.

Para ello vamos a crear una ruta del tipo POST que apunte a "/productos/crear". Va a ser a esta ruta donde el usuario nos envíe dos datos: nombre y precio del producto.

Luego, vamos a recuperar esos datos a partir del atributo body del request y se los vamos a asignar a nuestro objeto producto.

Una vez finalizado, debemos enviar el objeto producto al usuario usando el método send.  */

const express = require('express');
const router = express.Router();

let producto = {
    nombre: null,
    precio: null
};

router.get('/', (req,res) =>{
    res.send("Productos");
});
router.post('/crear', (req,res) =>{
    producto.nombre = req.body.nombreProducto;
    producto.precio = req.body.precioProducto;
    res.send(producto)
})


module.exports = router