import React from 'react';
import { images } from '../../constans/index';
import './productoPorComprar.scss';

function ProductoPorComprar({orderList}) { 

  return (
  <div>
    <div className="dataTablaResumenPedido">
      <div className="dataProductoRP">
        <p>Karma clásico</p>
      </div>
      <div className="dataUndsRP">
        <p>3</p>
      </div>
      <div className="dataPrecioRP">
        <p>38.4</p>
      </div>
      <div className="dataEliminarRP">
        <img src={images.eliminar} alt="eliminar" />
      </div>
    </div>
  </div>)
}

export default ProductoPorComprar;
