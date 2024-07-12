import { TestBed } from '@angular/core/testing';

import { NikeService } from './nike.service';

describe('NikeService', () => {
  let service: NikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
