import React from 'react';

import {
  NavRealizarPedido,
  ListadoProductosPorPedir,
  ResumenPedidoPorComprar
} from './containers';

import './realizarPedido.scss';

const RealizarPedido = () => {
  return  ( 
    <div>
      <div class="containerRP">
        <div class="navRealizarPedido">
          <NavRealizarPedido />
        </div>
        <div class="listadoProductosPorPedir">
          <ListadoProductosPorPedir />
        </div>
        <div class="resumenPedidosPorComprar">
          <ResumenPedidoPorComprar />
        </div>
      </div>
    </div>
  )
} 

export default RealizarPedido