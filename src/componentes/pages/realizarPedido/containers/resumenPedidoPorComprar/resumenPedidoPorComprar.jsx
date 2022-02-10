import React from 'react';
import { images } from '../../constans/index';
import {
  BtnsCancelarYConfirmar,
  ProductoPorComprar,
} from '../../components/index';
import './resumenPedidoPorComprar.scss';

const ResumenPedidoPorComprar = () => (
  <div>
    <BtnsCancelarYConfirmar />
    <ProductoPorComprar />
  </div>
);

export default ResumenPedidoPorComprar;