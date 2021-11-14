//Hero del contacto

var imgRefreshBtn = document.getElementById("hero__img-refresh");

// Actualice la fuente de la imagen de picsum en btn click
imgRefreshBtn.onclick = function () {
  document.getElementById("hero__image").src =
    "https://picsum.photos/1280/720?rand=" + new Date().getTime();
};


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
function calculaEdad () {
  var nacimiento= document.getElementById("fechanacimiento");
  
  nacimiento = new Date(nacimiento.value);
  actualidad = new Date(fechaActual());

  var edad = (actualidad.getFullYear() - nacimiento.getFullYear());
  
  if (actualidad.getMonth() < nacimiento.getMonth() || actualidad.getMonth() == nacimiento.getMonth() && actualidad.getDate() < nacimiento.getDate()) {
      edad--;
  }
  localStorage.setItem("edad", edad);
  if (edad>=16){
    document.getElementById("aviso1").innerHTML = "Genial, tienes "+edad+ " años, puedes participar en votaciones!"
    document.getElementById("aviso1").style.backgroundColor = "Green"
  }
  else{
    document.getElementById("aviso1").innerHTML = "Lo sentimos, debes ser mayor";
    document.getElementById("aviso1").style.backgroundColor = "Yellow"
  }


  return edad;
}

//Validar si la fecha introducida es real

function existeFecha(){
  let fecha = document.getElementById('fechanacimiento').value;
  nacimiento = new Date(fecha);
  

  if (nacimiento.getMonth() > 12 || nacimiento.getMonth() <= 0 || nacimiento.getDate <= 0 || nacimiento > 31 || nacimiento.getFullYear <= 0) {
      return false
  }
  return true;
}

function habilita(){
  document.getElementById("botonC").disabled=false;
}

let nombreContacto,apellidoContacto,emailContacto,descripcionContacto;


/* tomar datos del form registro */

function tomarDatos(){

  nombreContacto = document.getElementById ('nombreContacto').value;
  apellidoContacto = document.getElementById ('apellidoContacto').value;
  emailContacto = document.getElementById ('emailContacto').value;
  descripcionContacto = document.getElementById ('descripcion-contacto').value;

  //filtros
  
  let filtroNombreyApellido= /\d/;
  if(filtroNombreyApellido.test(nombreContacto) ===true){
    alert("ERROR , corrija el nombre")
    return false
  }

  if(filtroNombreyApellido.test(apellidoContacto) ===true){
    alert("ERROR , corrija el apellido")
    return false
  }

  let filtroMail=/[\w]+@{1}[\w]+\.[a-z]{2,3}/;

  if(filtroMail.test(emailContacto) === false){
    alert("Mail incorrecto")
    return false
  }
  
  //array


  var datosForm = new Array(nombreContacto,apellidoContacto,emailContacto,descripcionContacto);

  //filtroLongitud

for (f=0;datosForm.length>f;f++){
  console.log("Entro al for " + datosForm[f])
    
  if(datosForm[f].length>2 && datosForm[f].length<100){
    console.log( " el dato ingresado " + datosForm[f] + " es correcto")
    let c = 0;
    c++;}
  



    else { alert (" el dato ingresado " + datosForm[f] + " debe tener entre 2 y 100 caracteres" )
      console.log(" el dato ingresado " + datosForm[f] + "debe tener entre 2 y 100 caracteres" )
        return false;
        }              
      }

      


//punto 3 IEV : 3.Uno de los formularios debe tener funcionalidad en el botón Enviar, mostrando un Alert de operación exitosa.

if (c=4){
  alert(" Su consulta a sido enviada, responderemos a la brevedad ")

}}


