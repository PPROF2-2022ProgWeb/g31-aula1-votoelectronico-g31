import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterEngComponent } from './footer-eng/footer-eng.component';
import { HeaderEngComponent } from './header-eng/header-eng.component';


@NgModule({
  declarations: [
    FooterEngComponent,
    HeaderEngComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderEngComponent,
    FooterEngComponent
  ]
})
export class LayoutModule { }

