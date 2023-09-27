/* Filtrando por precio
Tenemos un listado de celulares, cada uno con su precio. Vamos a crear una ruta "/celulares" del tipo GET para listarlos a 
todos.

Para mostrar el listado debemos usar el método send del parámetro response.

Ahora bien, también nos gustaría poder filtrar la lista de celulares en función del precio. El usuario debería acceder a 
una URL que tenga un query string con el parámetro "max".

A partir de ese parámetro, nosotros tenemos que ser capaces de devolver la lista, pero solo mostrando aquellos celulares 
cuyo precio no supere el valor del parámetro "max".

Es decir, si el usuario accede a la URL  "/celulares?max=20000", deberíamos listar todos los modelos menos el "Samsung 
Galaxy A50". */

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
module.exports = router