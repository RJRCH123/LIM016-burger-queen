import React from 'react';
import './btnsCancelarYConfirmar.scss';

const BtnsCancelarYConfirmar = () => {

  return <div>
    <section className="btnsContainer gridResponsiveBtns">
      <button type="button" className="confirm__button">Confirmar</button>
      <button type="button" className="cancel__button">Cancelar</button>
    </section>
  </div>;
};

export default BtnsCancelarYConfirmar;

