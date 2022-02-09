import Encabezado from '../../utils/encabezado/encabezado';
import './historialEmpleados.scss';
import DescargarPdf from '../../utils/botonDescarga/botonDescarga'

const HistorialEmpleados = () => {
    return  ( 
        <div className='Historial'>
            <h2>HISTORIAL EMPLEADOS</h2>
            <Encabezado/>
           
            {/* <div className='tablaEmpleados'>               
                <div className='leyenda'>
                    <div className='tituloTable'>
                        <table>
                            <tr>
                                <th>N°</th>
                                <th>DATOS PERSONALES</th>
                                <th>DATOS OTORGADOS</th>
                            </tr>
                        </table>
                        <div className='vacio'></div>
                    </div>                   
                    <div className='tablaIndividual'>
                        <table>
                            <tr>
                                <th>1</th>
                                <td>Data</td>  
                                <td>Data</td>                              
                            </tr>
                        </table>
                        <div className='botonesCRUD'>
                            <button type="onclick" className='botonEditar'>Editar</button>
                            <button type="onclick" className='botonEliminar'>Eliminar</button>
                        </div>
                    </div>
                    <div className='tablaIndividual'>
                        <table>
                            <tr>
                                <th>2</th>
                                <td>Data</td>
                                <td>Data</td>
                            </tr>
                        </table>
                        <div className='botonesCRUD'>
                            <button type="onclick" className='botonEditar'>Editar</button>
                            <button type="onclick" className='botonEliminar'>Eliminar</button>
                        </div>
                    </div> 
                    <div className='tablaIndividual'>
                        <table>
                            <tr>
                                <th>3</th>
                                <td>Data</td>
                                <td>Data</td>
                            </tr>
                        </table>
                        <div className='botonesCRUD'>
                            <button type="onclick" className='botonEditar'>Editar</button>
                            <button type="onclick" className='botonEliminar'>Eliminar</button>
                        </div>
                    </div> 
                    <div className='tablaIndividual'>
                        <table>
                            <tr>
                                <th>4</th>
                                <td>Data</td>
                                <td>Data</td>
                            </tr>
                        </table>
                        <div className='botonesCRUD'>
                            <button type="onclick" className='botonEditar'>Editar</button>
                            <button type="onclick" className='botonEliminar'>Eliminar</button>
                        </div>
                    </div>                                             
                </div>               
            </div> */}
            
            <DescargarPdf/>
        </div>
    )
} 

export default HistorialEmpleados