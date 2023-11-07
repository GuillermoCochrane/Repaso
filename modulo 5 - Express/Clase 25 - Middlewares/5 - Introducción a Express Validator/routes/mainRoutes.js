/* 1)-Ejercitación
Ya tenemos nuestra ruta de registro. Lo que necesitamos hacer ahora es agregar una validación para que el campo e-mail sea del tipo mail y la contraseña tenga por lo menos 6 caracteres.
Para lograrlo vamos a requerir el módulo express-validator y usando el operador de destructuración vamos inicializar tres constantes: check, validationResult y body.
En nuestra ruta vamos a agregar como segundo parámetro un array. El array va a tener solo dos posiciones: una para validar el input "email" y otra para validar el input "password".
En cada posición del array, vamos a usar la función check pasando como parámetro el input a validar y vamos a concatenar a la ejecución de esta función una segunda función que va a ser la regla que queremos que cumpla nuestro input. Por ejemplo: isEmail.
-----------------------------------------------------------------------------------------
*/

const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { check, validationResult,body} = require('express-validator')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, "../img"))
    },
    filename: function(req,file, cb){
        let newFileName = "img-" + Date.now() + path.extname(file.originalname)
        cb(null, newFileName)
    }
})

const upload = multer({storage: storage})
//como el nombre de la variable storage es igual a la propiedad de multer tambien podemos configurarlo de la siguiente manera
// const upload = multer({storage})

//------------
let validar =[
    check('email').isEmail(),
    check('password').isLength({min: 6})
]
//------------

router.get('/', (req,res) =>{
    res.sendFile( path.join(__dirname, "../views/home.html"));
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

