function sumatoriaBajoImporte (meses) {
  let cantidad = 0;
  for (let i= 0; i< meses.length;i++) {
    if ((meses[i] > 0) &&(meses[i]<=1000) ){
      cantidad = cantidad + meses[i];
    };
  };
  return cantidad
}
