import { Component, OnInit } from '@angular/core';

import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthService } from 'src/app/services/auth/auth.service';
//import { LoginRequest, Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { NgxRolesService } from 'ngx-permissions';
import { Token } from 'src/app/models/Token';
import { User } from 'src/app/models/User';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  error: string = '';
  usuario: User = new User();

  constructor(
    private usersService: UsuarioService,
    private router: Router,
    private rolesService: NgxRolesService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/login');
    }
  }

  logIn() {
    this.error = '';
    this.usuario.username = this.username;
    this.usuario.password = this.password;

    this.usersService.login(this.username, this.password).subscribe(
      (token: Token) => {
        localStorage.setItem('token', token.token);
        //this.rolesService.addRole(this.usuario.rol, []);
        this.router
          .navigateByUrl('/contacto')
          .then(() => window.location.reload());
      },
      (error: ErrorEvent) => {
        console.log(error);
        this.error = 'Credenciales no válidas';
      }
    );
  }

  /*form: FormGroup;
  contactForm: FormGroup;
  usuario: LoginRequest = new LoginRequest();
  error: string="";

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private rolesService: NgxRolesService) {
    this.form= this.formBuilder.group(
      {
        password:['',[Validators.required, Validators.minLength(8)]],
        mail:['', [Validators.required, Validators.email]]
      }
    )
    this.contactForm = this.createFormGroup();

  }

  createFormGroup(){
    return new FormGroup({
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
        mail: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  
  get mail()
  {
    return this.form.get("mail");
  }

  get pass()
  {
    return this.form.get("password");
  }

  get passInvalid()
  {
    return this.pass?.touched && !this.pass.valid;
  }


  get mailNoValido()
  {
    return this.mail?.invalid;
  }


  onEnviar(event: Event, usuario: LoginRequest)
  {
    event.preventDefault(); //Cancela la funcionalidad por default.
    if (this.form.valid)
    {
      console.log(this.form.value); //se puede enviar al servidor...
      this.authService.login(this.usuario)
      .subscribe(
        data => {
        console.log("DATA"+ JSON.stringify( data));
        localStorage.setItem('auth-token', JSON.stringify(data ));
        this.rolesService.addRole(data.rol, []);

        this.router.navigate(['sobrenosotros']);

        },
        error => {
         this.error = error;
        }
      );
    }
    else
    {
      this.form.markAllAsTouched(); //Activa todas las validaciones
    }
  }*/
}
