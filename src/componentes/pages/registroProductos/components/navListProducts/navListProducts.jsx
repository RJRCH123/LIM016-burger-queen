import React, { useContext }  from 'react';
import './navListProducts.scss';
import { images } from '../../constans/index';
import { UserProductContext } from '../../context/useProductContext';

function NavListProducts() {
  const { setTipos } = useContext(UserProductContext);
  
  return (
    <div className="BoxBtnsMenu">
      <button type="button" onClick={() => setTipos('hamburguesas')} className="btnTipoMenu" style={{cursor:'pointer'}}>
        <img src={images.hamburguesas} alt="tipo" />
      </button>
      <button type="button" onClick={() => setTipos('bebidas frias')} className="btnTipoMenu" style={{cursor:'pointer'}}>
        <img src={images.bebidasFrias} alt="tipo" />
      </button>
      <button type="button" onClick={() => setTipos('bebidas calientes')} className="btnTipoMenu" style={{cursor:'pointer'}}>
        <img src={images.bebidasCalientes} alt="tipo" />
      </button>
      <button type="button" onClick={() => setTipos('complementos')} className="btnTipoMenu" style={{cursor:'pointer'}}>
        <img src={images.complementos} alt="tipo" />
      </button>
    </div>
  );
}

export default NavListProducts;