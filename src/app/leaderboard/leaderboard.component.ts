import { Component, OnInit } from '@angular/core';
import { MockLeaderboardDataService } from '../services/mock-leaderboard-data.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  private leaderboardData: any;

  constructor(private leaderboard: MockLeaderboardDataService) {
    this.leaderboard = leaderboard;
  }

  ngOnInit() {
    this.leaderboardData = this.leaderboard.getLeaderboardData(0, 0);
  }

}
