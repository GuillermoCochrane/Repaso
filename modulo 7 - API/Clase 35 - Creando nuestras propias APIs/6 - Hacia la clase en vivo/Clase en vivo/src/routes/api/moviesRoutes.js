const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

/* 
//Rutas exigidas para la creación del CRUD 
 */

router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.detail);
router.get('/recommended', moviesController.recomended);
router.post('/create', moviesController.create);
router.put('/update/:id', moviesController.update)
router.delete('/delete/:id', moviesController.destroy);

module.exports = router;