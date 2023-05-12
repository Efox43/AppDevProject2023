import { TestBed } from '@angular/core/testing';

import { EplService } from './epl.service';

describe('EplService', () => {
  let service: EplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
