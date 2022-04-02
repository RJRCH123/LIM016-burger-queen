import React from 'react'
/* import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase/firebase-config'; */

function FormProducto() {
  const categorias = [{ categoria: 'Bebidas Frías' }, { categoria: 'Bebidas Calientes' }, { categoria: 'Complementos' }, { categoria: 'Hamburguesas' }];
  /* const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('Hamburguesas');
  const [undPorPlato, setUndPorPlato] = useState(0);
  const [codigo, setCodigo] = useState('');
  const [descripcion, setDescripcion] = useState(''); */
  

  /* const productCollectionRef = collection(db, 'productos'); */

  /* const createProduct = async () => {
    await addDoc(productCollectionRef, {
      usuario: usuario.campo,
      nombres: nombre.campo,
      apellidos: apellido.campo,
      cargo: cargo.campo,
      correo: correo.campo,
      dni: dni.campo,
      celular: celular.campo,
      contraseña: contraseña.campo,
      codigo: codigo.campo,
    });
  }; */

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
        />
      </label>
      <div className="contenedorProductosInterno">
        <label>
          <p>Precio</p>
          <input
            id="nombreProducto"
            name="nombreProducto"
            type="text"
            required
            maxLength="25"
          />
        </label>
        <label>
          <p>Categoría</p>
          <select
            id="categoria"
            name="categoria"
          >
            {categorias.map((item, i) => (
              <option key={`categoria${i}`} value={i}>
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
            id="nombreProducto"
            name="nombreProducto"
            type="text"
            required
            maxLength="25"
          />
        </label>
        <label>
          <p>Código</p>
          <input
            id="nombreProducto"
            name="nombreProducto"
            type="text"
            required
            maxLength="25"
          />
        </label>
      </div>
      <label>
        <p>Descripción </p>
        <input
          id="nombreProducto"
          name="nombreProducto"
          type="text"
          required
          maxLength="25"
        />
      </label>      
    </form>
  </div>
  )
}

export default FormProducto