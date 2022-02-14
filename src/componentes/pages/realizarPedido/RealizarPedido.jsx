import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebase-config'
import { getDocs, collection, query, where} from 'firebase/firestore'
import { BtnsCancelarYConfirmar, NavRealizarPedido, ProductoPorComprar, ProductoPorPedir } from './components';
import NavListadoProductosPorPedir from './components/navListadoProductosPorPedir/navListadoProductosPorPedir';
import NavTablaResumenPedido from './components/navTablaResumenPedido/navTablaPedido';
import PrecioTotal from './components/precioTotal/precioTotal';


import './realizarPedido.scss';

const RealizarPedido = () => {

  const [productData, setProductData] = useState([]);
  const [tipo, setTipo] = useState("hamburguesas");

  const getProduct = async(tipo) => {
    const getDataProduct = []
    const getData = await getDocs(query(collection(db, "productos"), where("tipo", "==", tipo)))
    getData.forEach((doc) => {
        getDataProduct.push({...doc.data(), id:doc.id})
      })
      return getDataProduct
  }

  useEffect(() => {
    async function fetchList() {
      const listMenu = await getProduct(tipo);
      setProductData(listMenu)
    }
    fetchList();
  }, [tipo]);

  return  ( 
    <section>
      <div className="containerRP">
        <div className="navRealizarPedido">
          <NavRealizarPedido />
        </div>
        <div className="navListadoProductosPorPedir">
          <NavListadoProductosPorPedir setTipo={setTipo} />
        </div>
        <div className="navTablaResumenPedido">
          <NavTablaResumenPedido />
        </div>
        <div className="listadoProductosPorPedir">
          <ProductoPorPedir productData={productData} />
        </div>
        <div className="resumenPedidosPorComprar">
          <ProductoPorComprar />
        </div>
        <div className="precioTotal">
          <PrecioTotal />
        </div>
        <div className="btnsCancelarYConfirmar">
          <BtnsCancelarYConfirmar />
        </div>
      </div>
    </section>
  )
} 

export default RealizarPedido