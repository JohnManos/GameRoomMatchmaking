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

  getFakeHighScores(n: number): number[] {
    const min_score = 2400;
    const max_score = 3000;
    const high_scores = [];

    for(let i = 0; i < n; i++) {
      const score = Math.floor(Math.random() * (max_score - min_score) + min_score);
      high_scores.push(score);
    }

    // sort in descending order
    high_scores.sort((a, b) => b - a);
    return high_scores;
  }

  getLeaderboardData(): any {
    const leaderboardSize = 10;

    const leaderboard = [];
    const names = this.getFakePlayerNames(leaderboardSize);
    const scores = this.getFakeHighScores(leaderboardSize);

    for(let i = 0; i < leaderboardSize; i++) {
      leaderboard.push({
        name: names[i],
        mmr: scores[i]
      })
    }

    return leaderboard;
  }
}
