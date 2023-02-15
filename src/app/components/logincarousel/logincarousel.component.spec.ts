import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincarouselComponent } from './logincarousel.component';

describe('LogincarouselComponent', () => {
  let component: LogincarouselComponent;
  let fixture: ComponentFixture<LogincarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogincarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
