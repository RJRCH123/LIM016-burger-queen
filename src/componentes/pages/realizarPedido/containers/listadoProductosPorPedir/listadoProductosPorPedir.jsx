import React from 'react';
import { useReducer } from 'react';
import { images } from '../../constans/index';
import {
  ProductoPorPedir
} from '../../components/index';


import './listadoProductosPorPedir.scss';
import { shoppingInitialState, shoppingReducer } from '../../reducers/shoppinReducer';


const ListadoProductosPorPedir = () => {
  const[state, dispatch] = useReducer(
    shoppingReducer,
    shoppingInitialState
  );

  const {products, cart} = state;

  const addToCart = (codigo) => {
    console.log(codigo);
  }
  // const deleteFromCart = () => {}
  // const cleanCart = () => {}
  
  return (
    <div>
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
    
      {products.map((product) => <ProductoPorPedir key={product.codigo} data={product} addToCart={addToCart} />)}
    </div>
  );
};

export default ListadoProductosPorPedir;
