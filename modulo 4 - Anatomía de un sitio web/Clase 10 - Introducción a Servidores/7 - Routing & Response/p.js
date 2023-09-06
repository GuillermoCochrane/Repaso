/* Routing & Response

----------------------------------------------------------------------------------------------------------------------------------------

Ruta GET home
Exploremos los diferentes métodos que podemos usar con el módulo express.

Nuestro trabajo será, utilizando el método get, crear una ruta hacia "/home" que devuelva la frase "Hola, estamos en el home". 

---------------------------------------------------------------------------------------------------------------------------------------- */
const express = require('express');
const app = express();
app.listen(8000,()=>console.log("Levantando servidor en puerto 8000: http://localhost:8000"));

app.get('/home', (req, res) => {
    res.send("Hola, estamos en el home");
});

/* ---------------------------------------------------------------------------------------------------------------------------------------
Ruta GET perfil
Vayamos a nuestro perfil:

Queremos crear una ruta que use el método get y que apunte a "/perfil". Esta deberá devolver la variable saludo que está ya declarada.
----------------------------------------------------------------------------------------------------------------------------------------
 */

let saludo = "Bienvenido/a, ahora estamos en tu perfil"
app.get ('/perfil', (req,res) => {
    res.send(saludo);
});

/* ----------------------------------------------------------------------------------------------------------------------------------------

Ruta GET agregar producto
Queremos enviar a la vista un producto vacío:

Para empezar, debemos crear la variable producto. Esta tendrá que almacenar un objeto con las siguientes propiedades: tipoProducto, precio y cantidad, en donde, cada una de ellas deberá tener como valor null, ya que, de momento, no tenemos ningún dato.

Por último, debemos crear una ruta que use el método get y que apunte a "/producto/agregar". Esta deberá devolver la variable producto que creaste.

---------------------------------------------------------------------------------------------------------------------------------------- */


let producto ={
    tipoProducto: null,
    precio: null,
    cantidad: null
};
app.get ('/producto/agregar', (req,res) => {
    res.send(producto);
});

