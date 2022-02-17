import React from "react";
import './botonesCRUD.scss';
import Swal from 'sweetalert2';
import BtnBorrar from '../../../img/iconos/eliminar.png'
import Editar from '../../../img/iconos/editar.png'
import { db } from "../../../firebase/firebase-config";
import { doc, deleteDoc, collection, getDocs } from "firebase/firestore";

const botones = props => {

  const ModalConfirmacionEditar = () => {
    console.log('vamos a editar esto');
    Swal.fire({
      text: '¿Está seguro que editar este usuario?',
      showCancelButton: true,
      confirmButtonColor: '#57a057',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      closeButtonAriaLabel: 'cerrar alerta'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title:'¡Procederemos a editar al usuario!',
          icon: 'info',
          text: 'Se redireccionará al formulario para realizar la modificaión',
          showConfirmButton: false,
          timer: 1500}
        ); 
        editarEmploye();
      }
      else{
        Swal.fire({
          title:'¡operación cancelada!',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500}
        ); 
      }
    })
  }

  const ModalConfirmacionCancelar = () => {
    Swal.fire({
      text: '¿Está seguro que desea cancelar el proceso?',
      showCancelButton: true,
      confirmButtonColor: '#57a057',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      closeButtonAriaLabel: 'cerrar alerta'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title:'¡Usuario Borrado!',
          text: 'El usuario fue borrado con éxito',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500}
        ); 
        eliminarEmploye(props);
      }
      else{
        Swal.fire({
          title:'¡operación cancelada!',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500}
        ); 
      }
    })
  }

  const eliminarEmploye = async (props) => {  
    await deleteDoc(doc(db, 'usuarios', props.id));
    obtenerUsuarios();   
  }

  const editarEmploye = () => {
  console.log('aca debemos ir al formulario de registro');
  }

  const obtenerUsuarios = async() => {
    const allEmployees = [];
    const employeesRef = collection(db, 'usuarios');
    const data = await getDocs(employeesRef);
    data.docs.forEach(doc => {
      const values = doc.data();
      allEmployees.push({
        id: doc.id,
        name: `${values.nombres.toUpperCase()}, ${values.apellidos.toUpperCase()}`, 
        codigo: values.codigo.toUpperCase() ,
        dni: values.dni,
        cargo: values.cargo.toUpperCase(),
        usuario: values.usuario.toUpperCase(),
        celular: values.celular
      }
    );
    console.log(allEmployees);
    props.estado(allEmployees);
  });
}
    
  return  ( 
    <div className='botonesCRUD' id={props}>
      <button type="onclick" className='botonEditar' onClick={ModalConfirmacionEditar}><img src={Editar} alt= "Editar"/></button>
      <button type="onclick" className='botonEliminar' onClick={ModalConfirmacionCancelar}><img src={BtnBorrar} alt= "BtnBorrar"/></button>
    </div>        
  )
} 

export default botones