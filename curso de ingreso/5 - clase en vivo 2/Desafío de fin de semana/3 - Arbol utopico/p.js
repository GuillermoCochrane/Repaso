/* Árbol utópico
Los árboles utópicos crecen de una forma particular, en dos ciclos:
Cada primavera duplican su tamaño
Cada verano crecen un metro
Si Laura planta un árbol utópico de un metro, al fin del otoño, ¿cuánto medirá de alto después de N ciclos?

Algunos ejemplos:
Si N = 0, su altura será 1 metro (no creció nada)
Si N = 1, su altura será de 2 metros (duplicó su altura en primavera)
Si N = 2, su altura será de 3 metros (creció un metro más en verano)
Si N = 3, su altura será de 6 metros (duplicó su altura en la siguiente primavera)
y así ...
Escribí la función alturaArbolUtopico, que tome una cantidad de ciclos de crecimiento, y devuelva la altura resultante del árbol de Laura.
-------------------------------------------------------------------------------------------------------------------------------------
 */
// this file is read only, you cannot write it

function alturaArbolUtopico(alturaInicial,periodos){
    let altura = 0
    for (let i = 0; i <=periodos ; i++ ){
        if (i == 0 ){
            altura = alturaInicial
        } else if (i%2!= 0){
            altura = altura*2
        }else{
            altura = altura + 1
        };
    };
    return altura
};

let alturaInicial = 1;
let periodos = 5;

console.log("Para un arbol utopico de altura inicial de " + alturaInicial + ", despues de  " + periodos + " periodos su altura es de "  + alturaArbolUtopico(alturaInicial,periodos));

