import './pedidosEntregar.scss';

//debo hacer el contenedor que tendra el pedido y los botones de confirmación de entrega 
const PedidosEntregar = (props) => {
    return  ( 
        <div className="contenedorPedidosEntregar">
            <h2>PEDIDOS POR ENTREGAR</h2>
            {props.content}
        </div>
    )
} 

export default PedidosEntregar