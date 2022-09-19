import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarNavComponent } from './toolbar-nav.component';

describe('ToolbarNavComponent', () => {
  let component: ToolbarNavComponent;
  let fixture: ComponentFixture<ToolbarNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarNavComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
