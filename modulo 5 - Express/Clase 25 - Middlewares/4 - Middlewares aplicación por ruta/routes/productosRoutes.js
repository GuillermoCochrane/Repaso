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