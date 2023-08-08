function alturaArbolUtopico(n){
    let arbol = 1;
    for (i=0; i<n; i++){
                
        if ((i%2)!=0){
            arbol=arbol*2;
        }
        else {
            arbol=arbol+1
        }
    }

    return arbol
}

//no funca