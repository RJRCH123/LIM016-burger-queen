import Logo from './img/logos/Logo-Circular.png';
import Firma from './img/logos/Logo-MR-Blanco.png';
import FormAdmin from './loginFormAdm';
import FormEmploy from './loginFormEmploy';
import './login.scss';

function Login() {
    return (
        <div className="renderLogin">
            <div className="logo-principal">
                <img src={Logo} alt= "logo"/>
            </div>
            <FormEmploy/>
            <div className="underlay-photo"></div>
            <div className="underlay-black"></div> 
            <div className="firma">
                <img src={Firma} alt= "logo"/>
            </div>
        </div>
    );
}

export default Login;


