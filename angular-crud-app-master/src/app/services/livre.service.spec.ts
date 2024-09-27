import { TestBed } from '@angular/core/testing';

import { livreService } from './livre.service';

describe('EmployeeService', () => {
  let service: livreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(livreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
