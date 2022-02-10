import './pedido.scss';

function Pedido() {
    return (
        <div className="boxPedido">
            <div className='headerPedido'>
                <div className='detallePedido'>
                    <div className='dataCliente'>
                        <div className='dato1'>
                            <h5>Cliente:</h5>
                            <p>Lupita Diaz</p>
                        </div>
                        <div className='dato1'>
                            <h5>Entrada:</h5>
                            <p>12:20 PM</p>
                        </div>
                    </div>
                    <div className='dato2'>
                        <h5>N° Mesa:</h5>
                        <p>3</p>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <button type="button">Pedido</button>
                            </th>
                            <th>
                                <button type="button">Cantidad</button>
                            </th>
                            <th>
                                <button type="button">Precio</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hamburguesa</td>
                            <td>1</td>
                            <td>S./ 12.00</td>                                
                        </tr>
                        <tr>
                            <td>Agua</td>
                            <td>1</td>
                            <td>S./ 5.00</td>                                
                        </tr>
                    </tbody>
                </table>
                <div className='totalPedido'>
                    <p>Total</p>
                    <p>S./ 17.00</p>
                </div>
            </div>
            {/* <botonEstado/> */}
        </div>
    )
}

export default Pedido
