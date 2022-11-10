import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../gestion-prod-adm/gestion-prod-adm.component';

interface categoria {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crear-prod-adm',
  templateUrl: './crear-prod-adm.component.html',
  styleUrls: ['./crear-prod-adm.component.css']
})
export class CrearProdAdmComponent implements OnInit {
  contactForm: FormGroup;

  /*producto: Producto = new Producto();*/

  idProducto?: any;
  
  constructor(
    private fb: FormBuilder,
    /*private productoService: ProductoService,*/
    private route: ActivatedRoute
  ) { 
    this.contactForm = this.fb.group({
      imagen: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      precio: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.idProducto = this.route.snapshot.paramMap.get('id');
    if (this.idProducto) {
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
  }

  /*onEnviar(event: Event, producto: Producto): void {
    event.preventDefault;

    if (this.idProducto) {
      this.productoService.EditarLibro(producto.subscribe((data) => {
        alert('El libro ha sido editado satisfactoriamente.');
      });
    } else {
      if (this.contactForm.valid) {
        console.log(producto);
        this.libroService.onCrearRegistro(producto).subscribe((data) => {
          alert('El producto ha sido agregado satisfactoriamente.');
        });
      } else {
        this.contactForm.markAllAsTouched();
      }
    }
  }*/
 
	url: any; 
	msg = "";
	
	selectFile(event: any) { 
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
	}

  selectedValue: string | undefined;

  categorias: categoria[] = [
    {value: 'gratuito-0', viewValue: 'Gratuita'},
    {value: 'pago-1', viewValue: 'Pago'},
  ];
}
