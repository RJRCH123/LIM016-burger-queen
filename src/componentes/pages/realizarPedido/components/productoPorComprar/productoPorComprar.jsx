import React, { useContext } from 'react';
import { AiOutlineLine, AiOutlinePlus } from 'react-icons/ai';
import { images } from '../../constans/index';
import { UserContext } from '../../context/UserContext';
import './productoPorComprar.scss';

function ProductoPorComprar() { 
  const { pedido, eliminar, less, plus } = useContext(UserContext)
  return (
  <div>
    {pedido.map((item, id) => (
    <div className="dataTablaResumenPedido" key={id}>
      <div className="dataProductoRP">
        <p> {item.name} </p>
      </div>
      <div className="dataUndsRP">
        <p> {item.count} </p>
      </div>
      <div className="dataPrecioRP">
        <p> {item.precio} </p>
      </div>
      <button  onClick={() => { less(item.id) }} type="button" > <AiOutlineLine /> </button>
      <button  onClick={() => { plus(item.id) }} type="button" > <AiOutlinePlus /> </button>

      <button onClick={() => eliminar(item.id)} type="button" className="dataEliminarRP">
        <img src={images.eliminar} alt="eliminar" />
      </button>
    </div>
  ))}               
  </div>)
}

export default ProductoPorComprar;
