import { TestBed } from '@angular/core/testing';

import { Infos1ServiceService } from './infos1-service.service';

describe('Infos1ServiceService', () => {
  let service: Infos1ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Infos1ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
