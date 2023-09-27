/* Eliminando datos de un ARRAY
Dado el siguiente array con productos, debemos crear una ruta "/celular" del tipo DELETE que reciba un id y elimine un producto. Deberíamos crear una ruta para los casos celular/1, celular/2, etcétera.

Para eliminar el producto del array podemos usar la función filter igualando el array celulares.filter en donde dentro del método retornemos todos los productos que no coincidan con el id pasado como parámetro.

Si nos resulta más práctico hacerlo de otra manera, ¡adelante! Lo importante es que el producto con el id pasado por parámetro sea removido del array celulares. */
const express = require('express');
const router = express.Router();

const celulares = [
    {
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];
router.get('/', (req,res) =>{
    let filtrados = []
    let querryString= req.query.max;
    if(querryString === undefined){
        res.send(celulares)
        }else{
            for(i=0; i < celulares.length; i++){
                if (celulares[i].precio < querryString ){
                    filtrados.push(celulares[i]);
                }
            };
            res.send(filtrados)
        } 
});

router.delete('/celular/:id',(req,res) => {
    let idCelular = req.params.id
    let celularesBorrado = celulares.filter((celu)=> celu.id != idCelular)
    celulares = celularesBorrado    
    })


module.exports = router