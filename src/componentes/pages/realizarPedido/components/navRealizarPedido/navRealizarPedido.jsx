import React, { useContext } from 'react';
import { images } from '../../constans/index';
import { UserContext } from '../../context/UserContext';
import './navRealizarPedido.scss';

function  NavRealizarPedido() {
  const { cliente, setCliente } = useContext(UserContext)

  let date = new Date();
  
  return ( 
    <div className="navRP">
      <div className="fechaYhora">
        <label>
          <img src={images.reloj} alt="reloj" /> <p> Hora: {date.toLocaleTimeString()} </p>
        </label>
        <label>
          <img src={images.calendario} alt="calendario" /><p>Fecha: {date.toLocaleDateString()}</p>
        </label>
      </div>
  
      <div className="inputMesa">
        <label >
          <p>Mesa:</p>
          <input 
          id="nMesa" 
          name="nMesa" 
          type="nMesa" 
          value={cliente.mesa}
          onChange={(e) => setCliente({...cliente, mesa: e.target.value})}/>
        </label>
      </div>
      
      <div className="inputCliente">
        <label >
          <p>Cliente:</p>
          <input 
          id="nombreCliente" 
          name="nombreCliente" 
          type="nombreCliente"
          value={cliente.cliente}
          onChange={(e) => setCliente({...cliente, cliente: e.target.value})}/>
        </label>
      </div>
    </div>
  );
}

export default NavRealizarPedido;