import './pedidosEntregar.scss';
import Pedido from '../../utils/pedido/pedido'
import BotonEntegar from '../../utils/botonEntregar/botonEntregar'

const detallePedidos = [ 
    {id: 2, cliente: "Maria Camacho", hora: "3:15 PM", mesa:"1"},
    {id: 3, cliente: "Cristhian Hernandez", hora: "4:02 PM", mesa:"2"},
    {id: 2, cliente: "Maria Camacho", hora: "3:15 PM", mesa:"1"},
    {id: 3, cliente: "Cristhian Hernandez", hora: "4:02 PM", mesa:"2"},
    {id: 2, cliente: "Maria Camacho", hora: "3:15 PM", mesa:"1"},
    {id: 3, cliente: "Cristhian Hernandez", hora: "4:02 PM", mesa:"2"}
];

const getCardOrder = (detallePedidos) => {
    return detallePedidos.map(detallePedido => {
        return <div className='contenedorPedido'> 
                    <Pedido key={detallePedido.id} orden={ detallePedido }/>
                    <BotonEntegar key={detallePedido.id}/>
                </div>
    })
    
};

const PedidosEntregar = () => {
    
    const cardList = getCardOrder(detallePedidos);

    return  ( 
        <div className="contenedorPedidosEntregar">
            <h2>PEDIDOS POR ENTREGAR</h2>
            <div className='gridResponsivePE'>
                { cardList }
            </div>
        </div>
    )
} 

export default PedidosEntregar