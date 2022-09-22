import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEngComponent } from './footer-eng.component';

describe('FooterEngComponent', () => {
  let component: FooterEngComponent;
  let fixture: ComponentFixture<FooterEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
