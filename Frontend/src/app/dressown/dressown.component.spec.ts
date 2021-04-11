import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressownComponent } from './dressown.component';

describe('DressownComponent', () => {
  let component: DressownComponent;
  let fixture: ComponentFixture<DressownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DressownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
