import { TestBed, inject } from '@angular/core/testing';

import { ServersServiceService } from './servers-service.service';

describe('ServersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServersServiceService]
    });
  });

  it('should be created', inject([ServersServiceService], (service: ServersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
