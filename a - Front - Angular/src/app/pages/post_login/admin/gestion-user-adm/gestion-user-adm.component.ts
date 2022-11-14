import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-gestion-user-adm',
  templateUrl: './gestion-user-adm.component.html',
  styleUrls: ['./gestion-user-adm.component.css']
})

export class GestionUserAdmComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //funcion para cargar los datos de la variable datos en la tabla
      this.dataSource = new MatTableDataSource<Usuario1>(this.datos);
      this.dataSource.paginator = this.paginator;
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }


  //funcion borrar

  borrarFila(cod: number) {
    if (confirm("¿Realmente quiere borrar los datos?")) {
      this.datos.splice(cod, 1);
      this.tabla3.renderRows();
    }
  }



    //nombrar columnas
    columnas: string[] = ['usuarioid','nombre','apellido','telefono','mail','rol','borrar','editar'];

    //datos que se visualizaran
    datos: Usuario1[] =
      [new Usuario1(1,'Lucas','Bartolone',4783741,'lb@gmail.com','Usuario','',''),
      new Usuario1(2,'a','b',123,'c','d','',''),
      new Usuario1(3,'a','b',123,'c','d','',''),
      new Usuario1(4,'a','b',123,'c','d','',''),
      new Usuario1(5,'a','b',123,'c','d','',''),
      new Usuario1(6,'a','b',123,'c','d','',''),]
    dataSource: any;
  
    Usuarioselect: Usuario1 = new Usuario1(1,'a','b',123,'c','d','','');
  
    @ViewChild(MatTable) tabla3!: MatTable<Usuario1>;
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

}


//constructor de Libros
export class Usuario1 {
  constructor(
    public usuarioid: number,
    public nombre: string,
    public apellido: string,
    public telefono: number,
    public mail:string,
    public rol:string,
    public borrar: any,
    public editar: any,
    ) {
  }
}
  
  
