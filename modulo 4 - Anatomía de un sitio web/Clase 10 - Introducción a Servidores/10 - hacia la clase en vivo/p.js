/* Hacia la clase en vivo
¡Recta final para la clase en vivo!

Vamos a practicar casi todo lo visto en esta unidad en este ejercicio. Es clave poder resolverlo y comprenderlo bien para estar seguros de llegar a la clase en vivo bien preparados.

Para facilitar la resolución ya que el ejercicio requiere de varias acciones dividimos la ejercitación en pasos y pruebas que validan los mismos, aunque puedes intentar resolver la ejercitación en forma directa.

¿Qué deberás hacer?. Tendrás que levantar un servidor en el puerto 3000 y responder a dos rutas get. La ruta root (/), debe responder enviando la vista en el directorio /views/home.html; y la ruta 404 (/404), debe enviar "Error página no encontrada". Para esto deberás hacer uso de la librería path y de la función sendfile entre otras cosas ya vistas.

Pasos guía / ayuda para la resolución:

1) Importar tanto el framework Express y path.

2) Crear una instancia de Express.

3) Poner al servidor a escuchar al puerto 3000.

4) Agregar la ruta 404 y enviar el mensaje correspondiente.

5) Agregar la ruta root (/) del home y enviar el archivo correspondiente.

---------------------------------------------------------------------------------------------------------------------------------------- */
const express = require('express');
const path = require("path");
const app = express();

app.listen(8000,()=>console.log("Levantando servidor en puerto 8000: http://localhost:8000"))
app.get('/', (req,res)=>{
    let direccionAbsoluta = path.join( __dirname ,"./views/home.html")
    res.sendFile(direccionAbsoluta)
} )

app.get('/404',(req,res)=>{
    res.send("ERROR, página no encontrada")
})

