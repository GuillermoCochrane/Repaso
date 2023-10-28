// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, "../../public/images/products"))
    },
    filename: function(req,file, cb){
        console.log(file);
        let newFileName = "product" + Date.now() + path.extname(file.originalname)
        cb(null, newFileName)
    }
})

const upload = multer({storage})

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/', upload.single("productImg"), productsController.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', upload.single("productImg"), productsController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 

/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productsController.detail);

module.exports = router;