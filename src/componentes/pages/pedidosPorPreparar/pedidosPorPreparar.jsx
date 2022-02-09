import './pedidosPorPreparar.scss';

//
const PedidosPorPreparar = (props) => {
    return  ( 
        <div className="contenedorPedidosPorPreparar">
            <h2>PEDIDOS POR PREPARAR</h2>
            {props.content}
        </div>
    )
} 

export default PedidosPorPreparar