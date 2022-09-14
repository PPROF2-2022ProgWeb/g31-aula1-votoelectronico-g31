import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { LayoutModule } from '../layout/layout.module';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SectionComercialComponent } from './section-comercial/section-comercial.component';
import { HomeEngComponent } from './home-eng/home-eng.component';
import { SobrenosotrosEngComponent } from './sobrenosotros-eng/sobrenosotros-eng.component';
import { RegisterEngComponent } from './register-eng/register-eng.component';

import { SectionComercialEngComponent } from './section-comercial-eng/section-comercial-eng.component';
import { ContactoEngComponent } from './contacto-eng/contacto-eng.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    SobrenosotrosComponent,
    ContactoComponent,
    SectionComercialComponent,
    HomeEngComponent,
    SobrenosotrosEngComponent,
    RegisterEngComponent,
    SectionComercialEngComponent,
    ContactoEngComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    SobrenosotrosComponent,
    ContactoComponent,
    SectionComercialComponent
  ]
})
export class PagesModule { }



