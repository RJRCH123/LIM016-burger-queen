import React from 'react';
import { images } from '../../constans/index';
import {
  ProductoPorPedir
} from '../../components/index';
import './listadoProductosPorPedir.scss';

const ListadoProductosPorPedir = () => (
  <div>
    <img src={images.hamburguesas} alt="hamburguesas" />
    <ProductoPorPedir />
  </div>
);

export default ListadoProductosPorPedir;
