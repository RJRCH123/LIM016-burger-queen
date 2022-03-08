import React, { useState, useEffect} from "react";
import './tablaPedidos.scss';



const useSortableData = ((items, config = null) => {
   const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useEffect(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }
  return sortableItems;
  }, [items, sortConfig]);

  const requestSort = key => {
    let direction = "descending";       
    if ( sortConfig !== null && sortConfig.key === key && sortConfig.direction === "descending" ) {
      sortedItems(key);
      direction = "ascending";
    }        
    setSortConfig({ key, direction });  
  };
  return { items, requestSort };
});

const ProductsTable = props => {
    
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = name => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table id="historial-Ventas-Karma">
      <thead>
        <tr>
          <th width= '5%' >
            <button type="button" onClick={() => requestSort("id")} className={getClassNamesFor("id")}>N°</button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort("codigo")} className={getClassNamesFor("fecha")}>FECHA</button>
              
          </th>
          <th>
            <button type="button" onClick={() => requestSort("hora")} className={getClassNamesFor("hora")}>HORA</button>
              
          </th>
          <th>
            <button type="button" onClick={() => requestSort("cocinero")} className={getClassNamesFor("cliente")}>CLIENTE</button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort("pedido")} className={getClassNamesFor("pedido")}>PEDIDO</button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort("monto")} className={getClassNamesFor("monto")}>MONTO</button>
          </th>
        </tr>               
      </thead>
      <tbody>
        {console.log(items)}
        {items.map((item, index) => (
          <tr key={item.id}>
            <td>{index+1}</td>
            <td>{item.timestamp}</td>
            <td>{item.hora}</td>
            <td>{item.cliente}</td>
            <td>{item.pedido}</td>
            <td>{`S/. `}{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable
