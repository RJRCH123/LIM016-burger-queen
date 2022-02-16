import Encabezado from '../../utils/encabezado/encabezado';
import DescargarPdf from '../../utils/botonDescarga/botonDescarga'
import ProductsTable from '../../utils/tablaEmpleados/tablaEmpleados';
import './historialEmpleados.scss';

const empleados = [ 
  {id:1, codigo: "M001", dni:"2456315",rol:"mesero", name:"Quispe Pereza, Juan Alberto", usuario:"JuaM001", contraseña:"2456315"}, 
  {id:2, codigo: "M002", dni:"2456315",rol:"mesero", name:"Rodriguez Diaz, Martha", usuario:"MarM002", contraseña:"2456315"}, 
  {id:3, codigo: "M003", dni:"2456315",rol:"mesero", name:"Córdova Ramirez, Pablo Elias", usuario:"PabM003", contraseña:"2456315"},
  {id:4, codigo: "M004", dni:"2456315",rol:"mesero", name:"Chumbes Gutierrez, Hernán", usuario:"HerM004", contraseña:"2456315"},
  {id:5, codigo: "M005", dni:"2456315",rol:"mesero", name:"Reyes Echevarría, Sthepñany", usuario:"SthM005", contraseña:"2456315"}   
];

const HistorialEmpleados = () => {
  return  ( 
    <div className='Historial'>
      <h2>HISTORIAL EMPLEADOS</h2>
      <Encabezado/>
      <ProductsTable products={ empleados } />
      <DescargarPdf/>
    </div>
  )
} 

export default HistorialEmpleados