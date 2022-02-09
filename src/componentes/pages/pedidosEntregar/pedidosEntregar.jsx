import './pedidosEntregar.scss';

//debo hacer el contenedor que tendra el pedido y los botones de confirmación de entrega 
const PedidosEntregar = (props) => {
    return  ( 
        <div className="contenedorPedidosEntregar">
            {props.content}
        </div>
    )
} 

export default PedidosEntregar