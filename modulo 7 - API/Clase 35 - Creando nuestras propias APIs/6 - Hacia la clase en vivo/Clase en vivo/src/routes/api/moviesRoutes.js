const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

/* 

router.get('/movies/recommended', moviesController.recomended);

//Rutas exigidas para la creación del CRUD 
router.get('/movies/add', moviesController.add);
router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/update/:id', moviesController.update);
router.get('/movies/delete/:id', moviesController.delete); */
router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.detail);
router.post('/create', moviesController.create);
router.delete('/delete/:id', moviesController.destroy);

module.exports = router;