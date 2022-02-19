import './pedidosPorPreparar.scss';
import Pedido from '../../utils/pedido/pedido'
import BotonPreparar from '../../utils/botonPreparar/botonPreparar'
import { db } from '../../../firebase/firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';



const PedidosPorPreparar = () => {

  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
		const ordersCollectionRef = query(collection(db, "pedidos"), where("estado", "==", "pendiente"));
		const dataDocs = await getDocs(ordersCollectionRef);
		const pedidos = dataDocs.docs;	
    const allOrders = []
    pedidos.forEach(pedido => {      
      allOrders.push({...pedido.data(), id:pedido.id});
    })    
		setOrders(allOrders);	
  }
  
  useEffect(() => {
    getOrders()
  }, []);

  
  return  ( 
    <div className="contenedorPedidosPorPreparar">
      <h2>PEDIDOS POR PREPARAR</h2>
      <div className='gridResponsivePP'>
        {orders.map((order, index) => {
            return (
              <div className='contenedorPedido' key={index}> 
                <Pedido key={order.id} orden={ order }/>
                <div className='contenedorBotones'>
                  <BotonPreparar info={order} key={`${index}-${order.id}`}/>
                </div>
                
              </div>
            )          
            })
          }
      </div>
    </div>
  )
} 

export default PedidosPorPreparar