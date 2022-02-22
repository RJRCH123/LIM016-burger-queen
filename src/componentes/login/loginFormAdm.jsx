import { Link } from "react-router-dom";
import { db } from '../../firebase/firebase-config'
import { collection, getDocs, query, where} from 'firebase/firestore'; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import './login.scss';

function FormAdmin() {
	const [userName, setUserName] = useState("")
	const [userPassword, setUserPassword] = useState("")
	const navigate = useNavigate();

	const loginUser = (e) => {
		e.preventDefault();
		console.log('usuario: ' + userName)
		console.log('clave: ' + userPassword)   

		//mensajes de alerta y validación de la Auth del rol
		getUsers(userName, userPassword).then((user) => {
			storeUserData(user);
			if (user.cargo){
				console.log(user.cargo)
				if(user.cargo === "admin" ){
					console.log("entro en admin!");
					navigate("/admin/")
				}
				else if(user.cargo === "mesero" ){
					console.log("entro en mesero!");
					navigate("/mesero/")
				}
				else if(user.cargo === "cocinero" ){
					console.log("entro en cocinero!");
					navigate("/cocinero/")			
				}
			}		
		}).catch(() => {
			Swal.fire({
				title: 'Usuario Inválido',
				text: 'Por favor, revise que su usuario y/o contraseña se encuentren correctamente escritos.',
				allowOutsideClick: false,
				stopKeydownPropagation: false,
				showCloseButton: true,
				closeButtonAriaLabel: 'cerrar alerta'
			});
		});
	}

	const storeUserData = (user) => {
		const userData = {
			apellidos: user.apellidos,
			cargo: user.cargo, 
			codigo: user.codigo,
			correo: user.correo,
			nombres: user.nombres,
			usuario: user.usuario
		}
		localStorage.setItem('user', JSON.stringify(userData));
		console.log('entro en localStorage');
	}

	const getUsers = async (userName, userPassword) => {
		const userCollectionRef = query(collection(db, "usuarios"), where("usuario", "==", userName), where("contraseña", "==", userPassword));
		const dataDocs = await getDocs(userCollectionRef);
		const user = dataDocs.docs[0].data();	
		return user		
  	}

	const getRol = async (userMail) => {
		const userColRef = query(collection(db, "usuarios"), where("correo", "==", userMail));
		const dataDocs = await getDocs(userColRef);
		const user = dataDocs.docs[0].data();
		return user		
	}

	// mensajes de alerta y validación para la sección de Recuperar Contraseña
	const forgotPwsd = (e) => {
		e.preventDefault();
		Swal.fire({
			title: 'Recuperación de cuenta',
			text: 'Ingresa tu correo electrónico para enviarle un enlace de recuperación',
			input: 'email',
			inputAttributes: {
			  autocapitalize: 'off'
			},
			showCancelButton: true,
			confirmButtonText: 'Enviar',
			showLoaderOnConfirm: true,  
		}).then((result) => {			
			getRol(result.value).then((user) => {
				console.log('el usuario es:',user.usuario);
				if(user.cargo === "admin" && result.isConfirmed){
					console.log('Tiene cargo de admin');
					Swal.fire({
						title:`¡Correo enviado a ${result.value}!`,
						text: 'Por favor, revise su bandeja de entrada',
						icon: 'success',
						showConfirmButton: false,
						timer: 2000
					})
					//aqui va el método de firebase para enviar correo solicitando cambio de contraseña
				}
				else if(user.cargo === "mesero" || user.cargo === "cocinero"){
					console.log('Tiene cargo de mesero o cocinero!');
					Swal.fire({
						title: 'Opción Incorrecta',
						text: 'Solo el administrador tiene la opción de recuperar una cuenta. Por favor, acercarse al administrador para poder recuperar su cuenta.',
						allowOutsideClick: false,
						stopKeydownPropagation: false,
						showCloseButton: true,
						closeButtonAriaLabel: 'cerrar alerta'
					});
				}
				else {
					Swal.fire({
						title:`¡El correo es incorrecto!`,
						text: `El email ${result.value} no coincide con el registrado para este usuario`,
						icon: 'error',
						showConfirmButton: false,
						timer: 2000
					})
				}						
			}).catch(() => {
				console.log('Datos de ingreso inválidos');
				Swal.fire({
					title: 'Usuario Inválido',
					text: `Por favor, revise que el email ingresado ${result.value} corresponda a un usuario existente.`,
					allowOutsideClick: false,
					stopKeydownPropagation: false,
					showCloseButton: true,
					closeButtonAriaLabel: 'cerrar alerta'
				}); 
			})				 
		})		
	} 

	return (
		<form className="login-form" >
			<p className="login-text">
				<span className="fa-stack fa-lg">
					<i className="fa fa-circle fa-stack-2x"></i>
					<i className="fa fa-lock fa-stack-1x"></i>
				</span>
			</p>
			<input 
				type="email" 
				className="login-username" 
				autoFocus={true} 
				required={true} 
				placeholder="Usuario"
				onChange={(event) => {
					setUserName(event.target.value)
				}}
			/>
			<input 
				type="password" 
				className="login-password" 
				autoFocus={true}
				required={true} 
				placeholder="Contraseña"
				onChange={(event) => {
					setUserPassword(event.target.value)
				}} 
			/>
			<a href="google.com" className="login-forgot-pass" onClick={forgotPwsd}> ¿Olvidaste tu contraseña? </a>
			<Link to='/{admin}/'><input type="submit" name="Iniciar Sesión" value="Iniciar Sesión" className="login-submit" onClick={loginUser}/></Link> 
		</form>            
	);
}
export default FormAdmin;