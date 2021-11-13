//Hero del contacto

var imgRefreshBtn = document.getElementById("hero__img-refresh");

// Actualice la fuente de la imagen de picsum en btn click
imgRefreshBtn.onclick = function () {
  document.getElementById("hero__image").src =
    "https://picsum.photos/1280/720?rand=" + new Date().getTime();
};


// inicio validacion del formulario

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, 
  apellido: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
  fecha_nacimiento: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/,
  dni: /^.{4,20}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	contrasena: /^\d{7,14}$/,
  telefono: /^\d{7,14}$/,
  pais: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
  provincia: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
  ciudad: /^[a-zA-ZÀ-ÿ\s]{4,40}$/
}

const campos = {
	nombre: false,
  apellido: false,
  fecha_nacimiento: false,
  dni: false,
	email: false,
	contrasena: false,
  telefono: false,
  pais: false,
  provincia: false,
  ciudad: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
    case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
    case "fecha_nacimiento":
			validarCampo(expresiones.fecha_nacimiento, e.target, 'fecha_nacimiento');
		break;
		case "dni":
			validarCampo(expresiones.dni, e.target, 'dni');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
    case "contrasena":
			validarCampo(expresiones.contrasena, e.target, 'contrasena');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
    case "pais":
			validarCampo(expresiones.pais, e.target, 'pais');
		break;
    case "provincia":
			validarCampo(expresiones.provincia, e.target, 'provincia');
		break;
    case "ciudad":
			validarCampo(expresiones.ciudad, e.target, 'ciudad');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

// Final validacion del formulario

//Funciones para fecha:

//Función que obtiene la fecha actual
function fechaActual(){
  var fecha = new Date();
  var dd = fecha.getDate();
  var mm = fecha.getMonth() + 1; //Enero es 0!
  var yyyy = fecha.getFullYear();
  
  if (dd < 10) {
    dd = '0' + dd;
  }
  
  if (mm < 10) {
    mm = '0' + mm;
  }
  
  fecha = mm + '/' + dd + '/' + yyyy;
  return fecha
  }

//Funcion que calcula la edad dada la fecha de nacimiento
function calculaEdad (nacimiento) {
  nacimiento = new Date(nacimiento);
  actualidad = new Date(fechaActual());

  var edad = (actualidad.getFullYear() - nacimiento.getFullYear());

  if (actualidad.getMonth() < nacimiento.getMonth() || actualidad.getMonth() == nacimiento.getMonth() && actualidad.getDate() < nacimiento.getDate()) {
      edad--;
  }

  return edad;
}

//Validar si la fecha introducida es real

function existeFecha(){
  let fecha = document.getElementById('fecha_nacimiento').value;
  nacimiento = new Date(fecha);
  

  if (nacimiento.getMonth() > 12 || nacimiento.getMonth() <= 0 || nacimiento.getDate <= 0 || nacimiento > 31 || nacimiento.getFullYear <= 0) {
      document.getElementById('aviso').innerHTML = 'Fecha invalida';
  }
  return true;
}

