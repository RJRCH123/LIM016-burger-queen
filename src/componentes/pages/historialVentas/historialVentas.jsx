import Encabezado from '../../utils/encabezado/encabezado';
import './historialVentas.scss';
import DescargarPdf from '../../utils/botonDescarga/botonDescarga'

const HistorialCocinero = () => {
    return  ( 
        <div>
            <h2>HISTORIAL VENTAS</h2>
            <Encabezado/>
            <DescargarPdf/>
        </div>
    )
} 

export default HistorialCocinero