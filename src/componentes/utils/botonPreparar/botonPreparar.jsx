import React from "react";
import { db } from "../../../firebase/firebase-config";
import { deleteDoc, doc} from 'firebase/firestore';
import './botonPreparar.scss';



const BotonPreparar = (props) => {

  // método que elimina el pedido de la colección
  const eliminarPedido = async (id) => { 
    await deleteDoc(doc(db, 'pedidos', id)); 
    props.loading(true);   
      
  }

  const listOptions = [
    { text: "Preparando", className: "btnPreparando" },
    { text: "Preparado", className: "btnPreparado" },
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