const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

/* 
//Rutas exigidas para la creación del CRUD 
router.put('/movies/update/:id', moviesController.update);
router.get('/movies/delete/:id', moviesController.delete); */

router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.detail);
router.get('/recommended', moviesController.recomended);
router.post('/create', moviesController.create);
router.delete('/delete/:id', moviesController.destroy);

module.exports = router;