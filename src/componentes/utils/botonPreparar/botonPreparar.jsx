import React from "react";
import { db } from "../../../firebase/firebase-config";
import { deleteDoc, doc, updateDoc} from 'firebase/firestore';
import './botonPreparar.scss';



const BotonPreparar = (props) => {

  // método que elimina el pedido de la colección
  const eliminarPedido = async (id) => { 
    await deleteDoc(doc(db, 'pedidos', id)); 
    props.loading(true);   
      
  }

  // método que actualiza el estado del pedido, y lo elimina de la colección 
  	
  const actualizarEstado = async (id) => {
    const pedidoDocRef = doc(db, 'pedidos', id)
    await updateDoc(pedidoDocRef, {
      estado: "preparado"        
    });    
    props.loading(true); 
  }
	
  const listOptions = [
    { text: "Preparando", className: "btnPreparando" },
    { text: "Preparado", className: "btnPreparado", operacion: actualizarEstado},
    { text: "Cancelar", className: "btnCancelar", operacion: eliminarPedido },  
  ];
  
  return listOptions.map((option, index) => {
    
    return  ( 
      <div className='botonPreparar' key={index}>
        <div className='botonSecPreparar'>
          <button        
            key={`${index}botonPreparar${props.info.id}`}
            className={option.className}          
            type="onClick"
            onClick= {() => option.operacion(props.info.id) }         
          >
          {option.text}
          </button>                    
        </div>
      </div>        
    )
  })
} 

export default BotonPreparar