import { TestBed } from '@angular/core/testing';

import { JettloService } from './jettlo.service';

describe('JettloService', () => {
  let service: JettloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JettloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
