import React from 'react';

import { BtnsCancelarYConfirmar } from './components';
import NavListadoProductosPorPedir from './components/navListadoProductosPorPedir/navListadoProductosPorPedir';
import NavTablaResumenPedido from './components/navTablaResumenPedido/navTablaPedido';
import PrecioTotal from './components/precioTotal/precioTotal';

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
        <div class="navRealizarPedido">
          <NavRealizarPedido />
        </div>
        <div class="navListadoProductosPorPedir">
          <NavListadoProductosPorPedir />
        </div>
        <div class="navTablaResumenPedido">
          <NavTablaResumenPedido />
        </div>
        <div class="listadoProductosPorPedir">
          <ListadoProductosPorPedir />
        </div>
        <div class="resumenPedidosPorComprar">
          <ResumenPedidoPorComprar />
        </div>
        <div class="precioTotal">
          <PrecioTotal />
        </div>
        <div class="btnsCancelarYConfirmar">
          <BtnsCancelarYConfirmar />
        </div>
      </div>
    </section>
  )
} 

export default RealizarPedido