import './pedidosPreparados.scss';

const PedidosPreparados = (props) => {
    return  ( 
        <div className="contenedorPedidos">
            <h2>PEDIDOS PREPARADOS</h2>
            {props.content}
        </div>
    )
} 

export default PedidosPreparados