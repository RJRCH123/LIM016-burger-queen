import './realizarPedido.scss';

//
const RealizarPedido = (props) => {
    return  ( 
        <div className="contenedorRealizarPedido">
            <p>esta es la sección para realizar pedido</p>
            {props.content}
        </div>
    )
} 

export default RealizarPedido