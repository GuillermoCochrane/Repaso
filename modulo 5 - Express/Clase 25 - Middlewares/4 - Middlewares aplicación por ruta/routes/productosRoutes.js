/* 
2)-
Contando visitas

Imaginemos que tenemos un controlador llamado "estadisticasController" que tiene un método "contarVisita". Este médoto recibe un request y suma, en nuestra base de datos, una nueva visita a la URL del request.
Ahora bien, nos gustaría poder contar las visitas a nuestro sitio, pero no de todas las URL. Por ejemplo, no queremos contar visitas a las rutas que se acceden por post; y a algunas rutas get, como login y panel de usuario, es probable que tampoco.

Nuestro objetivo va a ser crear una función llamada visitasMiddleware que reciba como parámetros req, res y next. Dentro de esta función vamos a ejecutar el método contarVisita del controlador estadisticasController, y vamos a pasarle el objeto request como parámetro del método: estadisticasController.contarVisita(req). Al final de nuestra función vamos a ejecutar el callback next().

Finalmente vamos a agregar nuestra función visitasMiddleware como segundo parámetro de la ruta '/:id/' que ya se encuentra definida.
---------------------------------------------------------------------------
3)- Redirigiendo a la HOME
Se planea dar de baja a algunas rutas en nuestro sitio. Para eso vamos a desarrollar una funcionalidad en la cual el usuario, al ingresar a una de las rutas planeadas para dar de baja, sea redirigido a la Home.
Para lograr el desarrollo de la funcionalidad hay que:

a) Definir la función redirigir que nos va a servir como middleware. Recordemos que podemos definir un middleware como una función que recibe los parámetros req, res, next.

b) Dentro de nuestra función vamos a llamar al método redirect  del objeto response y vamos a hacer una redirección hacia la URL '/'. Para este caso particular, no es necesario llamar al callback next dado que la idea de este redirect es cortar la ejecución de los posibles subsiguientes middlewares.

c) Agregar la función redirigir  como segundo parámetro de la ruta '/'.
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

router.get('/', redirigir ,productsController.all);

router.post('/crear', productsController.store);
//2)-
router.get('/:id/', visitasMiddleware ,productsController.detail);

module.exports = router