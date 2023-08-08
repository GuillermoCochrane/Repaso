/* Un ejercicio sin precedentes
Vamos con otro ejercicio:

Escribí la función puedeJubilarse que recibe por parámetro la edad, el género y además, los años de aportes jubilatorios (en ese orden) que posee una persona, ejemplo:

puedeJubilarse(62, 'F', 34);
// Ésto da como resultado true ya que cumple con las tres condiciones. 
Tené en cuenta que el mínimo de edad para realizar el trámite para las mujeres (género "F") es de 60 años, mientras que para los hombres (género "M") es 65. En ambos casos, se deben contar con al menos 30 años de aportes jubilatorios.

Te recomendamos que primero trates de resolver el ejercicio, después fijate lo que sigue y si podes resolverlo de ésta otra manera, deberíamos usar funciones dentro de otra función, eso ya lo hicimos en funcionception , ¿Lo recordás?

¿Y si delegamos parte de la funcionalidad en otra función? Podríamos separar la lógica de la siguiente manera:

function puedeJubilarse(edad, genero, aniosAporte) {
    return  estaEnEdad(edad, genero) && tieneSuficientesAportes(aniosAporte);
}
Al delegar correctamente hay veces en las que no es necesario alterar el orden de precedencia (cómo usamos los || OR y los && AND), ¡otro punto a favor de la delegación!

--------------------------------------------------------- */

// this file is read only, you cannot write it

function puedeJubilarse(edad, genero, aportes) {
    return (((genero == 'F' && edad >= 60) || (genero == 'M' && edad >= 65)) && aportes >= 30);
};


function estaEnEdad(edad, genero){
    return (genero == 'F' && edad >= 60) || (genero == 'M' && edad >= 65);
};

function tieneSuficientesAportes(aportes){
    return aportes >= 30
};

function cumpleRequisitos(edad, genero, aportes){
    return  estaEnEdad(edad, genero) && tieneSuficientesAportes(aportes);
};

let personasPorJubilarse = [[62, 'F', 34],[58, 'F', 34],[62, 'F', 28],[66, 'M', 34],[58, 'M', 34],[67, 'M', 28]]

for (let i=0; i < (personasPorJubilarse.length); i++){
    if(puedeJubilarse((personasPorJubilarse[i])[0], (personasPorJubilarse[i])[1],(personasPorJubilarse[i])[2])){
        console.log('la ' + (i+1) +'º persona puede jubilarse');
    }else{
        console.log('la ' + (i+1) +'º persona no puede jubilarse')
    }
};
console.log('')

for (let i=0; i < (personasPorJubilarse.length); i++){
        if(puedeJubilarse((personasPorJubilarse[i])[0], (personasPorJubilarse[i])[1],(personasPorJubilarse[i])[2])){
        console.log('la ' + (i+1) +'º persona cumple los requisitos para jubilarse');
    }else{
        console.log('la ' + (i+1) +'º persona no cumple los requisitos para jubilarse')
    }
};