import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoEngComponent } from './contacto-eng.component';

describe('ContactoEngComponent', () => {
  let component: ContactoEngComponent;
  let fixture: ComponentFixture<ContactoEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
