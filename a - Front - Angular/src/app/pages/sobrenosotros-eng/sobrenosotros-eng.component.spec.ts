import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrenosotrosEngComponent } from './sobrenosotros-eng.component';

describe('SobrenosotrosEngComponent', () => {
  let component: SobrenosotrosEngComponent;
  let fixture: ComponentFixture<SobrenosotrosEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobrenosotrosEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrenosotrosEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
