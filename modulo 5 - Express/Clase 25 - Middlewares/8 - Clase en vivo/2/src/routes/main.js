// ************ Require's ************
const express = require('express');
const router = express.Router();
const adminMDW = require('../middlewares/adminMDW');

// ****../middlewares/adminMDW ******** Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/admin', adminMDW, mainController.search);
router.get("/services", mainController.redirect)
router.get("/products", mainController.redirect)
router.get("/user", mainController.redirect)

module.exports = router;
