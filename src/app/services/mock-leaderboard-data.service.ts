import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockLeaderboardDataService {

  constructor() { }

  getLeaderboardData(gameType, gameMode): any {
    const firstPlace = {
      name: "Reilly M",
      mmr: 9001
    }

    const secondPlace = {
      name: "John M",
      mmr: 8642
    }

    const thirdPlace = {
      name: "Jose T",
      mmr: 6323
    }

    return [ firstPlace, secondPlace, thirdPlace ];
  }
}
