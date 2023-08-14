/* Destructuring
Desestructuremos.
Para este ejercicio contamos con un array de destinos del mundo ya definido.

Queremos, usando destructuramiento, definir las variables bariloche y china, y extraer del array únicamente los destinos "Bariloche" y "China".
 */
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [ , bariloche, , china ] = destinosDelMundo;

console.log("");
console.log("-------------------------------------------------------------------------------------------------------");
console.log("ejercicio 1");
console.log("");
console.log("Si tuviera que irme de vacaciones, mi primera opción sería a " + bariloche + " y mi segunda opción sería " + china );




/* Destructurando objetos
Desestructuremos la Ferrari.
Para este ejercicio contamos con un objeto literal auto ya definido.
Queremos, usando desestructuramiento, definir las variables marca y color, haciendo que las mismas tengan el valor correspondiente del objeto literal.
 */
let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca,  color }= auto;

console.log("");
console.log("-------------------------------------------------------------------------------------------------------");
console.log("ejercicio 2");
console.log("");
console.log("Me gustaría tener un " + marca + " de color " + color);