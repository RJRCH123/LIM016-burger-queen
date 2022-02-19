import React, { useState } from "react";
import './botonPreparar.scss';

const listOptions = [
  { text: "Preparando", className: "btnPreparando" },
  { text: "Preparado", className: "btnPreparado" },
  { text: "Cancelar", className: "btnCancelar" },  
];

const BotonPreparar = (props) => {
  
  const [activeLink, setActiveLink] = useState(null);

  return listOptions.map((option, index) => {
    
    return  ( 
      <div className='botonPreparar' key={index}>
        <div className='botonSecPreparar'>
          <button            
            key={`${index}botonPreparar${props.info.id}`}
            className={option.className}          
            type="onClick"
            onClick={() => setActiveLink(index)           
          }>
          {option.text}
          {activeLink === index ? 'ACTIVO' : ""}
          </button>                    
        </div>
      </div>        
    )
  })
} 

export default BotonPreparar