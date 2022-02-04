/* import logo from './logo.svg'; */
import './login.scss';

/* function Login() {
    return (
        <div className="App">
            
            <form class="login-form">
                <p class="login-text">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-lock fa-stack-1x"></i>
                    </span>
                </p>
                <input type="email" class="login-username" autofocus="true" required="true" placeholder="Email" />
                <input type="password" class="login-password" required="true" placeholder="Password" />
                <input type="submit" name="Login" value="Login" class="login-submit" />
            </form>
            
        </div>
    );
} */

function Login() {
    return (
        <div className="renderLogin">
            <form class="login-form">
                <p class="login-text">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-lock fa-stack-1x"></i>
                    </span>
                </p>
                <input type="email" class="login-username" autofocus="true" required="true" placeholder="Email" />
                <input type="password" class="login-password" required="true" placeholder="Password" />
                <a href="google.com" class="login-forgot-pass"> ¿Olvidaste tu contraseña? </a>
                <input type="submit" name="Iniciar Sesión" value="Iniciar Sesión" class="login-submit" />
            </form>            
            <div class="underlay-photo"></div>
            <div class="underlay-black"></div> 
        </div>
    );
}

export default Login;


