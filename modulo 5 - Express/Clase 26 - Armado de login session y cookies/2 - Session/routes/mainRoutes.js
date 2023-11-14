/* 2)-
Cambiando idioma:

Tenemos un controlador que se va a encargar de guardar en Session el idioma de preferencia del usuario. Más tarde, podemos usar esta variable de Session para mostrar el contenido en el idioma seleccionado.

Para ello, dentro del controlador, vamos a guardar el valor del parámetro idioma que recibimos por get dentro del atributo idioma del objeto session. Recordemos que para guardar información dentro del objeto session debemos hacerlo a partir del request: req.session.

Para recuperar la información del idioma que nos envía el usuario lo hacemos a través del objeto query: req.query.idioma.

-----------------------------------------------------------------------------------------------------------------------------------------------------

const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({secret: "frase secreta"}));

const cambiarIdioma = (req, res) => {
	req.session.idioma = req.query.idioma;
	res.redirect('/');
}

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

router.get('/', (req,res) =>{
    res.render('home');
});

router.get('/cambiarIdioma', (req,res) =>{
    req.session.idioma = req.query.idioma;
	res.redirect('/idioma');
});

router.get('/idioma', (req,res) =>{
    res.render('idioma', {idioma: req.session.idioma});
});

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

