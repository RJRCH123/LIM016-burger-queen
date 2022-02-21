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
		getUsers(userName, userPassword).then((user) => {
			console.log(user);
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

	const getUsers = async (userName, userPassword) => {
		const userCollectionRef = query(collection(db, "usuarios"), where("usuario", "==", userName), where("contraseña", "==", userPassword));
		const dataDocs = await getDocs(userCollectionRef);
		const user = dataDocs.docs[0].data();	
		return user		
  	}

	const getRol = async (userName, userRol, userMail) => {
		const userColRef = query(collection(db, "usuarios"), where("correo", "==", userMail));
		const dataDocs = await getDocs(userColRef);
		const user = dataDocs.docs[0].data();	
		console.log(user);
		return user		
	}

	const forgotPwsd = (e) => {
		e.preventDefault();
		getRol(userName).then((user) => {
			if (user.cargo){
				if(user.cargo === "admin" ){
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
						if (result.isConfirmed) {
						  Swal.fire({
							title:`¡Correo enviado a ${result.value}!`,
							text: 'Por favor, revise su bandeja de entrada',
							icon: 'success',
							showConfirmButton: false,
							timer: 2000
						  })} else {
							Swal.fire({
							  title:`¡El correo es incorrecto!`,
							  text: `El email ${result.value} no coincide con el registrado para este usuario`,
							  icon: 'error',
							  showConfirmButton: false,
							  timer: 2000
							})}; 
						  /* cleanInputs() */         
					  })
				}
				else if(user.cargo === "mesero" | user.cargo === "cocinero"){
					Swal.fire({
						title: 'Opción Incorrecta',
						text: 'Solo el administrador tiene la opción de recuperar una cuenta. Por favor, acercarse al administrador para poder recuperar su cuenta.',
						allowOutsideClick: false,
						stopKeydownPropagation: false,
						showCloseButton: true,
						closeButtonAriaLabel: 'cerrar alerta'
					});
				}
			}		
		}).catch(() => {
            Swal.fire({
				title: 'Usuario Inválido',
				text: 'Por favor, revise que su usuario se encuentre correctamente escrito.',
				allowOutsideClick: false,
				stopKeydownPropagation: false,
				showCloseButton: true,
				closeButtonAriaLabel: 'cerrar alerta'
			}); 
		});
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