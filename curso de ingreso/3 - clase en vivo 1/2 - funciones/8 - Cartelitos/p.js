/* Cartelitos
Para una importante conferencia, los organizadores nos pidieron que escribamos cartelitos identificatorios que va a tener cada asistente.
Para eso, tenemos que juntar su nombre, su apellido, y su título (dr., dra., lic., etc) y armar un único string.

Escribí la función escribirCartelito, que tome como parámetros un título, un nombre y un apellido y devuelva un único string como resultado. Por ejemplo:

//  Si ejecutamos la función con éstos datos...
escribirCartelito("Dra.", "Ana", "Pérez");
//  ...la misma nos  devuelve "Dra. Ana Pérez",

-------------------------------------------------------------------------------------------------------------------------------------------------------- */

// this file is read only, you cannot write it

function escribirCartelito(titulo,nombre,apellido){
    return titulo + ' ' + nombre + ' ' + apellido;
};

console.log("Lord Commander of the Night Watch", 'Jon', 'Snow');