import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FooterEngComponent } from './footer-eng/footer-eng.component';
import { HeaderEngComponent } from './header-eng/header-eng.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FooterEngComponent,
    HeaderEngComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }

