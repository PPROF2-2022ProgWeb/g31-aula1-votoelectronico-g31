import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SectionComercialComponent } from './pages/section-comercial/section-comercial.component';
import { ToolbarNavComponent } from './post-login/toolbar-nav/toolbar-nav.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contacto', component: ContactoComponent},
  { path: 'sobrenosotros', component: SobrenosotrosComponent},
  { path: 'section-comercial', component: SectionComercialComponent},
  { path: 'toolbar', component : ToolbarNavComponent},
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
