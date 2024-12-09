# Para pensar

Vamos a trabajar con casos y poner en práctica el concepto de promesas.

## Promesas - Para pensar

Mira las respuestas de cada pregunta:

---

1. Las promesas son funciones que permiten:

    - Ejecutar código de forma sincrónica.

    - Devolver una respuesta.

    - Ejecutar código asincrónico de forma eficiente. **(X)**

    - Ejecutar código de forma imperativa.


Excelente. Que bueno que recordaste que al ejecutar una promesa, no tenemos idea en qué momento recibiremos los resultados.

---

2. A veces necesitamos que dos o más promesas se resuelvan para realizar cierta acción. Para esto usamos: 

    - .then()

    - .catch()

    - .require()

    - Promise.all() **(X)**


Muy bien, lograste tener claro un caso muy común cuando trabajamos con las Promesas, y requerimos información de varios modelos.


3. En caso de NO obtener un resultado en la ejecución de algún código, se genera un error. Para esto usamos:

    - .catch() **(X)**

    - .then()

    - Promise.all()

    - console.log()


Felicitaciones, veo que tienes claro que al ejecutar una promesa puede ser que esta nos arroje algún error y el mismo lo capturamos por medio del método que seleccionastes.

---

4. A veces los .then() suelen tener promesas dentro. Para resolver esto, necesitamos: 

    - Crear un console.log()

    - Utilizar otro .then() **(X)**

    - Utilizar un .catch()

    - .require()


Excelente, así se hace. Veo que tienes claro lo que debemos hacer para lograr pasar el resultado de una promesa a otra.

---

5. Es una función asincrónica, la cual devolverá un resultado, o no. Además permite que el código se siga ejecutando.

    - .then() **(X)**

    - Promise.all()

    - catch()

    - callback


Felicitaciones, veo que tienes muy claro lo referido al asincronismo.