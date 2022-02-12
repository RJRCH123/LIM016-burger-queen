import './botonDescarga.scss';
import Descargar from '../../../img/iconos/descargarPDF.png'

const Descarga = () => {
    return  ( 
        
        <div className='botonDescarga'>
            <div className='boton'>
                <button type="onClick">Descargar PDF<img src={Descargar} alt= "descargar"/></button>                        
            </div>
        </div>
        
    )
} 

export default Descarga