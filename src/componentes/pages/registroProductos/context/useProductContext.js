import React, { createContext, useState, useEffect } from 'react';
import { db } from '../../../../firebase/firebase-config';
import {
  getDocs, collection, query, where, deleteDoc, doc, addDoc
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

  // ------------------------------------------------------------------------
  const [newProduct, setNewProduct] = useState('newProducts');
  const newProducts = {
    codigo: '',
    descripcion: '',
    nombre: '',
    precio: '',
    undsPorPlato: '',
    categoria: '',
  };

  // agregar ordenes al firebase
  const confirmarNuevoProducto = () => {
    if (
      newProduct.codigo !== '' &&
      newProduct.descripcion !== '' &&
      newProduct.nombre !== '' &&
      newProduct.precio !== '' &&
      newProduct.undsPorPlato !== '' &&
      newProduct.categoria !== '' &&
      newProduct.codigo !== undefined &&
      newProduct.descripcion !== undefined &&
      newProduct.nombre !== undefined &&
      newProduct.precio !== undefined &&
      newProduct.undsPorPlato !== undefined &&
      newProduct.categoria !== undefined
    ) { const collectionProducts = addDoc(collection(db, 'productos'), {
      codigo: newProduct.codigo,
      descripcion: newProduct.descripcion,
      name: newProduct.nombre,
      precio: newProduct.precio, 
      undsPorPlato: newProduct.undsPorPlato, 
      tipo: newProduct.categoria, 
    }).then(() => {
      setNewProduct(newProducts);
    });
    return collectionProducts;
  }
    return false;
  };

  // limpiar orden con boton cancelar
  const limpiarForm = () => {
    setNewProduct(newProducts);
  };


  const totalesProps = {
    productosData, 
    setproductosData,
    tipos, 
    setTipos,
    eliminarProducto,
    editProduct,
    newProduct,
    setNewProduct,
    confirmarNuevoProducto,
    limpiarForm
  };
    return (
      <UserProductContext.Provider value={totalesProps}>
        <RegistroProductos element={Children} />
      </UserProductContext.Provider>
    );
}

export default ProductProvider;
