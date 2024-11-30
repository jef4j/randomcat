import { TestBed } from '@angular/core/testing';

import { CatFactService } from './cat-fact-service.service';

describe('CatFactServiceService', () => {
  let service: CatFactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatFactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
