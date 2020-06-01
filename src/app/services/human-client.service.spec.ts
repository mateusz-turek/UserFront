import { TestBed } from '@angular/core/testing';

import { HumanClientService } from './human-client.service';

describe('HumanClientService', () => {
  let service: HumanClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumanClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
