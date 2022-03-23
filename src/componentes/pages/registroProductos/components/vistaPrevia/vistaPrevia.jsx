import React from "react";
import "./vistaPrevia.scss";
import { images } from "../../constans/index";

function VistaPrevia() {
  return (
      <div className="containerPreview">
        <article class="modalDescripcion">
          <section class="imgInfo product">
            <img src={images.camara} alt="imagen" />
            <button>
              <img
                src={images.editarImagen}
                alt="imgIcon"
                className="editProduct"
              />
            </button>
          </section>
          <section class="tittleInfo">
            <h3>DESTALLES DEL PRODUCTO</h3>
          </section>
          <section class="nameInfo">
            <h5>KARMA CLÁSICA</h5>
          </section>
          <section class="precioInfo">
            <h6>S/. 12.90</h6>
          </section>
          <section class="detailsInfo">
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
          </section>
        </article>
      </div>
  );
}

export default VistaPrevia;
