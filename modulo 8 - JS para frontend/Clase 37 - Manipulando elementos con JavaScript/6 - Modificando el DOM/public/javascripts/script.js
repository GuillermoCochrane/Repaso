/* Modificando el DOM

https://www.w3schools.com/js/js_htmldom_nodes.asp

-----------------------------------------------------------------
Sumando texto a un elemento con contenido
El subtítulo del <h3> nos quedó corto y queremos agregar un pequeño texto al final del mismo usando JavaScript.

Para eso debemos, usando el método innerText, seleccionar la etiqueta <h3> y sumarle el texto "usando código" al final.

No olvidemos agregar el espacio correspondiente para que no queden los textos encimados. Deberemos ver en el navegador el siguiente resultado:

Javascript Front

Agregando contenido usando código
-----------------------------------------------------------------
 */
let styles = confirm("¿Desea cambiar los estilos?");
if(styles){
window.addEventListener('load', function() {
    document.querySelector('h3').innerText += " usando código"});
/* 
2)-
-----------------------------------------------------------------
Agregando etiquetas
¡Agreguemos etiquetas!

Para este ejercicio queremos:

Seleccionar la etiqueta <body> usando querySelector()
Agregar la siguiente etiqueta tal cual está: <mark>Javascript ROCKS</mark>


Pero ojo: el <body> ya tiene las etiquetas <h1> y <h3> definidas y no queremos que se borren.
-----------------------------------------------------------------
*/
window.addEventListener('load', function() {
    document.querySelector('body').innerHTML += ' <mark>Javascript ROCKS</mark>'
});
}