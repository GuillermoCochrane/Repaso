/* Creando nuestra primera ruta con Express

Vamos a crear nuestra primera ruta con Express.

Para ello, debemos crear la constante llamada express y asignarle el módulo express.

Luego, crear la constante llamada router y asignarle el objeto Router de express.

Finalmente, usando la constante router, debemos crear una ruta "/peliculas" que responda al método GET.

Para chequear que todo está funcionado hagamos que la ruta devuelva la respuesta "Listado de películas".
*/



const express = require('express');
const app = express();
const rutasPeliculas = require('./routes/peliculasRoutes')

app.get('/', (req,res) => res.send('Home'))
app.use('/peliculas', rutasPeliculas)



/*  */


app.listen(8000,()=>console.log("Levantando un servidor con Express en puerto 8000,\nhttp://localhost:8000"));
