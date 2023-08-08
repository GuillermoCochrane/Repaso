/* Fórmulas más complejas
Ya vimos que podemos hacer cálculos matemáticos simples y de alguna complejidad.

Ahora vayamos a algo más importante.

Queremos hacer funciones que nos permitan sacar el área y el perímetro de un círculo.

Hagamos una función llamada perimetro que nos diga el perímetro de un círculo cuando le damos el radio como parámetro.

Luego hagamos otra función llamada  area que nos dé el área de un círculo cuando recibe el radio como parámetro.

-------------------------------------------------------------------------------------------------------------------------------------------------------
 */
// this file is read only, you cannot write it

function perimetro(radio){
   return 2*radio*Math.PI;
};

function area(radio){
   return radio*radio*Math.PI;
};

function circulo(radio){
   return "Para un circulo de " + radio + ", el perimetro es de " + (perimetro(radio).toFixed(2)) + " y el area es de " + (area(radio).toFixed(2));
};

console.log(circulo(6));