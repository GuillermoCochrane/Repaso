const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');

router.get('/actors', actorsController.list);
router.get('/actors/detail/:id', actorsController.detail);
router.get('/actors/add/', actorsController.add);
router.post('/actors/create/', actorsController.create);
router.get('/actors/edit/:id', actorsController.edit);
router.post('/actors/update/:id', actorsController.update);
router.get('/actors/delete/:id', actorsController.delete)
router.post('/actors/delete/:id', actorsController.destroy)
//router.post('/actors/confirmDelete/:id', actorsController.confirm)

module.exports = router;