import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
}
