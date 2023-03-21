import { TestBed } from '@angular/core/testing';

import { SortbyService } from './sortby.service';

describe('SortbyService', () => {
  let service: SortbyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortbyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
