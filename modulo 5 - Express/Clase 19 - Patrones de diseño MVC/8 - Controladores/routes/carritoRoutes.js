const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

router.get('/',  carritoController.index);
router.get("/sacar", carritoController.sacarItem)
router.get("/consultar", carritoController.consultarItem)
router.get('/:item', carritoController.agregarItem )

module.exports = router