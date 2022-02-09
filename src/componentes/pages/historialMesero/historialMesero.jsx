import Encabezado from '../../utils/encabezado/encabezado';
import './historialMesero.scss';
import DescargarPdf from '../../utils/botonDescarga/botonDescarga'

const HistorialCocinero = () => {
    return  ( 
        <div>
            <h2>HISTORIAL PEDIDOS</h2>
            <Encabezado/>
            <DescargarPdf/>
        </div>
    )
} 

export default HistorialCocinero