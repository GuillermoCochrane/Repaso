/* Ejercitación

En este ejemplo tenemos un controller con un método store. Nosotros debemos reformular este método agregando un if para chequear que no haya errores de validación. En caso de que haya errores, debemos devolver la vista con los errores.

Para esto vamos a crear una constante llamada errores y le vamos a asignar la ejecución de la función validationResult.
Luego, en un if vamos a llamar al método isEmpty del objeto errores.
En caso de que el método nos devuelva false (no está vacio porque contiene errores), vamos a devolver la vista login con los errores.
Para devolver la vista de login debemos usar el método render del objeto response. Recordemos que para recuperar los errores debemos usar el método array del objeto errores.

--------------------------------------------------------
*/
const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const productsController = require('../controllers/productsController');

const estadisticasController = require('../controllers/estadisticasController')

let visitasMiddleware = (req, res, next) =>{
    estadisticasController.contarVisita(req)
    next()
}
//---------------------------
let redirigir  = (req, res, next)=>{
    res.redirect('/')
}
//---------------------------
let validar =[
    body('nombreProducto').notEmpty().withMessage("Debes ingresar el nombre del producto"),
    body('precioProducto').notEmpty().withMessage("Debes ingresar el precio del producto")
]

router.get('/', /* redirigir , */productsController.all);

router.post('/crear',validar, productsController.store);

router.get('/:id/', visitasMiddleware ,productsController.detail);

module.exports = router