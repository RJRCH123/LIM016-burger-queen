import { BtnsCancelarYConfirmar, NavRealizarPedido, ProductoPorComprar, ProductoPorPedir } from './components';
import NavListadoProductosPorPedir from './components/navListadoProductosPorPedir/navListadoProductosPorPedir';
import NavTablaResumenPedido from './components/navTablaResumenPedido/navTablaPedido';
import PrecioTotal from './components/precioTotal/precioTotal';

import './realizarPedido.scss';

const RealizarPedido = () => {

  return  ( 
    <section className='marginFlex' data-testid="test-section">
      <div className="containerRP">
        <div className="navRealizarPedido">
          <NavRealizarPedido />
        </div>
        <div className="navListadoProductosPorPedir">
          <NavListadoProductosPorPedir />
        </div>
        <div className="navTablaResumenPedido">
          <NavTablaResumenPedido />
        </div>
        <div className="listadoProductosPorPedir">
          <ProductoPorPedir />
        </div>
        <div className="resumenPedidosPorComprar">
          <ProductoPorComprar />
        </div>
        <div className="precioTotal">
          <PrecioTotal />
        </div>
        <div className="btnsCancelarYConfirmar">
          <BtnsCancelarYConfirmar />
        </div>
      </div>
    </section>
  )
} 

export default RealizarPedido