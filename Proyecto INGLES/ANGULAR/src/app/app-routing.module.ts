import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEngComponent } from './pages/home-eng/home-eng.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginEngComponent } from './pages/login-eng/login-eng.component';
import { RegisterEngComponent } from './pages/register-eng/register-eng.component';
import { SobrenosotrosEngComponent } from './pages/sobrenosotros-eng/sobrenosotros-eng.component';
import { ContactoEngComponent } from './pages/contacto-eng/contacto-eng.component';
import { SectionComercialEngComponent } from './pages/section-comercial-eng/section-comercial-eng.component';

const routes: Routes = [
  { path: '', component: HomeEngComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginEngComponent },
  { path: 'register', component: RegisterEngComponent },
  { path: 'contacto', component: ContactoEngComponent},
  { path: 'sobrenosotros', component: SobrenosotrosEngComponent},
  { path: 'section-comercial', component: SectionComercialEngComponent},
  //dejar siempre al ultimo por que entra a la pagina de error si no esta contemplada
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
