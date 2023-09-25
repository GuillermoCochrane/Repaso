const express = require('express');
const router = express.Router();

const series = [
    {
        id:1, 
        nombre:"Game Of Thrones"
    },
    {
        id:2, 
        nombre:"Breaking Bad"
    },
    {
        id:3, 
        nombre:"The Walking Dead"
    },
    {
        id:4, 
        nombre:"Westworld"
    },
    {
        id:5, 
        nombre:"The Witcher"
    },
    {
        id:6, 
        nombre:"The 100"
    },
    {
        id:7, 
        nombre:"The Mandalorian"
    },
    {
        id:8, 
        nombre:"Ozark"
    },
    {
        id:9, 
        nombre:"Dark"
    },
    {
        id:10, 
        nombre:"The Handmaid's Tale"
    },
    {
        id:11, 
        nombre:"Stranger Things"
    },
    {
        id:12, 
        nombre:"Cobra Kai"
    },
]

router.get('/', (req,res) => {
    res.send(series)    
});
router.get('/crear', (req,res) => {
    res.send('Creando nueva serie')    
});
router.get('/:id', (req,res) => {
    let numSerie = req.params.id;
    let salida = series.filter ((elegida) => {
    return elegida.id == numSerie
    });
    res.send(salida[0]);    
})

module.exports = router