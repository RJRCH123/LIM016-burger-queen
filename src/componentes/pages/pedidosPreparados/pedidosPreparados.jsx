import './pedidosPreparados.scss';

const PedidosPreparados = (props) => {
    return  ( 
        <div className="contenedorPedidos">
            <p>esta es la sección para observar los pedidos preparados</p>
            {props.content}
        </div>
    )
} 

export default PedidosPreparados