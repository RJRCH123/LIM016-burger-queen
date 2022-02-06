import gif from '../../img/extra/Burgers-Gif.gif';
import './inicio.scss';

function landing() {
    return (
        <div className="inicio">            
            <div className="gif">
                <img src={gif} alt= "gif"/>
                <div className='selecLogin'>
                    <input type="submit" value="Administrador" class="bottonAdmin" />
                    <input type="submit" value="Empleado" class="bottonEmploye" />
                </div>               
            </div>            
        </div>
    );
}

export default landing;