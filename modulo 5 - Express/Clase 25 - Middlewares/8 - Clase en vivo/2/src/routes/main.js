// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/search', mainController.search);
router.get("/services", mainController.redirect)
router.get("/products", mainController.redirect)
router.get("/user", mainController.redirect)

module.exports = router;
