const express = require('express');
const router = express.Router();
const actorsAPIController = require('../../controllers/api/actorsController');

//Listado de todos los actores
router.get('/', actorsAPIController.list);

module.exports = router;