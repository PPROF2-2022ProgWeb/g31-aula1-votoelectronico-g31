import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEngComponent } from './header-eng.component';

describe('HeaderEngComponent', () => {
  let component: HeaderEngComponent;
  let fixture: ComponentFixture<HeaderEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
