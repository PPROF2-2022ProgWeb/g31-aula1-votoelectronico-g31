import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComercialEngComponent } from './section-comercial-eng.component';

describe('SectionComercialEngComponent', () => {
  let component: SectionComercialEngComponent;
  let fixture: ComponentFixture<SectionComercialEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionComercialEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComercialEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
