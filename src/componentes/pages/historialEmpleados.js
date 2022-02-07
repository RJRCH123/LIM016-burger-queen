import Logo from '../../img/logos/Logo-Circular.png';
import './historialEmpleados.scss';

const HistorialEmpleados = () => {
    return  ( 
        <div className='Historial'>
            {/* encabezado */}
            <div className='datosEmpresa'>
                <h2>HISTORIAL DE EMPLEADOS</h2>
                <div className='descripcion'>
                    <img src={Logo} alt= "logo"/>
                    <div>
                        <p>EMPRESA: Karma Burger</p>
                        <p>RUC: 0212124863342</p>
                    </div>
                    <p>FECHA: 20 / 04 / 21</p>
                </div>                
            </div>
            {/* tabla de empleados */}
            <div className='tablaEmpleados'>               
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
            </div>
            {/* sección del boton descarga */}
            <div className='secBoton'>
                <button type="submit">Descargar PDF</button>
            </div>            
        </div>
    )
} 

export default HistorialEmpleados