import { TestBed } from '@angular/core/testing';

import { SumouService } from './sumou.service';

describe('SumouService', () => {
  let service: SumouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
