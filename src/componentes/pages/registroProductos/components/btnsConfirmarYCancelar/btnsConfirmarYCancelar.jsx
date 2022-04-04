import React, { useContext } from 'react';
import Swal from "sweetalert2";
import { UserProductContext } from '../../context/useProductContext';

function BtnsConfirmarYCancelar() {
  const { confirmarNuevoProducto, limpiarForm } = useContext(UserProductContext);

  const ModalConfirmarNuevoProducto = () => {
    Swal.fire({
      text: '¿Está seguro que desea agregar el nuevo producto?',
      showCancelButton: true,
      confirmButtonColor: '#57a057',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      closeButtonAriaLabel: 'cerrar alerta',
    }).then((result) => {
      if (result.isConfirmed) {
        if (confirmarNuevoProducto() !== false) {
          Swal.fire({
            title: '¡Producto Agregado!',
            text: 'El pedido fue agregado con éxito',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500, 
          });
        } else if (confirmarNuevoProducto() === false) {
          Swal.fire({
            title: '¡Producto Sin Agregar!',
            text: 'No se pudo completar la carga por falta de datos',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  const ModalCancelarNuevoProducto = (e) => {
    Swal.fire({
      text: "¿Está seguro que desea cancelar agregar este nuevo producto?",
      showCancelButton: true,
      confirmButtonColor: "#57a057",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      closeButtonAriaLabel: "cerrar alerta",
    }).then((result) => {
      if (result.isConfirmed) {
        limpiarForm();
      }
    });
  };

  return (
      <section className="btnsContainer gridResponsiveBtns">
        <button type="button" onClick={() => ModalConfirmarNuevoProducto()} className="confirm__button">
          Confirmar
        </button>
        <button type="button" onClick={() => ModalCancelarNuevoProducto()}className="cancel__button">
          Cancelar
        </button>
      </section>
  );
}

export default BtnsConfirmarYCancelar;
