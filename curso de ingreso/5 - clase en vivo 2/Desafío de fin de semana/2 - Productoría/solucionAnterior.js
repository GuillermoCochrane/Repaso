function productoria(numero){
    let productoriaDelNumero = 1
    for (i=0; i < numero.length; i++){
        let valor = numero[i];
        productoriaDelNumero=productoriaDelNumero*valor;
    }
    return productoriaDelNumero
}