import React from 'react';
import { images } from '../../constans/index';
import './productoPorComprar.scss';

const ProductoPorComprar = () => (
  <div>
    <div class="dataTablaResumenPedido">
      <div class="dataProductoRP">
        <p>Karma clásico</p>
      </div>
      <div class="dataUndsRP">
        <p>3</p>
      </div>
      <div class="dataPrecioRP">
        <p>38.4</p>
      </div>
      <div class="dataEliminarRP">
        <img src={images.eliminar} alt="eliminar" />
      </div>
    </div>
  </div>
);

export default ProductoPorComprar;
