import React from 'react';

import {
  NavRealizarPedido,
  ListadoProductosPorPedir,
  ResumenPedidoPorComprar
} from './containers';

import './realizarPedido.scss';


const RealizarPedido = () => {
  return  ( 
    <section>
      <div class="containerRP">
        <nav class="navRealizarPedido">
          <NavRealizarPedido />
        </nav>
        <article class="listadoProductosPorPedir">
          <ListadoProductosPorPedir />
        </article>
        <article class="resumenPedidosPorComprar">
          <ResumenPedidoPorComprar />
        </article>
      </div>
    </section>
  )
} 

export default RealizarPedido