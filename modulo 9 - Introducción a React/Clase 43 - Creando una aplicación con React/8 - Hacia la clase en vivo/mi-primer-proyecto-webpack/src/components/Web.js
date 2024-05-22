import React from 'react';
import Encabezado from './Encabezado';
import Banner from './Banner';
import Producto from './Producto';

function Web(){
  return (
    <div className="container">
      <Encabezado />
      <Banner />
      <Producto />
    </div>
  )

}
export default Web;