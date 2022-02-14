import React from 'react';
import './navListadoProductosPorPedir.scss';
import { images } from '../../constans/index';

const NavListadoProductosPorPedir = ({setTipo}) => (
  <div className='BoxBtnsMenu'>
  <button type="button" onClick={() => setTipo("hamburguesas")} className="btnTipoMenu">
    <img src={images.hamburguesas} alt="eliminar" />
  </button>
  <button type="button" onClick={() => setTipo("bebidas frias")} className="btnTipoMenu">
    <img src={images.bebidasFrias} alt="eliminar" />
  </button>
  <button type="button" onClick={() => setTipo("bebidas calientes")} className="btnTipoMenu">
    <img src={images.bebidasCalientes} alt="eliminar" />
  </button>
  <button type="button" onClick={() => setTipo("complementos")} className="btnTipoMenu">
    <img src={images.complementos} alt="eliminar" />
  </button>
</div>
);

export default NavListadoProductosPorPedir;
