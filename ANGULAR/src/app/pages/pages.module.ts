import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
    HomeComponent,
    LoginComponent
  ]
})
export class PagesModule { }



