import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineLine} from 'react-icons/ai'
import './productoPorPedir.scss';
import { images } from '../../constans/index';

const ProductoPorPedir = ({data, addToCart}) => { 

  let {codigo,name,precio,imagen} = data;

  const [ count, setCount ] = useState(0);

  let plus = () => {
    setCount(count + 1)
  }
  let less = () => {
    setCount(count - 1)
  }

  return <div className="DataPorProductoMenu">
    <div className="imagenProducto">
      <button className="btnInfo" type="button" ><img src={images.informacion} alt="" /> 
      </button>
      <img src={imagen} alt="" />
    </div>
    <div className="nombrePrecio">
      <p> {name} </p>
      <p>S/. {precio}0</p>
    </div>
    <div className="agregarYaumentar">
      <div className="contador">
        <button onClick={less} type="button" > <AiOutlineLine /> </button>
        <p> {count} </p>
        <button onClick={plus} type="button"> <AiOutlinePlus  /> </button>
      </div>
      <button onClick={() => addToCart(codigo)} type="button" className="Agregar__button">Agregar</button>
    </div>
</div>;
};

export default ProductoPorPedir;
