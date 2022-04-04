import React, { useRef, useState, useEffect, useContext } from "react";
/* import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../../firebase/firebase-config"; */
import VistaPrevia from "../vistaPrevia/vistaPrevia";
import { UserProductContext } from "../../context/useProductContext";

function FormProducto({productData}) {
  const { newProduct, setNewProduct, renderEditForm, setRenderEditForm } = useContext(UserProductContext);
  const [renderPreview, setRenderPreview] = useState(false);

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
  const img = useRef("");

  const setFormValues = () => {
    if (productData) {
      codigo.current.value = productData.codigo
      descripcion.current.value = productData.descripcion
      nombre.current.value = productData.name
      precio.current.value = productData.precio
      undsPorPlato.current.value = productData.undsPorPlato
      categoria.current.value = productData.tipo
      img.current.value = productData.img
      setRenderEditForm(true)
    } 
  }

/*   const valueVistaPrevia = (e) => {
    e.preventDefault();
    setRenderPreview(true);
  }; */

  const getPreviewValues = () => {
    return {
      codigo: codigo.current.value ?? "",
      descripcion: descripcion.current.value ?? "",
      name: nombre.current.value ?? "",
      precio: precio.current.value ?? "",
      undsPorPlato: undsPorPlato.current.value ?? "",
      tipo: categoria.current.value ?? "",
      img: img.current.value ?? ""
    };
  };
  useEffect(() => {
    setRenderPreview(false);
    if (renderEditForm) {
      setFormValues();
      setRenderEditForm(false);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderPreview, renderEditForm]);

  // -------------------------------------------------------------

  return (
    <div className="title">
      {console.log(productData)}
      <h1>REGISTRO DE PRODUCTOS</h1>
      <form>
        <label>
          <p>Nombre</p>
          <input
            id="nombreProducto"
            name="nombreProducto"
            type="text"
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
              maxLength="10"
              ref={precio}
              value={newProduct.precio}
              onChange={(e) =>
                setNewProduct({ ...newProduct, precio: e.target.value })
              }
            />
          </label>

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
            maxLength="100"
            ref={descripcion}
            value={newProduct.descripcion}
            onChange={(e) =>
              setNewProduct({ ...newProduct, descripcion: e.target.value })
            }
          />
        </label>
        <label>
          <p>Imagen </p>
          <input 
            id="imgProducto"
            name="imgProducto"
            type="text"
            ref={img}
            value={newProduct.img}
            onChange={(e) =>
              setNewProduct({ ...newProduct, img: e.target.value })
            }                        
          />
        </label>
        {/* <button onClick={valueVistaPrevia}>Cargar vista previa</button> */}
      </form>
      <VistaPrevia values={getPreviewValues()} />
    </div>
  );
}

export default FormProducto;
