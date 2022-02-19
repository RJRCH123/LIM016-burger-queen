import './pedido.scss';
import ProductosPedido from './productosPedido';

const Pedido = ({orden}) =>{
  //console.log(orden)
       
  return (
    <div className="boxPedido" id={orden.id}>
      <div className='headerPedido'>
        <div className='detallePedido'>
          <div className='dataCliente'>
            <div className='dato1'>
              <h5>Cliente:</h5>
              <p>{orden.cliente}</p>
            </div>
            <div className='dato1'>
              <h5>Entrada:</h5>
              <p>{orden.mesa}</p>
            </div>
          </div>
          <div className='dato2'>
            <h5>N° Mesa:</h5>
            <p>{orden.mesa}</p>
          </div>
        </div>
        <ProductosPedido key={orden.id} orden={ orden.orden }/>
        <div className='totalPedido'>
          <p>Total</p>
          <p>{orden.total}</p>
        </div>
      </div>        
    </div>
  )
}

export default Pedido
