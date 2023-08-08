function trasladar(a1, a2){
    let quitado = a1.pop();
    a2.push(quitado);
    return [a1,a2]
};