import React from 'react';
import './productoPorPedir.scss';

const ProductoPorPedir = ({data, addToCart}) => { 

  let {codigo,name,precio,imagen} = data;

  return <div className="DataPorProductoMenu">
    <div className="imagenProducto">
      <img src={imagen} alt="karma Clasica" />
    </div>
    <div className="nombrePrecio">
      <h1> {name} </h1>
      <h1>s/. {precio}0</h1>
    </div>
    <div className="agregarYaumentar">
      <button onClick={() => addToCart(codigo)} type="button" className="Agregar__button">Agregar</button>
    </div>
</div>;
};

export default ProductoPorPedir;
