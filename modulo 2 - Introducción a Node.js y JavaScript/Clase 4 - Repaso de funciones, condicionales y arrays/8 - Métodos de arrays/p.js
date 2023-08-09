/* indexOf

Veamos cómo encontrar elementos puntuales dentro de un array.

Para este ejercicio contamos con el array alumnos. Queremos saber dónde están guardados los nombres "Juan" y "Francisco". Utilicemos un método de array para averiguarlo.

Para eso, declaremos las variables indiceJuan e indiceFrancisco y almacenemos en ellas el índice correspondiente de cada uno.
 */
let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"];
let indiceJuan = alumnos.indexOf('Juan');
let indiceFrancisco =alumnos.indexOf('Francisco');
console.log("Juan se encuentar en el indice " + indiceJuan );
console.log("Francisco se encuentar en el indice " + indiceFrancisco );

/* ------------------------------------------------------------------------------------------------------------------------------------------

Join

Si lo juntamos, todo tiene sentido.

Tenemos un array con palabras sueltas que, juntas, forman una gran frase.

Queremos, utilizando un método de array sobre la arrayFrase , convertirlo en una oración entera, y almacenar ese String en una variable llamada fraseNueva.

Ejemplo:

console.log(fraseNueva); // "No he fracasado, simplemente me he topado con diez mil soluciones equivocadas"
 */
let arrayFrase = [
  "No",
  "he",
  "fracasado,",
  "simplemente",
  "me",
  "he",
  "topado",
  "con",
  "diez",
  "mil",
  "soluciones",
  "equivocadas"
];
let fraseNueva = arrayFrase.join( ' ' );
console.log(fraseNueva);

/* ------------------------------------------------------------------------------------------------------------------------------------------

Pop

¡Sí! ¡Alexis se egresó del terciario!

Para este ejercicio contamos con el array estudiantes, en donde, en cada índice, almacena un objeto con las propiedades nombre, promedio y curso.

Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.

Para eso debemos, utilizando un método de array, guardar los datos de Alexis en una variable nueva llamada alumnoEgresado.
 */

let estudiantes = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android"
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack"
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS"
  }
];
let alumnoEgresado = estudiantes.pop();

console.log("El ultimo egresado es " + alumnoEgresado.nombre + ", del curso de " + alumnoEgresado.curso+ " y tubo un promedio de " + alumnoEgresado.promedio);
/* ------------------------------------------------------------------------------------------------------------------------------------------

Push

Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.

Nuestro trabajo será agregar de a un alumno por vez, utilizando algún método de array.

Los valores de cada uno son:

nombre: Juan

promedio: 5

curso: iOS

------------------

nombre: Miguel

promedio: 2

curso: Android */

let estudiantes1 = [
  {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
  },
  {
    nombre: 'Daniel',
    promedio : 6,
    curso : 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
  },
]
estudiantes1.push({
    nombre: 'Juan',
    promedio : 5,
    curso : 'iOS',
  });
  estudiantes1.push({
    nombre: 'Miguel',
    promedio : 2,
    curso : 'Android',
  });

console.log(estudiantes1);

/* ------------------------------------------------------------------------------------------------------------------------------------------

shift

Se dio de baja un alumno.

Tenemos que dar de baja al primer estudiante y queremos sacarlo del array estudiantes. Para eso, debemos crear una variable llamada alumnoDeBaja y, utilizando un método de array, almacenar en ella a ese primer estudiante.
 */

let estudiantes2= [
  {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
          },
  {
    nombre: 'Daniel',
    promedio : 6,
    curso : 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
  },
]

let alumnoDeBaja = estudiantes2.shift();

console.log(alumnoDeBaja);

/* ------------------------------------------------------------------------------------------------------------------------------------------

unshift
Se reintegraron alumnos.
Tenemos la tarea de reintegrar a dos estudiantes que se habían registrado al principio de todo, se dieron de baja, ¡pero volvieron! Y para que no pierdan su lugar privilegiado queremos, utilizando un método de array, agregar al inicio del mismo a cada estudiante (de a uno a la vez).

Los datos que hay que agregar de cada uno son:

nombre: "Mariana",

promedio: 9,

curso: "Full Stack"

-------------------------

nombre: "Francisco",

promedio: 2,

curso: "Android"

--------------------
 */

let estudiantes3 = [
  {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
  },
  {
    nombre: 'Daniel',
    promedio : 6,
    curso : 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
  }
]
estudiantes3.unshift({
    nombre: 'Mariana',
    promedio : 9,
    curso : 'Full Stack',
  });
  estudiantes3.unshift({
    nombre: 'Francisco',
    promedio : 2,
    curso : 'Android',
  });

console.log(estudiantes3);