import './pedido.scss';

const ProductosPedido = ({orden}) =>{
    //console.log(orden)
         
    return ( 
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
                {orden.map(orden => {
                    //console.log(orden.id);
                    return (
                        <tr productoId={orden.codigoProducto}>
                            <td>{orden.name}</td>
                            <td>{orden.count}</td>
                            <td>{orden.precio}</td>                                
                        </tr> 
                    )})
                }                               
            </tbody>
        </table>         
    )
  }
  
  export default ProductosPedido