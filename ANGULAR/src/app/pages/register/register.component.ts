import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  formulario:FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.formulario= this.formBuilder.group(
      {
        nombre : new FormControl('', [Validators.required]),
        apellido : new FormControl('', [Validators.required]),
        fecha_nacimiento : new FormControl('', [Validators.required]),
        username : new FormControl('', [Validators.required]),
        email : new FormControl('', [Validators.required, Validators.email]),
        contrasena : new FormControl('', [Validators.required, Validators.minLength(8)]),
        telefono : new FormControl('', [Validators.required]),
        pais : new FormControl('', [Validators.required]),
        provincia : new FormControl('', [Validators.required]),
        ciudad : new FormControl('', [Validators.required])
      }
    )
  }

  ngOnInit(): void {
  }

  get Contrasena()
{
  return this.formulario.get("contrasena");
}
/*get pass()
{
  return this.form.get("password2");
}*/

get Username()
{
  return this.formulario.get("username");
}

get Telefono()
{
  return this.formulario.get("telefono");
}

get Pais()
{
  return this.formulario.get("pais");
}

get Ciudad()
{
  return this.formulario.get("ciudad");
}
get Provincia()
{
  return this.formulario.get("provincia");
}

get Mail()
{
 return this.formulario.get("email");
}

get Nombre()
{
  return this.formulario.get("nombre");
}

get Apellido()
{
 return this.formulario.get("apellido");
}

get FechaNacimiento()
{
 return this.formulario.get("fecha_nacimiento");
}

/*get Dni()
{
 return this.form.get("dni");
}*/

get MailValid()
{
  return this.Mail?.touched && !this.Mail?.valid;
}

get NombreValid()
{
  return this.Nombre?.touched && !this.Nombre?.valid;
}

get ApellidoValid()
{
  return this.Apellido?.touched && !this.Apellido?.valid;
}

get TelefonoValid()
{
  return this.Telefono?.touched && !this.Telefono?.valid;
}

get ContrasenaValid()
{
  return this.Contrasena?.touched && !this.Contrasena?.valid;
}

/*get Password2Valid()
{
  return this.Password2?.touched && !this.Password2?.valid;
}*/

get FechaNacimientoValid()
{
  return this.FechaNacimiento?.touched && !this.FechaNacimiento?.valid;
}

get UsernameValid(){
  return this.Username?.touched && !this.Username?.valid;
}

get PaisValid(){
  return this.Pais?.touched && !this.Pais?.valid;
}
get CiudadValid(){
  return this.Ciudad?.touched && !this.Ciudad?.valid;
}
get ProvinciaValid(){
  return this.Provincia?.touched && !this.Provincia?.valid;
}

/*get DniValid()
{
  return this.Dni?.touched && !this.Dni?.valid;
}
*/
}
