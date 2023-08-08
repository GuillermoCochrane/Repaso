function masMenos(entrada){
    let positivo=0;
    let cero=0;
    let negativo=0;
    let vector=[];
    let porcentajePositivo=0;
    let porcetnajeNegativo=0;
    let porcentajeCero=0;
    
    for (i=0; i<(entrada.length); i++){
        if (entrada[i]<0){
            negativo=negativo+1;
        }else if (entrada[i]>0){
            positivo=positivo+1;
        }else {
            cero=cero+1
        }
    }

porcentajePositivo=positivo/(entrada.length);
porcetnajeNegativo=negativo/(entrada.length);
porcentajeCero=cero/(entrada.length);
vector.push(porcentajePositivo);
vector.push(porcentajeCero);
vector.push(porcetnajeNegativo);
return vector
}