import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineLine} from 'react-icons/ai'
import './productoPorPedir.scss';
import { images } from '../../constans/index';
import { db } from '../../../../../firebase/firebase-config'
import { getDocs, collection, query ,doc, getDoc, onSnapshot, where} from 'firebase/firestore'
import AgregarContador from './funcionesPedido';


const ProductoPorPedir = ({productData}) => { 
  const [ count, setCount ] = useState(0);
  const [ pedido, setPedido ] = useState([]);

/*   let plus = () => {setCount(count + 1)}
  let less = () => {setCount(count - 1)} */

  const plus = (id) => {
    const arrayPlus = pedido.map((item) => item.id === id ? {...item, count:item.count + 1}:item)
  } 

  const less = (id) => {
    const arrayPlus = pedido.map((item) => item.id === id ? {...item, count:item.count - 1}:item)
  } 

  const addOrder = (productos) => {

    if (pedido.find((obj) => obj.id === productos.id )) {
      pedido.map((objs)=>{
        if(objs.id === productos.id ){
          objs.count = objs.id + 1
        }
      })
      setPedido([...pedido])
    } else {
      productos.count = 1;
      setPedido([...pedido, productos])
    }
  }

  return <section className='gridResponsivePPM'> 
    {productData.map((item, index) => {
      const orderList = {
        name: item.name,
        precio: item.precio,
        count: 0 
      }
      return (
        <div className="DataPorProductoMenu" key={index.id}>
          <div className="imagenProducto">
            <button className="btnInfo" type="button" ><img src={images.informacion} alt="" /> 
            </button>
            <img src={item.img} alt="producto" />
          </div>
          <div className="nombrePrecio">
            <p> { item.name.toUpperCase() } </p>
            <p>S/. {item.precio}0</p>
          </div>
          <div className="agregarYaumentar">
            <div className="contador">
              <button onClick={less(count.id)} type="button" > <AiOutlineLine /> </button>
              <p> {count} </p>
              <button onClick={plus(count.id)} type="button"> <AiOutlinePlus  /> </button>
            </div>
            {/* <AgregarContador less={less} plus={plus} /> */}            
            <button onClick={() => addOrder(orderList)} type="button" className="Agregar__button">Agregar</button>
          </div>
        </div>
      )})}
  </section>
};

export default ProductoPorPedir;
