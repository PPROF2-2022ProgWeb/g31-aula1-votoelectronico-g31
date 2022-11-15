import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-usr-adm',
  templateUrl: './crear-usr-adm.component.html',
  styleUrls: ['./crear-usr-adm.component.css']
})
export class CrearUsrAdmComponent implements OnInit {
  userForm: FormGroup;

  /*usuario: Usuario = new Usuario();*/

  idUsuario?: any;

  constructor(private fb: FormBuilder,
    /*private productoService: ProductoService,*/
    private route: ActivatedRoute) { 
      this.userForm = this.fb.group({
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        dni: ['', [Validators.required]],
        telefono: ['', [Validators.required]],
        mail: ['', [Validators.required]],
        rol: ['', [Validators.required]],
        nombreUsuario: ['', [Validators.required]],
        contraseña: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {
    this.idUsuario = this.route.snapshot.paramMap.get('id');
    if (this.idUsuario) { 
      /*this.productoService
        .ObtenerLibroId(parseInt(this.idProducto))
        .subscribe((data) => {
          this.producto = data;
          const contenedor: HTMLElement = document.getElementById(
            'tituloLibro'
          ) as HTMLElement;
          contenedor.innerHTML = 'Editar Producto';
        });*/
  }
   /*onEnviar(event: Event, usuario: Usuario): void {
    event.preventDefault;

    if (this.idUsuario) {
      this.usuarioService.EditarUsuario(producto.subscribe((data) => {
        alert('El usuario ha sido editado satisfactoriamente.');
      });
    } else {
      if (this.contactForm.valid) {
        console.log(usuario);
        this.usuarioService.onCrearRegistro(usuario).subscribe((data) => {
          alert('El usuario ha sido agregado satisfactoriamente.');
        });
      } else {
        this.userForm.markAllAsTouched();
      }
    }
  }*/
  }
}
