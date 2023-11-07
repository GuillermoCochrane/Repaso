/* 1)-
Agregando middleware en la ruta "subir-archivo"

A diferencia de los middleware de aplicación que se ejecutan para todas las rutas, los middleware de ruta permiten aplicar un middleware en una o varias rutas seleccionadas. Un ejemplo de esto es el middleware de Multer, que se agrega solo a las rutas que se van a encargar de subir archivos. (Recordemos que Multer es un paquete de Node.js que permite la carga de archivos en el servidor.)

Para este ejemplo ya tenemos lista la configuración de Multer, pero nos falta agregar el middleware en la ruta "/ver-body".

Para ello, vamos a tener que pasar como segundo parámetro de la ruta "subir-archivo" el middleware upload.any().
---------------------------------------------------------------------------
2)- en productosRoutes
---------------------------------------------------------------------------
3)- en productosRoutes
---------------------------------------------------------------------------
*/

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
// const upload = multer({storage})


router.get('/', (req,res) =>{
    res.sendFile( path.join(__dirname, "../views/home.html"));
});

router.post("/ver-body", upload.any("avatar"), (req,res,next) =>{
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

