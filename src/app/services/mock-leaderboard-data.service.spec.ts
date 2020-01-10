import { TestBed } from '@angular/core/testing';

import { MockLeaderboardDataService } from './mock-leaderboard-data.service';

describe('MockLeaderboardDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockLeaderboardDataService = TestBed.get(MockLeaderboardDataService);
    expect(service).toBeTruthy();
  });
});
