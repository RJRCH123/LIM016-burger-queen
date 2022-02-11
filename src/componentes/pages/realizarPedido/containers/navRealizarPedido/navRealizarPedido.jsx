import React from 'react';
import { images } from '../../constans/index';
import './navRealizarPedido.scss';

const   NavRealizarPedido = () => (
  <div class="navRP">
    <div class="fechaYhora">
      <label>
        <p><img src={images.reloj} alt="reloj" />Hora:</p>
        <p>15:36pm</p>
      </label>
      <label>
        <p><img src={images.calendario} alt="calendario" />Fecha:</p>
        <p>22 Abril 2021</p>
      </label>
    </div>

    <div class="inputMesa">
      <label >
        <p>Mesa:</p>
        <input 
        id="nMesa" 
        name="nMesa" 
        type="nMesa"/>
      </label>
    </div>
    
    <div class="inputCliente">
      <label >
        <p>Nombre de Cliente:</p>
        <input 
        id="nombreCliente" 
        name="nombreCliente" 
        type="nombreCliente"/>
      </label>
    </div>
  </div>
);

export default NavRealizarPedido;