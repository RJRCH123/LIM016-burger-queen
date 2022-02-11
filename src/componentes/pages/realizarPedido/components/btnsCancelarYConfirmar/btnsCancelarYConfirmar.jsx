import React from 'react';
import './btnsCancelarYConfirmar.scss';

const BtnsCancelarYConfirmar = () => {

  return <div>
    <section className="btnsContainer gridResponsiveBtns">
      <button type="button" className="confirm__button">Confirmar</button>
      <button type="button" className="cancel__button">Cancelar</button>
    </section>
  </div>;
};

export default BtnsCancelarYConfirmar;

// import React from 'react';
// import { ProductoPorPedir } from '../productoPorPedir/productoPorPedir';
// import { shoppingInitialState, shoppingReducer } from '../../reducers/shoppinReducer';
// import './btnsCancelarYConfirmar.scss';

// const BtnsCancelarYConfirmar = () => {

// const[state, dispatch] = useReducer(
//   shoppingReducer,
//   shoppingInitialState
// );

//   const {cart} = state;
//   const cleanCart = () => {}
//   const deleteFromCart = () => {}

//   return <div>
//     <section className="btnsContainer gridResponsiveBtns">
//       <button type="button" className="confirm__button">Confirmar</button>
//       <button type="button" className="cancel__button">Cancelar</button>
//     </section>
//     <button onClick={cleanCart} type="button" className="limpiar__button">Limpiar</button>
//     {
//       cart.map((item, index) => (
//       <ProductoPorPedir key={index} data={item} deleteFromCart={deleteFromCart} />
//       ))}  
//   </div>;
// };

// export default BtnsCancelarYConfirmar;