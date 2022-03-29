import React from "react";
import "./vistaPrevia.scss";
import { images } from "../../constans/index";

function VistaPrevia() {
  return (
      <div className="containerPreview">
        <article className="modalDescripcion">
          <section className="imgInfo product">
            <img src={images.camara} alt="imagen" />
            <button>
              <img
                src={images.editarImagen}
                alt="imgIcon"
                className="editProduct"
              />
            </button>
          </section>
          <section className="tittleInfo">
            <h3>DESTALLES DEL PRODUCTO</h3>
          </section>
          <section className="nameInfo">
            <h5>KARMA CLÁSICA</h5>
          </section>
         
          <section className="detailsInfo">
            <p>
              <strong> Código: </strong> H001
            </p>
            <p>
              <strong> Categoría: </strong> Hamburguesa
            </p>
            <p>
              <strong> Descripción: </strong>Hamburguesas de Carne + Papas +
              Ensalada + Salsas Clásicas
            </p>
            <p>
              <strong> Unds. por Plato: </strong> 4
            </p>
            <br />
            <section className="precioInfo">
              <h6>S/. 12.90</h6>
            </section>
          </section>
        </article>
      </div>
  );
}

export default VistaPrevia;
