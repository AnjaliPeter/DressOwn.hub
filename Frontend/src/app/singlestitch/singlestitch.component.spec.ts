import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglestitchComponent } from './singlestitch.component';

describe('SinglestitchComponent', () => {
  let component: SinglestitchComponent;
  let fixture: ComponentFixture<SinglestitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglestitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglestitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
