import { TestBed } from '@angular/core/testing';

import { DeclarativeService } from './declarative.service';

describe('DeclarativeService', () => {
  let service: DeclarativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclarativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
