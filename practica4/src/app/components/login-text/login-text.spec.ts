import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginText } from './login-text';

describe('LoginText', () => {
  let component: LoginText;
  let fixture: ComponentFixture<LoginText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
