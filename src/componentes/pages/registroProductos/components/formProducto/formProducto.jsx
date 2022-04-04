import React, { useRef, useState, useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../../firebase/firebase-config';
import VistaPrevia from "../vistaPrevia/vistaPrevia";
import BtnsConfirmarYCancelar from "../btnsConfirmarYCancelar/btnsConfirmarYCancelar";

function FormProducto() {
  const categorias = [{ categoria: 'Bebidas Frías', }, { categoria: 'Bebidas Calientes' }, { categoria: 'Complementos' }, { categoria: 'Hamburguesas' }];

  const nombre = useRef('');
  const precio = useRef('');
  const categoria = useRef('');
  const undsPorPlato = useRef('');
  const codigo = useRef('');
  const descripcion = useRef('');

  const [renderPreview, setRenderPreview] = useState(false);
  const createProduct = async () => {

    const productCollectionRef = collection(db, 'productos');

    await addDoc(productCollectionRef, {
      codigo: codigo.current.value,
      descripcion: descripcion.current.value,
      name: nombre.current.value,
      precio: precio.current.value,
      undsPorPlato: undsPorPlato.current.value,
      tipo: categoria.current.value
    });
  };

  const cleanInputs = () => {
    codigo.current.value = ""
    descripcion.current.value = ""
    nombre.current.value = ""
    precio.current.value = ""
    undsPorPlato.current.value = ""
    categoria.current.value = ""
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await createProduct();
    cleanInputs();
  }

  const valueVistaPrevia = (e) => {
    e.preventDefault();
    setRenderPreview(true);
  }

  const cleanAll = () => {
    cleanInputs();
  }

  const getPreviewValues = () => {

    return {
      codigo: codigo.current.value ?? '',
      descripcion: descripcion.current.value ?? '',
      name: nombre.current.value ?? '',
      precio: precio.current.value ?? '',
      undsPorPlato: undsPorPlato.current.value ?? '',
      tipo: categoria.current.value ?? ''
    }
  }
  useEffect(() => {
    setRenderPreview(false);
  }, [renderPreview]);

  return (
    <div className="title">
      <h1>REGISTRO DE PRODUCTOS</h1>
      <form>
        <label>
          <p>Nombre</p>
          <input
            id="nombreProducto"
            name="nombreProducto"
            type="text"
            required
            maxLength="25"
            ref={nombre}
          />
        </label>
        <div className="contenedorProductosInterno">
          <label>
            <p>Precio</p>
            <input
              id="precioProducto"
              name="precioProducto"
              type="text"
              required
              maxLength="25"
              ref={precio}
            />
          </label>
          <label>
            <p>Categoría</p>
            <select
              id="categoria"
              name={"categoria"}
              ref={categoria}
            >
              {categorias.map((item, i) => (

                <option key={`categoria${i}`} value={item.categoria.toLowerCase()}>
                  {' '}
                  {item.categoria}
                  {' '}
                </option>
              ))}
            </select>
          </label>
          <label>
            <p>Unidades por Plato</p>
            <input
              id="unidadesPorPlato"
              name="unidadesPorPlato"
              type="text"
              required
              maxLength="25"
              ref={undsPorPlato}
            />
          </label>
          <label>
            <p>Código</p>
            <input
              id="codigoProducto"
              name="codigoProducto"
              type="text"
              required
              maxLength="25"
              ref={codigo}
            />
          </label>
        </div>
        <label>
          <p>Descripción </p>
          <input
            id="descripcionProducto"
            name="descripcionProducto"
            type="text"
            required
            maxLength="25"
            ref={descripcion}
          />
        </label>
        <button onClick={valueVistaPrevia}>Cargar vista previa</button>
      </form>
      <VistaPrevia values={getPreviewValues()} />
      <BtnsConfirmarYCancelar submit={onSubmit} />
    </div>
  )
}

export default FormProducto