import React from 'react';
import { images } from '../../constans/index';
import {
  BtnsCancelarYConfirmar,
  ProductoPorComprar,
} from '../../components/index';
import './resumenPedidoPorComprar.scss';

const ResumenPedidoPorComprar = () => (
  <div class="boxResumenPedido">
    <div class="tablaResumenPedido">
      <div class="navTablaResumenPedido">
        <div class="productoRP">
          <p>Producto</p>
        </div>
        <div class="undsRP">
          <p>Unds</p>
        </div>
        <div class="precioRP">
          <p>S/.</p>
        </div>
        <div class="eliminarRP"></div>
      </div>
      <ProductoPorComprar />
      <ProductoPorComprar />
      <ProductoPorComprar />
      <ProductoPorComprar />
      <ProductoPorComprar />      <ProductoPorComprar />
      <ProductoPorComprar />
      <ProductoPorComprar />
      <ProductoPorComprar />
      <ProductoPorComprar />
    </div>
    <div class="TotalRP">
      <p>Total:</p>
      <p>s/.80.4</p>
    </div>
    <BtnsCancelarYConfirmar />
  </div>
);

export default ResumenPedidoPorComprar;