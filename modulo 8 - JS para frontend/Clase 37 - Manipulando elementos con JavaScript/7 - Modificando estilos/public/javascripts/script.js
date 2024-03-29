/* Modificando estilos
-----------------------------------------------------------------
Veamos cómo alterar los estilos de un documento HTML usando JavaScript.

Para este ejercicio debemos:

Seleccionar el <body> y asignarle el color 'lightskyblue' para el fondo.
Seleccionar el <h2> y centrarlo con la propiedad text-align.
Seleccionar el <h4> y cambiar el texto a itálica con la propiedad font-style.
-----------------------------------------------------------------
 */
let confirmChanges = confirm("¿Desea cambiar los estilos?");
if(confirmChanges){
    document.querySelector('body').style.backgroundColor = 'lightskyblue';
    document.querySelector('h2').style.textAlign = 'center'
    document.querySelector('h4').style.fontStyle = 'italic'
/* 
2)-
-----------------------------------------------------------------
¡Modificando estilos a varios elementos a la vez!
Intentemos cambiarle el estilo a muchos elementos a la vez.

Recordemos el querySelectorAll(). Este método nos devolvía algo similar a un array...

Para este ejercicio queremos:

Crear la variable libros.
Almacenar en esa variable todos los <li> usando querySelectorAll()
Dentro del ciclo for of que está definido en el archivo, asignarle a cada libro el color 'orange', usando la propiedad color.
-----------------------------------------------------------------
*/
let libros = document.querySelectorAll('li')
for(let libro of libros) {
    libro.style.color = 'orange'
}
}