/* Los formularios en HTML solo soportan los métodos GET y POST. Es por eso que en nuestros archivos de Node.js debemos usar la dependencia "method-override", para poder simular el envío de datos mediante PUT o DELETE. Pero también es necesario agregar, en el atributo action de nuestros formularios, un query string para que los datos se envíen correctamente. Dado el siguiente formulario, modifiquemos el action para que permita el envío de datos mediante PUT.  */

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
router.put("/actualizar",(req,res)=>{
    res.send("producto actualizado")
})


module.exports = router