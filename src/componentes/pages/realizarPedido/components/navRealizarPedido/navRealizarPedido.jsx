import React, { useContext, useState } from 'react';
import { images } from '../../constans/index';
import './navRealizarPedido.scss';

function  NavRealizarPedido() {
  const [name, setName] = useState('');
  const [mesa, setMesa] = useState('');

  return ( 
    <div className="navRP">
      <div className="fechaYhora">
        <label>
          <p><img src={images.reloj} alt="reloj" /> Hora: 15:36pm</p>
        </label>
        <label>
          <p><img src={images.calendario} alt="calendario" />Fecha: 22 Abril 2021</p>
        </label>
      </div>
  
      <div className="inputMesa">
        <label >
          <p>Mesa:</p>
          <input 
          id="nMesa" 
          name="nMesa" 
          type="nMesa" 
          value={mesa}
          onChange={(e) => setMesa(e.target.value)}/>
        </label>
      </div>
      
      <div className="inputCliente">
        <label >
          <p>Cliente:</p>
          <input 
          id="nombreCliente" 
          name="nombreCliente" 
          type="nombreCliente"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
        </label>
      </div>
    </div>
  );
}

export default NavRealizarPedido;