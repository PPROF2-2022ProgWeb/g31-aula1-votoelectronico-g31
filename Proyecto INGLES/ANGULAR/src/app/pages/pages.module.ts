import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { LayoutModule } from '../layout/layout.module';
import { HomeEngComponent } from './home-eng/home-eng.component';
import { SobrenosotrosEngComponent } from './sobrenosotros-eng/sobrenosotros-eng.component';
import { RegisterEngComponent } from './register-eng/register-eng.component';
import { LoginEngComponent } from './login-eng/login-eng.component';
import { SectionComercialEngComponent } from './section-comercial-eng/section-comercial-eng.component';
import { ContactoEngComponent } from './contacto-eng/contacto-eng.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    HomeEngComponent,
    SobrenosotrosEngComponent,
    RegisterEngComponent,
    LoginEngComponent,
    SectionComercialEngComponent,
    ContactoEngComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
    HomeEngComponent,
    LoginEngComponent,
    SobrenosotrosEngComponent,
    ContactoEngComponent,
    SectionComercialEngComponent
  ]
})
export class PagesModule { }



