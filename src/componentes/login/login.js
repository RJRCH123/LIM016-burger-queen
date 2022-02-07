import Logo from '../../img/logos/Logo-Circular.png';
import Firma from '../../img/logos/Logo-MR-Blanco.png';
import './login.scss';

function Login(props) {
    return (
        <div className="App-Login body-login">
            <div className="renderLogin">
                <div className="logo-principal">
                    <img src={Logo} alt="logo" />
                </div>
                {props.form}
                <div className="underlay-photo"></div>
                <div className="underlay-black"></div>
                <div className="firma">
                    <img src={Firma} alt="logo" />
                </div>
            </div>
        </div>

    );
}

export default Login;