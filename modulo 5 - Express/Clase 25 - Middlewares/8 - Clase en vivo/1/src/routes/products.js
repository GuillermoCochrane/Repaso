// ************ Require's ************
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/productMulterMDW');
const { body } = require('express-validator');

const productValidations = [
    body('name').notEmpty().withMessage('Debes completar el nombre del producto'),
    body('price')
        .notEmpty().withMessage('Debes completar el precio del producto').bail()
        .isNumeric().withMessage('El dato ingresado debe ser un número'),
    body('discount')
        .notEmpty().withMessage('Debes completar el descuento del producto').bail()
        .isNumeric().withMessage('El dato ingresado debe ser un número'),
    body('category').notEmpty().withMessage('Debes seleccionar una categoría para el  producto'),
    body('description').notEmpty().withMessage('Debes completar la descripción del producto'),
]

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/', upload.single("productImg"), productValidations, productsController.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', upload.single("productImg"), productsController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 

/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productsController.detail);

module.exports = router;