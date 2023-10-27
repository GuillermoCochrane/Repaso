/* ¡Ahora vamos a validar nuestra foto de perfil!

Para esto debemos completar una ruta por post a /ver-body que como segundo parámetro cargue el avatar, que viene del formulario de registro con ese nombre, y como tercer parámetro un middleware que nos sirva para validar la imagen.
En el caso de que la imagen no se suba, deberemos crear un error llamando a la clase Error con la palabra reservada new y pasándole como parámetro un mensaje. Este error se va a enviar como parámetro del next para ser tomado en el controller.
En caso de existir una imagen, simplemente hacer un res.send de la misma. 
*/

const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { log } = require('console');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, "../img"))
    },
    filename: function(req,file, cb){
        console.log(file);
        let newFileName = "img-" + Date.now() + path.extname(file.originalname)
        cb(null, newFileName)
    }
})

const upload = multer({storage: storage})
//como el nombre de la variable storage es igual a la propiedad de multer tambien podemos configurarlo de la siguiente manera
// const upload = multer({storage})


router.get('/', (req,res) =>{
    res.sendFile( path.join(__dirname, "../views/home.html"));
});

router.post("/ver-body", upload.single("avatar"), (req,res,next) =>{
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

