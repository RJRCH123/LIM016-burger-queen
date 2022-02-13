import React, { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineLine} from 'react-icons/ai'
import './productoPorPedir.scss';
import { images } from '../../constans/index';
import { db } from '../../../../../firebase/firebase-config'
import { getDocs, collection, query ,doc, getDoc, onSnapshot} from 'firebase/firestore'

const ProductoPorPedir = ({data, addToCart}) => { 
  const [productData, setProductData] = useState([])
  const dataProduct = collection(db, 'productos')
  console.log(dataProduct)

  const getProduct = async( ) => {
    const getDataProduct = []
    const getData = await getDocs(query(collection(db, "productos")))
    getData.forEach((doc) => {
        getDataProduct.push({...doc.data(), id:doc.id})
      })
      return getDataProduct
  }

  useEffect(() => {
    async function fetchList() {
      const listMenu = await getProduct();
      setProductData(listMenu)
    }
    fetchList();
  }, []);
  // getDocs(dataProduct).then((snapshot) => {
  //   let getData = []
  //   snapshot.docs.forEach((doc) => {
  //     getData.push({...doc.data(), id:doc.id})
  //   })
  //     return getData
  // })
  // .catch(err => {
  //   console.log(err.message)
  // } )

  

  // useEffect(() => {
  //   const getProduct = async() => {
  //     const getData = await getDocs(dataProduct);
  //     console.log(getData.docs.map((doc) => ({...doc.data(), id:doc.id})))
  //     setProductData(getData.docs.map((doc) => ({...doc.data(), id:doc.id})))
  //   }
  //   getProduct()
  // }, [])


  // useEffect(() => {
  //   onSnapshot(
  //     collection(db, 'productos'),
  //     (snapshot) => {
  //       const arrayOrderList = snapshot.docs.map((document) => (
  //         {...document.data(), id:document.id}
  //       ))
  //       setProductData(arrayOrderList)}
  //   )
  //   console.log(setProductData);
  // }, [])

  // let {codigo,name,precio,imagen} = data;

  const [ count, setCount ] = useState(0);

  let plus = () => {
    setCount(count + 1)
  }
  let less = () => {
    setCount(count - 1)
  }

  return <section>
    {productData.map((item, index) => {
      return (
        <div className="DataPorProductoMenu">
      <div className="imagenProducto">
        <button className="btnInfo" type="button" ><img src={images.informacion} alt="" /> 
        </button>
        <img src={item.img} alt="" />
      </div>
      <div className="nombrePrecio">
        <p> {item.name} </p>
        <p>S/. {item.precio}0</p>
      </div>
      <div className="agregarYaumentar">
        <div className="contador">
          <button onClick={less} type="button" > <AiOutlineLine /> </button>
          <p> {count} </p>
          <button onClick={plus} type="button"> <AiOutlinePlus  /> </button>
        </div>
        <button onClick={() => addToCart()} type="button" className="Agregar__button">Agregar</button>
      </div>
  </div>
      )
    }
    )}
  </section>
};

export default ProductoPorPedir;
