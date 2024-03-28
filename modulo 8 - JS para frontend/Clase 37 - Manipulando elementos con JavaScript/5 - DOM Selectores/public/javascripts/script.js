/* 
DOM Selectores
-----------------------------------------------------------------
1)-
Manipulando elementos con JavaScript

Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.

En este ejercicio debemos:

Crear la variable tituloPelicula.
Almacenar en esa variable el elemento h2 del documento HTML.
Deberemos usar el método del objeto document que nos permita seleccionar la etiqueta <h2> del documento.

-----------------------------------------------------------------
 */

window.addEventListener('load', function() {
    let tituloPelicula = document.querySelector('h2');
    console.log(tituloPelicula);
});

/* 
2)-
-----------------------------------------------------------------
Manipulando elementos con JavaScript II
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.

En este ejercicio debemos:

Crear la variable parrafos.
Almacenar en esa variable todos los párrafos del documento HTML.
Deberemos usar el método del objeto document que nos permita seleccionar todas las etiquetas <p> del documento.
-----------------------------------------------------------------
*/

window.addEventListener('load', function() {
    let parrafos = document.querySelectorAll('p');
    console.log(parrafos);
});

/* 
3)-
-----------------------------------------------------------------
Manipulando elementos por id
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.

En este ejercicio debemos:

﻿Crear la variable pulpFiction.
Almacenar en esa variable el elemento <h3> con id "pulp-fiction".
Pero ojo, no queremos que utilices el método querySelector()...
-----------------------------------------------------------------
*/


window.addEventListener('load', function() {
    let pulpFiction = document.getElementById('pulp-fiction');
    console.log(pulpFiction);
});

/*
-----------------------------------------------------------------
4)-

Manipulando elementos por nombre de clase
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.

En este ejercicio debemos:

Crear la variable barraDeNavegacion.
Almacenar en esa variable el elemento <ul> con clase "nav-bar".
Pero ojo, no queremos que utilices el método querySelector()...
-----------------------------------------------------------------
*/


window.addEventListener('load', function() {
    let barraDeNavegacion = document.getElementsByClassName("nav-bar");
    console.log(barraDeNavegacion);
});