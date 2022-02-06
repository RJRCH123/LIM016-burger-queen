import gif from '../../img/extra/Burgers-Gif.gif';
import { Link } from "react-router-dom";
import './inicio.scss';

function landing() {
    return (
        <div className="inicio">            
            <div className="gif">
                <img src={gif} alt= "gif"/>
                <div className='selecLogin'>
                    <Link to='/admin'><input type="submit" value="Administrador" class="bottonAdmin" /></Link> 
                    <Link to='/Employe'><input type="submit" value="Empleado" class="bottonEmploye"/></Link>
                </div>               
            </div> 
        </div>
    );
}

export default landing;