import React from 'react';
import { useReducer } from 'react';
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
      <div className='gridResponsive'>
        {products.map((product) => <ProductoPorPedir key={product.codigo} data={product} addToCart={addToCart} />)}
      </div>
  );
};

export default ListadoProductosPorPedir;
