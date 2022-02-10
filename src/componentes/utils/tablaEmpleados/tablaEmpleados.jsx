import React, { useState, useMemo} from "react";
import botones from './botonesCRUD';
import './tablaEmpleados.scss';

const useSortableData = ((items, config = null) => {
   const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
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
        <table>
            <thead>
                <tr>
                    <th>
                        <button type="button" onClick={() => requestSort("id")} className={getClassNamesFor("id")}>N°</button>
                    </th>
                    <th>
                        <button type="button" onClick={() => requestSort("name")} className={getClassNamesFor("codigo")}>Código</button>
                        
                    </th>
                    <th>
                        <button type="button" onClick={() => requestSort("dni")} className={getClassNamesFor("dni")}>DNI</button>
                        
                    </th>
                    <th>
                        <button type="button" onClick={() => requestSort("name")} className={getClassNamesFor("name")}>Mesero</button>
                    </th>
                    <th>
                        <button type="button" onClick={() => requestSort("usuario")} className={getClassNamesFor("usuario")}>Usuario</button>
                    </th>
                    <th>
                        <button type="button" onClick={() => requestSort("contraseña")} className={getClassNamesFor("contraseña")}>Contraseña</button>
                    </th>
                </tr>               
            </thead>
            <tbody>

                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.codigo}</td>
                        <td>{item.dni}</td>
                        <td>{item.name}</td>
                        <td>{item.usuario}</td>
                        <td>{item.contraseña}</td>
                        <td>{<botones/>}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductsTable
