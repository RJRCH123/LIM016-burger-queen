import React, { useState } from "react";
import './tablaPedidos.scss';



const ProductsTable = props => {
    
    const { products } = props;
    const [sortedField, setSortedField] = useState(null);
    let sortedProducts = [...products];
    if (sortedField !== null) {
        sortedProducts.sort((a, b) => {
          if (a[sortedField] < b[sortedField]) {
            return -1;
          }
          if (a[sortedField] > b[sortedField]) {
            return 1;
          }
          return 0;
        });
    }
    
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <button type="button" onClick={() => setSortedField("name")}>Nombre</button>
                    </th>
                    <th>
                        <button type="button" onClick={() => setSortedField("price")}>Precio</button>
                    </th>
                    <th>
                        <button type="button" onClick={() => setSortedField("stock")}>Cantidad de inventario</button>
                    </th>
                </tr>
            </thead>
            <tbody>
            {products.map(product => (
                <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default ProductsTable
