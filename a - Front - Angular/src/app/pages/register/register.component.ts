import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

import { ValidatorFn, AbstractControl } from '@angular/forms';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup;
  usuario: Usuario = new Usuario();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.formulario = this.formBuilder.group({
      nombre: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]{2,254}'),
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]{2,254}'),
      ]),
      identificador: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      contrasena2: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^([0-9])*$/),
      ]),
    });
  }

  ngOnInit(): void {}

  onEnviar(event: Event, usuario: Usuario): void {
    event.preventDefault;

    if (this.formulario.valid) {
      console.log(usuario);
      this.usuarioService.onCrearRegistro(usuario).subscribe((data) => {
        console.log(data);
        //if (data['id_usuario']>0)
        //{
        //alert("El registro ha sido creado satisfactoriamente. A continuación, por favor Inicie Sesión.");
        //this.router.navigate(['/login'])
        //}
      });
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  get Contrasena() {
    return this.formulario.get('contrasena');
  }

  get Contrasena2() {
    return this.formulario.get('contrasena2');
  }
  /*get pass()
{
  return this.form.get("password2");
}*/

  get Identificador() {
    return this.formulario.get('identificador');
  }

  get Username() {
    return this.formulario.get('username');
  }

  get Telefono() {
    return this.formulario.get('telefono');
  }

  get Pais() {
    return this.formulario.get('pais');
  }

  get Mail() {
    return this.formulario.get('email');
  }

  get Nombre() {
    return this.formulario.get('nombre');
  }

  get Apellido() {
    return this.formulario.get('apellido');
  }

  get FechaNacimiento() {
    return this.formulario.get('fecha_nacimiento');
  }

  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  get NombreValid() {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get ApellidoValid() {
    return this.Apellido?.touched && !this.Apellido?.valid;
  }

  get TelefonoValid() {
    return this.Telefono?.touched && !this.Telefono?.valid;
  }

  get UsernameValid() {
    return this.Username?.touched && !this.Username?.valid;
  }

  get ContrasenaValid() {
    return this.Contrasena?.touched && !this.Contrasena?.valid;
  }

  get Contrasena2Invalid() {
    return (
      this.Contrasena?.value != this.Contrasena2?.value &&
      this.Contrasena2?.touched
    );
  }

  get FechaNacimientoValid() {
    return this.FechaNacimiento?.touched && !this.FechaNacimiento?.valid;
  }

  get IdentificadorValid() {
    return this.Identificador?.touched && !this.Identificador?.valid;
  }

  get PaisValid() {
    return this.Pais?.touched && !this.Pais?.valid;
  }
}
