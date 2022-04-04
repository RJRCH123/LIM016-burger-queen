import React, { useRef, useState, useEffect, useContext } from "react";
/* import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../../firebase/firebase-config"; */
import VistaPrevia from "../vistaPrevia/vistaPrevia";
import { UserProductContext } from "../../context/useProductContext";

function FormProducto() {
  const { newProduct, setNewProduct } = useContext(UserProductContext);

  const categorias = [
    { categoria: "Bebidas Frías" },
    { categoria: "Bebidas Calientes" },
    { categoria: "Complementos" },
    { categoria: "Hamburguesas" },
  ];

  const nombre = useRef("");
  const precio = useRef("");
  const categoria = useRef("");
  const undsPorPlato = useRef("");
  const codigo = useRef("");
  const descripcion = useRef("");

  const [renderPreview, setRenderPreview] = useState(false);

  /*   const cleanInputs = () => {
    codigo.current.value = "";
    descripcion.current.value = "";
    nombre.current.value = "";
    precio.current.value = "";
    undsPorPlato.current.value = "";
    categoria.current.value = "";
  }; */

  /*   const createProduct = async () => {
    const productCollectionRef = collection(db, "productos");

    await addDoc(productCollectionRef, {
      codigo: codigo.current.value,
      descripcion: descripcion.current.value,
      name: nombre.current.value,
      precio: precio.current.value,
      undsPorPlato: undsPorPlato.current.value,
      tipo: categoria.current.value,
    });
  }; */

  /*   const onSubmit = async (e) => {
    e.preventDefault();
    await createProduct();
    cleanInputs();
  }; */

  const valueVistaPrevia = (e) => {
    e.preventDefault();
    setRenderPreview(true);
  };

  /*   const cleanAll = () => {
    cleanInputs();
  }; */

  const getPreviewValues = () => {
    return {
      codigo: codigo.current.value ?? "",
      descripcion: descripcion.current.value ?? "",
      name: nombre.current.value ?? "",
      precio: precio.current.value ?? "",
      undsPorPlato: undsPorPlato.current.value ?? "",
      tipo: categoria.current.value ?? "",
    };
  };
  useEffect(() => {
    setRenderPreview(false);
  }, [renderPreview]);

  // -------------------------------------------------------------

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
            value={newProduct.nombre}
            onChange={(e) =>
              setNewProduct({ ...newProduct, nombre: e.target.value })
            }
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
              maxLength="10"
              ref={precio}
              value={newProduct.precio}
              onChange={(e) =>
                setNewProduct({ ...newProduct, precio: e.target.value })
              }
            />
          </label>

          {/*           <div className="inputMesa">
        <label>
          <p>Mesa:</p>
          <select
            id="nMesa"
            name="nMesa"
            value={cliente.mesa}
            onChange={(e) => setCliente({ ...cliente, mesa: e.target.value })}
          >
            {numerosMesa.map((item, i) => (
              <option key={`numerosMesa${i}`} value={i}>
                {' '}
                {item.mesa}
                {' '}
              </option>
            ))}
          </select>
        </label>
      </div> */}

          <label>
            <p>Categoría</p>
            <select
              id="categoria"
              name="categoria"
              value={newProduct.categoria}
              onChange={(e) =>
                setNewProduct({ ...newProduct, categoria: e.target.value })
              }
              ref={categoria}
            >
              {categorias.map((item, i) => (
                <option
                  key={`categoria${i}`}
                  value={item.categoria.toLowerCase()}
                >
                  {" "}
                  {item.categoria}{" "}
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
              value={newProduct.undsPorPlato}
              onChange={(e) =>
                setNewProduct({ ...newProduct, undsPorPlato: e.target.value })
              }
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
              value={newProduct.codigo}
              onChange={(e) =>
                setNewProduct({ ...newProduct, codigo: e.target.value })
              }
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
            value={newProduct.descripcion}
            onChange={(e) =>
              setNewProduct({ ...newProduct, descripcion: e.target.value })
            }
          />
        </label>
        <button onClick={valueVistaPrevia}>Cargar vista previa</button>
      </form>
      <VistaPrevia values={getPreviewValues()} />
    </div>
  );
}

export default FormProducto;
