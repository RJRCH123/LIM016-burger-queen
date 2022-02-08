import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos';
import Input from './input';

const AppRegistro = () => {
    // se estan estableciendo los valores iniciales para cada uno de nuestros inputs
    const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
    const [apellido, cambiarApellido] = useState({campo: '', valido: null});
    const [edad, cambiarEdad] = useState({campo: '', valido: null});
	const [contraseña, cambiarContraseña] = useState({campo: '', valido: null});
	const [contraseña2, cambiarContraseña2] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [celular, cambiarCelular] = useState({campo: '', valido: null});
	const [dni, cambiarDni] = useState({campo: '', valido: null});
    const [cargo, cambiarCargo] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

    // se utilizan expresiones regulares para limitar al usuario a ingresar 
    // valores en los input que no correspondan con lo solicitado

    const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		contraseña: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		celular: /^\d{7,9}$/, // 7 a 9 numeros,
        edad: /^\d{1,2}$/, // 2 numeros.
        dni: /^\d{6,8}$/, // 6 a 8 numeros,
        cargo: /^[a-zA-ÿ\s]{1,40}$/, // Letras y espacios.
	}

    //se esta validando que la contraseña se ingreso de manera correcta 

    const validarPassword2 = () => {
		if(contraseña.campo.length > 0){
			if(contraseña.campo !== contraseña2.campo){
				cambiarContraseña2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				cambiarContraseña2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	}

    // se define la estructura del formulario 

    const onSubmit = (e) => {
		e.preventDefault();

		if(
			usuario.valido === 'true' &&
			nombre.valido === 'true' &&
            apellido.valido === 'true' &&
            edad.valido === 'true' &&
			contraseña.valido === 'true' &&
			contraseña2.valido === 'true' &&
			correo.valido === 'true' &&
			celular.valido === 'true' &&
            dni.valido === 'true' &&
            cargo.valido === 'true'
		){
			cambiarFormularioValido(true);
			cambiarUsuario({campo: '', valido: null});
			cambiarNombre({campo: '', valido: null});
            cambiarApellido({campo: '', valido: null});
            cambiarEdad({campo: '', valido: null});
			cambiarContraseña({campo: '', valido: null});
			cambiarContraseña2({campo: '', valido: null});
			cambiarCorreo({campo: '', valido: null});
			cambiarCelular({campo: '', valido: null});
            cambiarDni({campo: '', valido: null});
            cambiarCargo({campo: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

    return (
		<main>
            <h2>FORMULARIO DE REGISTRO</h2>
			<Formulario action="" onSubmit={onSubmit}>
                
				<Input
					estado={usuario}
					cambiarEstado={cambiarUsuario}
					tipo="text"
					label="Usuario"
					placeholder="Usuario"
					name="usuario"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expresiones.usuario}
				/>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre"
					placeholder="Nombre"
					name="nombre"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
                <Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					tipo="text"
					label="Apellido"
					placeholder="Apellido"
					name="apellido"
					leyendaError="El Apellido solo puede contener letras y espacios."
					expresionRegular={expresiones.apellido}
				/>
                <Input
					estado={edad}
					cambiarEstado={cambiarEdad}
					tipo="text"
					label="Edad"
					placeholder="Edad"
					name="edad"
					leyendaError="LaEDAD solo puede contener números"
					expresionRegular={expresiones.edad}
				/>
				<Input
					estado={contraseña}
					cambiarEstado={cambiarContraseña}
					tipo="password"
					label="Contraseña"
                    placeholder="**********"
					name="contraseña1"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.contraseña}
				/>
				<Input
					estado={contraseña2}
					cambiarEstado={cambiarContraseña2}
					tipo="password"
					label="Repetir Contraseña"
                    placeholder="**********"
					name="contraseña2"
					leyendaError="Ambas contraseñas deben ser iguales."
					funcion={validarPassword2}
				/>
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="correo"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={celular}
					cambiarEstado={cambiarCelular}
					tipo="text"
					label="celular"
					placeholder="celular"
					name="celular"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.celular}
				/>
                <Input
					estado={dni}
					cambiarEstado={cambiarDni}
					tipo="text"
					label="DNI"
					placeholder="DNI"
					name="DNI"
					leyendaError="El DNI solo puede contener maximo de 6 a 8 dígitos"
					expresionRegular={expresiones.dni}
				/>
                <Input
					estado={cargo}
					cambiarEstado={cambiarCargo}
					tipo="text"
					label="Cargo"
					placeholder="cargo"
					name="cargo"
					leyendaError="El cargo solo puede contener letras."
					expresionRegular={expresiones.cargo}
				/>


				{formularioValido === false && 
                    <MensajeError>
                        <p>
                            <b>Error:</b> Por favor rellena el formulario correctamente.
			            </p>
				    </MensajeError>
                }

				<ContenedorBotonCentrado>
					<Boton type="submit">Registrar Personal</Boton>
					{formularioValido === true && 
                        <MensajeExito>
                            <p>
                                <b>¡Formulario enviado exitosamente! ✔️</b>
                            </p>
                        </MensajeExito>
                }   
				</ContenedorBotonCentrado>

			</Formulario>
		</main>
	);

}

export default AppRegistro