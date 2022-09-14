import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEngComponent } from './register-eng.component';

describe('RegisterEngComponent', () => {
  let component: RegisterEngComponent;
  let fixture: ComponentFixture<RegisterEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
