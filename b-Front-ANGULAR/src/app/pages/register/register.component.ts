import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ValidatorFn, AbstractControl} from '@angular/forms';


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
        nombre : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]),
        apellido : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]),
        fecha_nacimiento : new FormControl('', [Validators.required]),
        identificador : new FormControl('', [Validators.required, Validators.minLength(2)]),
        email : new FormControl('', [Validators.required, Validators.email]),
        contrasena : new FormControl('', [Validators.required, Validators.minLength(8)]),
        contrasena2 : new FormControl('', [Validators.required, Validators.minLength(8)]),
        telefono : new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^([0-9])*$/)]),
        pais : new FormControl('', [Validators.required])
      }
    )
  }

  ngOnInit(): void {
  }

  get Contrasena()
{
  return this.formulario.get("contrasena");
}

get Contrasena2()
{
  return this.formulario.get("contrasena2");
}
/*get pass()
{
  return this.form.get("password2");
}*/

get Identificador()
{
  return this.formulario.get("identificador");
}

get Telefono()
{
  return this.formulario.get("telefono");
}

get Pais()
{
  return this.formulario.get("pais");
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

get Contrasena2Invalid()
{
  return (this.Contrasena?.value != this.Contrasena2?.value) && this.Contrasena2?.touched;
}


get FechaNacimientoValid()
{
  return this.FechaNacimiento?.touched && !this.FechaNacimiento?.valid;
}

get IdentificadorValid(){
  return this.Identificador?.touched && !this.Identificador?.valid;
}

get PaisValid(){
  return this.Pais?.touched && !this.Pais?.valid;
}

}
