import gif from '../../img/extra/Burgers-Gif.gif';
import './inicio.scss';

function landing() {
    return (
        <div className="inicio">            
            <div className="gif">
                <img src={gif} alt= "gif"/>
            </div> 
        </div>
    );
}

export default landing;