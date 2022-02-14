import React from 'react';
import Swal from 'sweetalert2';
import './btnsCancelarYConfirmar.scss';

const BtnsCancelarYConfirmar = () => {

  
  const modalConfirmarOrden = () => {
    Swal.fire({
      title: 'Detalle del Pedido',
      text: '¿Está seguro que desea enviar el pedido a cocina?',
      showCancelButton: true,
      confirmButtonColor: '#57a057',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title:'¡Pedido Confirmado!',
          text: 'El pedido fue enviado a cocina con éxito',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500}
        )
      }
    })
  }

  const modalCancelarOrden = () => {
    Swal.fire({
      text: '¿Está seguro que desea cancelar el pedido?',
      showCancelButton: true,
      confirmButtonColor: '#57a057',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title:'¡Pedido Cancelado!',
          text: 'El pedido fue cancelado con éxito',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500}
        )
      }
    })
  }


  return <div>
    <section className="btnsContainer gridResponsiveBtns">
      <button type="button" onClick={() => modalConfirmarOrden()}  className="confirm__button">Confirmar</button>
      <button type="button" onClick={() => modalCancelarOrden()}  className="cancel__button">Cancelar</button>
    </section>
  </div>;
};

export default BtnsCancelarYConfirmar;

