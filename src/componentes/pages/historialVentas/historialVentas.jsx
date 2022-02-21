import Encabezado from '../../utils/encabezado/encabezado';
import './historialVentas.scss';
import DescargarPdf from '../../utils/botonDescarga/botonDescarga'
import ProductsTable from '../../utils/tablaPedidos/tablaPedidos';
import { db } from '../../../firebase/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';


const dateParser = (date) => {
  return date.toLocaleDateString();  
  //return date.toLocaleString(); // fecha y hora local
}

const HistorialVentas = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [orders, setOrders] = useState([]);

  const getOrder = async () =>  {
    const allOrders = [];
    const OrderCollecRef = collection(db, 'pedidosFinalizados');
    const data = await getDocs(OrderCollecRef);
    
    data.docs.forEach(doc => {
      const values = doc.data();
      allOrders.push({
        id: doc.id,         
        timestamp: dateParser(values.timestamp.toDate()), 
        mesero:"M001",
        cliente: values.cliente.toUpperCase(),
        pedido:"Ver detalle",
        total: values.total.toUpperCase()
      })
    });
    return allOrders;
  }

  useEffect(() => {
    getOrder().then((allOrders) => {
      setIsLoading(false);
      setOrders(allOrders);
    })
  },  [isLoading]);

  if(isLoading){
    return(
      <div></div>
    )
  }

  return  ( 
    <section className='paddingFlex'>
      <h2>HISTORIAL VENTAS</h2>
        <Encabezado/>
        <ProductsTable products={ orders } estado={setOrders} loading={setIsLoading}/>
        <DescargarPdf/>
    </section>
  )
} 

export default HistorialVentas