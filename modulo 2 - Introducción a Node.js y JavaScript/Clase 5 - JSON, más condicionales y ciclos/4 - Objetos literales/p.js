/* -----------------------------------------------------------------------

Crear un objeto literal

Vamos a ver cómo crear nuestro objeto "perro":

Declarar una variable llamada perro de tipo objeto literal.
Esa variable debe tener 3 propiedades:

1. nombre, con un valor de tipo String.

2. edad, con un valor de tipo Number.

3. vacunado, con un valor de tipo Boolean.
 */
let perro ={
    nombre: "Toby",
    edad: 6,
    vacunado: false,
};

console.log(perro)
/* -----------------------------------------------------------------------

Utilizando los métodos de los objetos
Vamos a reforzar el concepto de un objeto literal tratando de representar un deportista y pedirle que entrene.
Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: nombre, energia, experiencia.

Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.

La función entrenarHoras tiene las siguientes tres características:

Recibe por parámetro la cantidad de horas.
Resta a su energía (this.energia) la cantidad de horas x 5.
Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.
 */

let deportista = {
    nombre: "Messi",
    energia: 100,
    experiencia: 20,
    entrenarHoras: function(cantidadDeHoras){
        this.energia= this.energia - cantidadDeHoras*5;
        this.experiencia = this.experiencia + cantidadDeHoras*2;
    },
}
console.log(" ");
console.log("-----------------------------------------------");
console.log("     == Antes de comenzar entrenamiento ==     ");
console.log("-----------------------------------------------");
console.log("Energia inicial del deportista " + deportista.nombre + " : "+deportista.energia);
console.log("Experiencia inicial del deportista " + deportista.nombre + " : "+deportista.experiencia);
console.log("-----------------------------------------------");
console.log("              == ENTRENANDO ==                 ");
console.log("-----------------------------------------------");
deportista.entrenarHoras(5);
console.log("          == FIN ENTRENAMIENTO =="              );
console.log("-----------------------------------------------");
console.log("Energia final del deportista " + deportista.nombre + " : "+deportista.energia);
console.log("Experiencia final del deportista " + deportista.nombre + " : "+deportista.experiencia);
console.log("-----------------------------------------------");


