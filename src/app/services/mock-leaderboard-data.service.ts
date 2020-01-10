import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockLeaderboardDataService {

  constructor() { }

  getFakePlayerNames(n: number): string[] {
    const players = ['Reilly M', 'John M', 'Jose T', 'Asher H', 'Vanessa Y', 'Bryan O', 'Sam T', 'Adis G', 'Adrian S', 'Adriana L', 'Adriano V', 'Daniela F', 'David C', 'Dwayne T', 'Gerald T', 'Hannah K', 'Jessie C', 'Kareem H', 'Lauren C', 'Molly B'];
    const shuffled = players.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

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
