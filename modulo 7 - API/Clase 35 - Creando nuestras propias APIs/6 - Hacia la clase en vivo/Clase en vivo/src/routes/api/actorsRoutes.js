const express = require('express');
const router = express.Router();
const actorsAPIController = require('../../controllers/api/actorsController');

//Listado de todos los actores
router.get('/', actorsAPIController.list);

//Detalle del actor
router.get('/:id', actorsAPIController.detail);

//Agregar un actor
router.post('/create', actorsAPIController.create);

//Modificar un actor
router.put('/update/:id', actorsAPIController.update);

module.exports = router;