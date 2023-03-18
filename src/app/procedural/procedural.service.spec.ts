import { TestBed } from '@angular/core/testing';

import { ProceduralService } from './procedural.service';

describe('ProceduralService', () => {
  let service: ProceduralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProceduralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
