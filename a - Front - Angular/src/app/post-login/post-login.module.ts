import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarNavComponent } from './toolbar-nav/toolbar-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { BarComponent } from './dashboard/components/bar/bar.component';
import { LineaComponent } from './dashboard/components/linea/linea.component';




@NgModule({
  declarations: [
    ToolbarNavComponent,
    DashboardComponent,
    BarComponent,
    LineaComponent

  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgChartsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,

  ],
})
export class PostLoginModule { }
