import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuphelpComponent } from './signuphelp.component';

describe('SignuphelpComponent', () => {
  let component: SignuphelpComponent;
  let fixture: ComponentFixture<SignuphelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignuphelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuphelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
