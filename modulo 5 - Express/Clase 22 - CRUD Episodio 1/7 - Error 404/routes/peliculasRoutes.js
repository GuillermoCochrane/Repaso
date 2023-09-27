
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