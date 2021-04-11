import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccepthelpComponent } from './accepthelp.component';

describe('AccepthelpComponent', () => {
  let component: AccepthelpComponent;
  let fixture: ComponentFixture<AccepthelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccepthelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccepthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
