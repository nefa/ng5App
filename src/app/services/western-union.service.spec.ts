import { TestBed, inject } from '@angular/core/testing';

import { WesternUnionService } from './western-union.service';

describe('WesternUnionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WesternUnionService]
    });
  });

  it('should be created', inject([WesternUnionService], (service: WesternUnionService) => {
    expect(service).toBeTruthy();
  }));
});
