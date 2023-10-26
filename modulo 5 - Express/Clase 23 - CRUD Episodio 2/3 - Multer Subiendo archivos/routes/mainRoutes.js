/* Usando Multer para la carga de archivos

Desde Node.js, para subir archivos, podemos usar herramientas como Multer. Simplemente hace falta agregarla al archivo de rutas en donde se encuentre nuestra ruta o rutas que se van a encargar de subir archivos (imágenes, documentos, etcétera).

En este ejemplo, vamos a agregar Multer al archivo de rutas user.js para permitir que durante el registro los usuarios puedan adjuntar una imagen.

Para ello será necesario requerir el módulo multer, crear el storage, inicializar la variable upload y agregar a la ruta que ya tenemos definida la expresión upload.any() como segundo parámetro.

Para ver la configuración que necesita Multer para funcionar, podemos consultar la documentación oficial en: https://www.npmjs.com/package/multer#diskstorage */

const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

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
// const upload = multer({storage: storage})


router.get('/', (req,res) =>{
    res.sendFile( path.join(__dirname, "../views/home.html"));
});

router.post("/ver-body", upload.any("avatar"), (req,res) =>{
    res.send([req.body])
})

module.exports = router

