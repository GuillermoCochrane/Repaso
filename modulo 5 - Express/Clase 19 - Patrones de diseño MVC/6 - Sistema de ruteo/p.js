/* 1)- Modularizar rutas
Modularicemos las rutas para las series.

Queremos que el archivo series.js administre TODOS los request del recurso. Debemos, como primer paso, crear la variable express y almacenar en ella el módulo express.

Luego, deberemos crear la variable router y almacenar en ella la ejecución del método que nos permite manejar un sistema de rutas. (en archivo seriesRoutes.js)
--------------------------------------------------------------------------------------------------------------------------------
2)- Exportar rutas
En este ejercicio ya tenemos definidas las rutas relacionadas con los request de series.

Nuestro trabajo será hacer visible ese código para que podamos acceder al mismo desde otros archivos.

¿Cómo podemos hacerlo? ¿Quién es el encargado de modularizar todas estas rutas definidas? (en archivo seriesRoutes.js)
*/



const express = require('express');
const app = express();
const rutasSeries = require('./routes/seriesRoutes')

app.use('/series', rutasSeries)

app.get('/', (req,res) => res.redirect("/series"))

/*  */


app.listen(8000,()=>console.log("Levantando un servidor con Express en puerto 8000, http://localhost:8000"));
