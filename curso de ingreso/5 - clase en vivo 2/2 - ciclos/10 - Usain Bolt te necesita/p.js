/* Usain Bolt te necesita
Para las próximas olimpiadas, Usain Bolt (gran velocista), para calcular su dieta necesita un simulador, que dado un entrenamiento le diga cuantas calorías necesita consumir, para poder realizar un ejercicio de trote.

Para esto tenemos que crear la funcion caloriasDeTrote() que recibe por parámetro las vueltas que tiene que recorrer. Las calorías se calculan de la siguiente manera: 5 calorías (que consume cada vuelta) * el número de vuelta que se da, ya que cada vez las vueltas consumen más y más calorías.

Sabiendo esto, escribí una función caloriasDeTrote(), que tome como parámetro X, un valor numérico que representa la cantidad de vueltas a correr y retorne (no imprime) la cantidad de calorías que consumiría.

Por ejemplo:

caloriasDeTrote(2);  // Ejecuto la función con el valor 2 como parámetro
15  // El resultado que nos devuelve la función es 15, ya que teníamos 5 calorías de la primera vuelta ( 5 * 1 ) sumados a los 10 de la segunda vuelta ( 5 * 2 )

--------------------------
 */
// this file is read only, you cannot write it
function caloriasDeTrote(n){
    let caloriasTotales = 0;
    for (i=1; i<=n; i++){
        caloriasTotales= (5*i) + caloriasTotales
    };
    return caloriasTotales
};

console.log(caloriasDeTrote(3))