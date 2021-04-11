import { TestBed } from '@angular/core/testing';

import { PrototypeService } from './prototype.service';

describe('PrototypeService', () => {
  let service: PrototypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrototypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
