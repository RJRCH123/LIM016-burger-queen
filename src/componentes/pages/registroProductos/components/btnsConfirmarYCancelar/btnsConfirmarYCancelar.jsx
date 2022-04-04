import React from "react";

function BtnsConfirmarYCancelar({submit, clear}) {

  return (
      <section className="btnsContainer gridResponsiveBtns">
        <button type="button" onClick={submit} className="confirm__button">
          Confirmar
        </button>
        <button type="button"  onClick={clear} className="cancel__button">
          Cancelar
        </button>
      </section>
  );
}

export default BtnsConfirmarYCancelar;
