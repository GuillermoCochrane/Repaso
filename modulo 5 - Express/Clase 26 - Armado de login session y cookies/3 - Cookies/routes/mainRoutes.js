/* 
1)-

Setear cookie:
Las cookies son sumamente sencillas de usar. Vamos a guardar en una cookie el atributo "ultimoAcceso" con el valor del date actual. La idea de esto es poder saber, cuando el usuario vuelva a entrar en nuestra web, cuánto tiempo pasó desde la última vez.
Para eso, dentro del controlador, vamos a usar el método cookie del objeto response. Este método espera, como primer parámetro, el nombre de la cookie, en este caso "ultimoAcceso". El segundo parámetro va a ser la fecha de acceso, esto lo podemos obtener haciendo new Date().

-----------------------------------------------------------------------------------------------------------------------------------------------------
2)-
Preferencias de usuario:

Nuestro sitio se puede mostrar con distintos estilos. El estilo por defecto lo llamamos "default", pero le damos la posiblidad al usuario que pueda cambiarlo. No solo eso, sino que además guardamos su elección en una cookie llamada estilo.
En este controlador, estamos renderizando una vista. Nuestro objetivo es consultar si hay algún valor guardado para el atributo estilo dentro del objeto cookies. Si es así, vamos a pasar a la vista el estilo guardado, si no, pasamos "default".

Para lograr esto debemos agregar un if para preguntar si existe el atributo estilo dentro de cookie. Si es así, dentro del if debemos configurar una variable llamada estilo con el valor guardado en la cookies. Caso contrario, en el else, debemos configurar la variable estilo con el valor "default".
-----------------------------------------------------------------------------------------------------------------------------
3)-
Recomendados:

Previamente almacenamos en el navegador de usuario una cookie llamada "preferencias". Ahora, desde este controlador, queremos mostrar un listado de productos recomendados en función de las preferencias del usuario.
Para lograr este objetivo vamos a recuperar el valor de la cookie "preferencias" y almacenarla en una constante llamada "preferencias".

A partir del valor recuperado vamos a traer todos los productos del listado de listadoProductos cuya key conincida con este valor. Almacenamos los productos en una constante llamada "productos".

Finalmente, pasamos al método render la constante productos.
*/

const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { check, validationResult, body} = require('express-validator')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, "../public/img"))
    },
    filename: function(req,file, cb){
        let newFileName = "img-" + Date.now() + path.extname(file.originalname)
        cb(null, newFileName)
    }
})

const upload = multer({storage: storage})

let validar =[
    check('email').isEmail(),
    check('password').isLength({min: 6})
]

const listadoProductos = {
	vestidos: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	remeras: [
		'remera alforzas',
		'remera bordada',
		'musculosa',
	]
}
// 2)-
router.get('/', (req,res) =>{
    let estilo = false
    let cookies = req.cookies.estilo
    if( cookies ){
        estilo = cookies;
    }
	if( estilo ){
		res.render('home', {estilo: estilo});
	}else{
		res.render('home', {estilo: "default"});
	}
});

router.get('/login', (req,res) =>{
    res.render('login');
});
// 1)-
router.post('/login', (req,res) =>{
    res.cookie( "ultimoAcceso",new Date(), {maxAge: 120000});
    res.cookie( "estilo", "estilo", {maxAge: 30000});
    req.session.admin = true;
    res.redirect('/');
});

router.get('/cambiarIdioma', (req,res) =>{
    req.session.idioma = req.query.idioma;
	res.redirect('/idioma');
});

router.get('/idioma', (req,res) =>{
    res.render('idioma', {
        idioma: req.session.idioma,
        admin: req.session.admin,
    });
});

// 3)-
router.post("/preferencias", (req,res)=> {
    let preferencias = req.body.preferencias;
    res.cookie( "preferencias", preferencias, {maxAge: 30000});
    res.redirect('/')
})

router.get("/preferencias", (req,res)=>{
        let cookie = req.cookies.preferencias;
        let productos = ["opción no válida"]
        if (cookie == 1){
            productos = listadoProductos.vestidos
        } else if(cookie == 2){
            productos = listadoProductos.remeras
        }
        res.send(productos)
})

router.post("/ver-body", upload.single("avatar"), validar , (req,res,next) =>{
    let file = req.file;
    if(!file){
        const error = new Error ('La imagen no cargo')
        error.httpStatusCode = 400
        return next(error);
    }else{
        res.send([file, req.body])
    }
})

module.exports = router

