/* Sumatorias - Parte 3
Ahora que ya sabemos qué es lo que queremos (gananciaTotal), razonemos cómo hacerlo....

Vamos de a poquito: si el array no tuviera elementos, ¿cuanto debería ser la sumatoria? ¡0!

function gananciaTotal0(unPeriodo) {
    let sumatoria = 0;
    return sumatoria;
}
¿Y si tuviera exactamente 1 elemento? Estem... 0.... ¿más ese elemento? ¡Exacto!

function gananciaTotal1(unPeriodo) {
    let sumatoria = 0;
    sumatoria = sumatoria + unPeriodo[0];
    return sumatoria;
}
¿Y si tuviera 2 elementos?

function gananciaTotal2(unPeriodo) {
    let sumatoria = 0;
    sumatoria = sumatoria + unPeriodo[0];
    sumatoria = sumatoria + unPeriodo[1];
    return sumatoria;
}
¿Y si tuviera 3 elementos?

function gananciaTotal3(unPeriodo) {
    let sumatoria = 0;
    sumatoria = sumatoria + unPeriodo[0];
    sumatoria = sumatoria + unPeriodo[1];
    sumatoria = sumatoria + unPeriodo[2];
    return sumatoria;
}
¿Empezas a ver un patrón? Tratá de escribir la función gananciaTotal4 que funcione para 4 elementos.

------------------------------------------------------------------------------------------------------------
 */
// this file is read only, you cannot write it

function gananciaTotal4(unPeriodo) {
    let sumatoria = 0;
    sumatoria = sumatoria + unPeriodo[0];
    sumatoria = sumatoria + unPeriodo[1];
    sumatoria = sumatoria + unPeriodo[2];
    sumatoria = sumatoria + unPeriodo[3];
    return sumatoria;
}