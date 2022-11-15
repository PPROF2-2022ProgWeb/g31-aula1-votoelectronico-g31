import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
  LoginRequest,
  Usuario,
  UsuarioService,
} from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  contactForm: FormGroup;
  usuario: LoginRequest = new LoginRequest();
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      mail: ['', [Validators.required, Validators.email]],
    });
    this.contactForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      mail: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  get mail() {
    return this.form.get('mail');
  }

  get pass() {
    return this.form.get('password');
  }

  get passInvalid() {
    return this.pass?.touched && !this.pass.valid;
  }

  get mailNoValido() {
    return this.mail?.touched && !this.mail.valid;
  }

  onEnviar(event: Event, usuario: LoginRequest) {
    event.preventDefault(); //Cancela la funcionalidad por default.
    if (this.form.valid) {
      console.log(this.form.value); //se puede enviar al servidor...
      this.authService.login(this.usuario).subscribe(
        (data) => {
          console.log('DATA' + JSON.stringify(data));
          //localStorage.setItem('auth-token', JSON.stringify(data ));

          this.router.navigate(['sobrenosotros']);
        },
        (error) => {
          this.error = error;
        }
      );
    } else {
      this.form.markAllAsTouched(); //Activa todas las validaciones
    }
  }
}
