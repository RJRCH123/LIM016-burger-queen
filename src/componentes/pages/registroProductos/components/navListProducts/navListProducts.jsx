import React  from 'react';
import './navListProducts.scss';
import { images } from '../../constans/index';
/* import { UserContext } from '../../context/UserContext'; */

function ListProducts() {
  
  return (
    <div className="BoxBtnsMenu">
      <button type="button" className="btnTipoMenu">
        <img src={images.hamburguesas} alt="tipo" />
      </button>
      <button type="button" className="btnTipoMenu">
        <img src={images.bebidasFrias} alt="tipo" />
      </button>
      <button type="button" className="btnTipoMenu">
        <img src={images.bebidasCalientes} alt="tipo" />
      </button>
      <button type="button" className="btnTipoMenu">
        <img src={images.complementos} alt="tipo" />
      </button>
    </div>
  );
}

export default ListProducts;