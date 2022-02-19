import React, { useState } from "react";
import './botonPreparar.scss';

const listOptions = [
  { text: "Preparando", className: "btnPreparando" },
  { text: "Preparado", className: "btnPreparado" },
  { text: "Cancelar", className: "btnCancelar" },  
];

const BotonPreparar = () => {

  const [activeLink, setActiveLink] = useState(null);

  return listOptions.map((option, index) => {
    return  ( 
      <div className='botonPreparar'>
        <div className='botonSecPreparar'>
          <button 
            key={index}
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