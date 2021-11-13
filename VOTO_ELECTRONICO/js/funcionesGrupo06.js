//Hero del contacto

var imgRefreshBtn = document.getElementById("hero__img-refresh");

// Actualice la fuente de la imagen de picsum en btn click
imgRefreshBtn.onclick = function () {
  document.getElementById("hero__image").src =
    "https://picsum.photos/1280/720?rand=" + new Date().getTime();
};



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

function existeFecha2 () {
    var fechaf = fecha.split("/");
    var d = fechaf[0];
    var m = fechaf[1];
    var y = fechaf[2];
    return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
}
