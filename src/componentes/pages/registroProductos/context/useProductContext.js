import React, { createContext, useState, useEffect } from 'react';
import { db } from '../../../../firebase/firebase-config';
import {
  getDocs, collection, query, where, deleteDoc, doc
} from 'firebase/firestore';
import '../registroProductos.scss';
import { Children } from 'react/cjs/react.production.min';
import RegistroProductos from '../registroProductos';

export const UserProductContext = createContext();

function ProductProvider() { 
  const [productosData, setproductosData] = useState([]);
  const [tipos, setTipos] = useState('hamburguesas');
  const [isLoading, setIsLoading] = useState(true);

  // Obtener datos de Firebase por tipo
  const getProductos = async (tipo) => {
    const getDataProduct = [];
    const getData = await getDocs(query(collection(db, 'productos'), where('tipo', '==', tipo)));
    getData.forEach((doc) => {
      getDataProduct.push({ ...doc.data(), id: doc.id });
    });
    return getDataProduct;
  };

  useEffect(() => {
    getProductos(tipos).then((getDataProduct) => {
      setproductosData(getDataProduct)
    });
    setIsLoading(false);
  }, [tipos, isLoading]);

  /* useEffect(() => {
    async function fetchList() {
      const listMenu = await getProductos(tipos);
      setproductosData(listMenu);      
    }
    fetchList();
  }, [tipos]); */

  // método que elimina un producto de la colección
  const eliminarProducto = async (id) => {
    console.log('el producto que voy a eliminar es:', id)
    await deleteDoc(doc(db, 'productos', id));
    setIsLoading(true);
  };

  // método que edita un producto de la colección
  const editProduct = (producto) => {
    console.log(producto.id);
  }

  const totalesProps = {
    productosData, 
    setproductosData,
    tipos, 
    setTipos,
    eliminarProducto,
    editProduct
  };
    return (
      <UserProductContext.Provider value={totalesProps}>
        <RegistroProductos element={Children} />
      </UserProductContext.Provider>
    );
}

export default ProductProvider;
