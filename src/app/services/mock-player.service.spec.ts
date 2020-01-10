import { TestBed } from '@angular/core/testing';

import { MockPlayerService } from './mock-player.service';

describe('MockPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockPlayerService = TestBed.get(MockPlayerService);
    expect(service).toBeTruthy();
  });
});
