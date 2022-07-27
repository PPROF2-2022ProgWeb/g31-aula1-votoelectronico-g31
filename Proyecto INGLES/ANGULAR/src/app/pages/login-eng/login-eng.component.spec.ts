import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEngComponent } from './login-eng.component';

describe('LoginEngComponent', () => {
  let component: LoginEngComponent;
  let fixture: ComponentFixture<LoginEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
