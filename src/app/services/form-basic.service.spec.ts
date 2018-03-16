import { TestBed, inject } from '@angular/core/testing';

import { FormBasicService } from './form-basic.service';

describe('FormBasicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormBasicService]
    });
  });

  it('should be created', inject([FormBasicService], (service: FormBasicService) => {
    expect(service).toBeTruthy();
  }));
});
