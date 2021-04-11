import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledesignComponent } from './singledesign.component';

describe('SingledesignComponent', () => {
  let component: SingledesignComponent;
  let fixture: ComponentFixture<SingledesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingledesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingledesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
