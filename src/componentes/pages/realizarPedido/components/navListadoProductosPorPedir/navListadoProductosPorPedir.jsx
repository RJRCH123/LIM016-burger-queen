import React from 'react';
import './navListadoProductosPorPedir.scss';
import { images } from '../../constans/index';

const NavListadoProductosPorPedir = () => (
  <div className='BoxBtnsMenu'>
  <button type="button" className="btnTipoMenu">
    <img src={images.hamburguesas} alt="eliminar" />
  </button>
  <button type="button" className="btnTipoMenu">
    <img src={images.bebidasFrias} alt="eliminar" />
  </button>
  <button type="button" className="btnTipoMenu">
    <img src={images.bebidasCalientes} alt="eliminar" />
  </button>
  <button type="button" className="btnTipoMenu">
    <img src={images.complementos} alt="eliminar" />
  </button>
</div>
);

export default NavListadoProductosPorPedir;
