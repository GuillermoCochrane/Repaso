function saldosDeMesesConGanancia(periodo) {
    let saldo = [];
    for (let i = 0; i < periodo.length;i++) {
        if (periodo[i] > 0){
            let saldoPositivo = periodo[i];
            saldo.push(saldoPositivo);
        }
    }
    return saldo;
}