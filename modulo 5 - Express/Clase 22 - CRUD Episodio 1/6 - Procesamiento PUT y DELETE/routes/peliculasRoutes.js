/* Vamos a tratar de crear una ruta JSON style
Tenemos un JSON con tres películas.

Vamos a tratar de crear una ruta para editar los datos de una película en particular. Un usuario va a tener que ser capaz de enviar datos a través de un formulario y, nosotros, debemos editar la película elegida. Para indicar la película a modificar nos va a llegar, en la URL, el id correspondiente. Es decir, que deberíamos crear una ruta del tipo PUT para los casos pelicula/1, pelicula/2, etcétera.

Para eso vamos a tener que, a partir del objeto router, crear una ruta del tipo PUT que responda a cualquiera de las URLs antes mencionadas.

Debemos ser capaces de identificar la película dependiendo del id que nos pasen cómo parámetro y actualizar sus datos con aquellos que nos envían. */

const express = require('express');
const router = express.Router();
const path = require('path');

let peliculas = [
    {
        id: 1,
        titulo: 'Spider-Man: Lejos de casa',
        duracion: 129,
        genero: 'Aventura'
    },
    {
        id: 2,
        titulo: 'Toy Story 4',
        duracion: 100,
        genero: 'Animación'
    },
    {
        id: 3,
        titulo: 'X-Men: Fénix Oscura',
        duracion: 113,
        genero: 'Acción'
    }
];

router.get('/', (req,res) =>{
    res.send('peliculas')
});

router.put('/pelicula/:id',(req,res) => {
    let idPelicula = req.params.id
    for(i=0; i<peliculas.length; i++){
        if(peliculas[i].id==idPelicula){
            peliculas[i].titulo =  req.body.titulo;
            peliculas[i].duracion = req.body.duracion;
            peliculas[i].genero = req.body.genero;
        }
    }
});



module.exports = router