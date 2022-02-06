import './registro.scss';
import Logo from '../../img/logos/Logo-nav.png';
import LogoAdmin from '../../img/iconos/trajeAdmin.png';
import HM from '../../img/iconos/HM.png';
import HC from '../../img/iconos/HC.png';
import PE from '../../img/iconos/PE.png';
import PP from '../../img/iconos/PP.png';
import HV from '../../img/iconos/HV.png';
import HE from '../../img/iconos/HE.png';
import RP from '../../img/iconos/RP.png';
import BH from '../../img/iconos/botton-home.png';
import BS from '../../img/iconos/botton-salir.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
             <div className="logo-registro">
                <img src={Logo} alt= "logo"/>
            </div>
        </div>
    )
}

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className='logoSideBar'>
                <img src={LogoAdmin} alt= "logoAdmin"/>
            </div>
            <div className='dataUser'>
                <h4>NOMBRE</h4>
                <p>ADMINISTRADOR</p>
            </div>
            <ul>
                <li>
                    <Link to='/admin/registro/registro-personal'>
                        <div className='SideBar-bottons'>
                            <img src={RP} alt= "RP"/>
                            <p>Registrar Personal</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/admin/registro/historial-empleados'>
                        <div className='SideBar-bottons'>
                            <img src={HE} alt= "HE"/>
                            <p>Historial de Empleados</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/admin/registro/historial-ventas'>
                        <div className='SideBar-bottons'>
                            <img src={HV} alt= "HV"/>
                            <p>Historial de Ventas</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/admin/registro/pedidos-preparados'>
                        <div className='SideBar-bottons'>
                            <img src={PP} alt= "PP"/>
                            <p>Pedidos Preparados</p>
                        </div
                    ></Link>
                </li>
                <li>
                    <Link to='/admin/registro/pedidos-entregar'>
                        <div className='SideBar-bottons'>
                            <img src={PE} alt= "PE"/>
                            <p>Pedidos para Entregar</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/admin/registro/historial-cocinero'>
                        <div className='SideBar-bottons'>
                            <img src={HC} alt= "HC"/>
                            <p>Historial Pedidos Cocinero</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/admin/registro/historial-mesero'>
                        <div className='SideBar-bottons'>
                            <img src={HM} alt= "HM"/>
                            <p>Historial Pedidos Mesero</p>
                        </div>
                    </Link>
                </li>
            </ul>
            <div className='bottons'>
                <button><img src={BH} alt= "BH"/></button>
                <button><img src={BS} alt= "BS"/></button>               
            </div>
        </div>
    )
}

function Registro(props) {
    return (       
        <div className="container">
            <Navbar/> 
            <div className='flex'>                
                <SideBar/>
                <div className='content'>
                    {props.content}                            
                </div>                
            </div>       
        </div>
              
    );
}

export default  Registro;