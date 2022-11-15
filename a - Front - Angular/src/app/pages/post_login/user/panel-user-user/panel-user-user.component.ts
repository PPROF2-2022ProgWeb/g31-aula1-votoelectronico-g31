import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-panel-user-user',
  templateUrl: './panel-user-user.component.html',
  styleUrls: ['./panel-user-user.component.css']
})
export class PanelUserUserComponent implements OnInit {
  panelForm: FormGroup;

  idPanel?: any;

  constructor(private fb: FormBuilder,) { 
    this.panelForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      correo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

}
