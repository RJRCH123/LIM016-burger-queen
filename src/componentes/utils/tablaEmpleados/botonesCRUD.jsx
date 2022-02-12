import React from "react";
import './botonesCRUD.scss';

const botones = () => {
    return  ( 
        <div className='botonesCRUD'>
            <button type="onclick" className='botonEditar'>Editar</button>
            <button type="onclick" className='botonEliminar'>Eliminar</button>
        </div>        
    )
} 

export default botones