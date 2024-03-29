/* Modificando clases

-----------------------------------------------------------------------------------------------------------------------------------------------------

Agregando clases a un elemento
Para este ejercicio contamos con un pequeño sitio y una clase de CSS definida, pero todavía no se le asignó a ningún elemento.


Por eso debemos, usando JavaScript, seleccionar al <div> y asignarle la clase 'container' que ya se encuentra definida en el archivo styles.css.

-----------------------------------------------------------------------------------------------------------------------------------------------------
 */
document.querySelector('div').classList.add('container')
/* -----------------------------------------------------------------------------------------------------------------------------------------------------

Sacando clases a un elemento
Tenemos un <h1>, pero no nos gusta cómo se ve.

Queremos, usando JavaScript, seleccionar al <h1> y sacarle la clase 'titulo'.

Sugerencia: enviar la respuesta sin resolver, así se puede visualizar la diferencia una vez que se resuelva el ejercicio.

-----------------------------------------------------------------------------------------------------------------------------------------------------
 */
let s = confirm("¿Desea cabiar el título?")
if(s){
    document.querySelector('h1').classList.remove('titulo')
}
/* 
-----------------------------------------------------------------------------------------------------------------------------------------------------


Alternando clases
A ciegas...

Tenemos un sitio con algunos elementos y clases asignadas, pero no tenemos acceso al HTML, por lo tanto no podemos ver qué clases tiene cada elemento.

En este caso, queremos trabajar con la clase titulo-tuneado. Para eso debemos, usando JavaScript, preguntar si <h1> el tiene esa clase asignada para que, si no la tiene, se la asigne y, si la tiene, se la quite.


-----------------------------------------------------------------------------------------------------------------------------------------------------
*/
document.querySelector('h1').classList.toggle('titulo-tuneado')