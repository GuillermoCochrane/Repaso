/* 
2)-
Contando visitas

Imaginemos que tenemos un controlador llamado "estadisticasController" que tiene un método "contarVisita". Este médoto recibe un request y suma, en nuestra base de datos, una nueva visita a la URL del request.
Ahora bien, nos gustaría poder contar las visitas a nuestro sitio, pero no de todas las URL. Por ejemplo, no queremos contar visitas a las rutas que se acceden por post; y a algunas rutas get, como login y panel de usuario, es probable que tampoco.

Nuestro objetivo va a ser crear una función llamada visitasMiddleware que reciba como parámetros req, res y next. Dentro de esta función vamos a ejecutar el método contarVisita del controlador estadisticasController, y vamos a pasarle el objeto request como parámetro del método: estadisticasController.contarVisita(req). Al final de nuestra función vamos a ejecutar el callback next().

Finalmente vamos a agregar nuestra función visitasMiddleware como segundo parámetro de la ruta '/:id/' que ya se encuentra definida.
*/
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const estadisticasController = require('../controllers/estadisticasController')

let visitasMiddleware = (req, res, next) =>{
    estadisticasController.contarVisita(req)
    next()
}

router.get('/', productsController.all);

router.post('/crear', productsController.store);

router.get('/:id/', visitasMiddleware ,productsController.detail);

module.exports = router