import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehelpComponent } from './createhelp.component';

describe('CreatehelpComponent', () => {
  let component: CreatehelpComponent;
  let fixture: ComponentFixture<CreatehelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatehelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
