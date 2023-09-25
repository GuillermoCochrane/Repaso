/* Buscando series
¡Listemos todas las series!

Tenemos una lista de muchas series almacenadas en la variable series. Nuestro trabajo será crear una ruta que apunte a "/series" y las devuelva a TODAS.
----------------------------------------------------------------------------------------------------------------------------------------*/

const express = require('express');
const app = express();
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

app.get('/series', (req,res) => {
    res.send(series)    
});

/* Buscar una serie
Veamos cómo armar nuestra primera ruta parametrizada con Express.

Queremos crear una ruta que apunte a "/serie" y que la misma, a su vez, reciba un número. Ese número representará el id de la serie que estamos queriendo ver. Por lo tanto, la ruta deberá devolver únicamente la serie que coincida con el id que llegó por parámetro.

Un ejemplo de cómo se vería la ruta sería el siguiente: http://localhost/serie/3

Recordemos que la variable está declarada por detrás y podemos disponer de ella con solo nombrarla. */

app.get('/series/:id', (req,res) => {
    let numSerie = req.params.id;
    let salida = series.filter ((elegida) => {
    return elegida.id == numSerie
    });
    res.send(salida[0]);    
})
app.listen(8000,()=>console.log("Levantando un servidor con Express en puerto 8000, http://localhost:8000"));
