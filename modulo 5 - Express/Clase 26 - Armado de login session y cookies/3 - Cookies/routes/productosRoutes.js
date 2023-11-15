/*
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