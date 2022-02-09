import Logo from '../../../img/logos/Logo-Circular.png';
import './historialVentas.scss';
const HistorialCocinero = () => {
    return  ( 
        <div>
            <div className='datosEmpresa'>
                <h2>HISTORIAL DE VENTAS</h2>
                <div className='descripcion'>
                    <img src={Logo} alt= "logo"/>
                    <div>
                        <p>EMPRESA: Karma Burger</p>
                        <p>RUC: 0212124863342</p>
                    </div>
                    <p>FECHA: 20 / 04 / 21</p>
                </div>
            </div>
        </div>
    )
} 

export default HistorialCocinero