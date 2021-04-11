import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebarComponent } from './createbar.component';

describe('CreatebarComponent', () => {
  let component: CreatebarComponent;
  let fixture: ComponentFixture<CreatebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
