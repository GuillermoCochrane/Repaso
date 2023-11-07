/* 
---------------------------------------------------------------------------
*/
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
//2)-
const estadisticasController = require('../controllers/estadisticasController')

let visitasMiddleware = (req, res, next) =>{
    estadisticasController.contarVisita(req)
    next()
}
//---------------------------
//3)-
let redirigir  = (req, res, next)=>{
    res.redirect('/')
}

router.get('/', /* redirigir , */productsController.all);

router.post('/crear', productsController.store);
//2)-
router.get('/:id/', visitasMiddleware ,productsController.detail);

module.exports = router