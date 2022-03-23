import Encabezado from '../../utils/encabezado/encabezado';
import './historialMesero.scss';
import ProductsTable from '../../utils/tablaPedidos/tablaPedidos';
import { db } from '../../../firebase/firebase-config';
import {
  collection, getDocs, where, query, orderBy,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Descarga from '../../utils/botonDescarga/botonDescarga';
import loader from '../../../img/extra/DoubleRing.svg';

const dateParser = (date) => date.toLocaleDateString();

const hora = (data) => data.toLocaleTimeString();

function HistorialCocinero() {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const getOrder = async () => {
    const allOrders = [];
    const orderCollecRef = query(collection(db, 'pedidos'), orderBy('timestamp', 'asc'), where('estado', '==', 'finalizado'));
    const data = await getDocs(orderCollecRef);

    data.docs.forEach((doc) => {
      const values = doc.data();
      allOrders.push({
        id: doc.id,
        timestamp: dateParser(values.timestamp.toDate()),
        hora: hora(values.timestamp.toDate()),
        cliente: values.cliente.toUpperCase(),
        pedido: 'ver detalle',
        total: values.total.toUpperCase(),
      });
    });
    return allOrders;
  };

  useEffect(() => {
    getOrder().then((allOrders) => {
      setIsLoading(false);
      setOrders(allOrders);
    });
  }, [isLoading]);

  if (isLoading) {
    return (
      <div style={{position:"absolute", top:"0px", left:"0px", width:"100%", height:"100%", backgroundColor:"rgba(0, 0, 0, 0.3)"}}>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", transform:"translate(calc(11vh/2), calc(90vh/2))", color:"white"}}>
          <img src={loader} alt='loader' style={{width:"150px", heigth:"150px"}}/>
          <p style={{color:"#fff", fontSize:"18px", fontWeight:"bold"}}>Loading...</p>
        </div> 
      </div> 
    );
  }

  return (
    <section className="paddingFlex">

      <h2>HISTORIAL PEDIDOS</h2>
      <Encabezado />
      <ProductsTable products={orders} estado={setOrders} loading={setIsLoading} />
      <Descarga />
    </section>
  );
}

export default HistorialCocinero;
