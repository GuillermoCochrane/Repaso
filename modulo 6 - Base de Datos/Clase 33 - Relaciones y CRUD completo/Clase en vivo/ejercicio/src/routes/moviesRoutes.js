const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
//Rutas exigidas para la creación del CRUD
router.get('/movies/add', moviesController.add);
router.post('/movies/create', moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.post('/movies/update/:id', moviesController.update);
router.get('/movies/delete/:id', moviesController.delete);
router.post('/movies/delete/:id', moviesController.destroy);
router.get('/movies/assign/:id', moviesController.assign);
router.post('/movies/assign/:id', moviesController.associate);
router.get('/movies/remove/:movieID/:actorID', moviesController.remove);
router.post('/movies/remove/:movieID/:actorID', moviesController.eliminate);

module.exports = router;