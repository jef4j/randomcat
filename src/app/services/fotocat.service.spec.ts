import { TestBed } from '@angular/core/testing';

import { FotocatService } from './fotocat.service';

describe('FotocatService', () => {
  let service: FotocatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotocatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
