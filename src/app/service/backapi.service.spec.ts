import { TestBed } from '@angular/core/testing';

import { BackApiService } from './back-api.service';

describe('BackapiService', () => {
  let service: BackApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
