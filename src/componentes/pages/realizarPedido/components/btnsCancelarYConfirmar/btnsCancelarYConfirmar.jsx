import React from 'react';
import './btnsCancelarYConfirmar.scss';

const BtnsCancelarYConfirmar = () => (
  <div>
    <section className="btnsContainer gridResponsiveBtns">
      <button type="button" className="confirm__button">Confirmar</button>
      <button type="button" className="cancel__button">Cancelar</button>
    </section>
    <button type="button" className="limpiar__button">Limpiar</button>
  </div>
);

export default BtnsCancelarYConfirmar;
