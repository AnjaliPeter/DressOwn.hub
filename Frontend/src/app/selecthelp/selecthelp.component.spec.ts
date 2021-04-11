import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecthelpComponent } from './selecthelp.component';

describe('SelecthelpComponent', () => {
  let component: SelecthelpComponent;
  let fixture: ComponentFixture<SelecthelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecthelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
