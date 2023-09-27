/* Usando query string para filtrar
Imaginemos que tenemos una web que muestra productos. Nos gustaría poder mostrar el listado de todos lo productos. Por 
defecto, vamos a mostrar todos los productos sin importar a qué categoría pertenecen y los vamos a ordenar alfabéticamente 
según el nombre del producto. Pero también queremos darle la posibilidad al usuario que filtre por categoría y ordene por 
otro campo (por ejemplo: precio). Nos damos cuenta que la mejor opción para esto es usar una ruta que reciba un query 
string.
Por lo tanto, debemos realizar las siguientes tareas:

Crear la ruta "/productos".
A partir del request, recuperar el query string y mostrarlo usando el método send del objeto response. */

const express = require('express');
const router = express.Router();

/* http://localhost:8000/productos?producto=celular
devuelve: 
{
    "producto": "celular"
}
*/


router.get('/', (req,res) =>{
    let string = req.query
    res.send(string);
});


module.exports = router