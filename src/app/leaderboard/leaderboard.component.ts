import { Component, OnInit } from '@angular/core';
import { MockLeaderboardDataService } from '../services/mock-leaderboard-data.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  private leaderboardData: any;
  private selectedGameType: string;
  private selectedGameMode: string;


  constructor(private leaderboard: MockLeaderboardDataService) {
    this.leaderboard = leaderboard;
  }

  ngOnInit() {
    this.selectedGameType = 'empty';
    this.selectedGameMode = 'empty';
    this.leaderboardData = [];

  }

  refreshLeaderboard(): void {
    if(this.selectedGameType == 'empty' || this.selectedGameMode == 'empty') {
      this.leaderboardData = [];
    } else {
      this.leaderboardData = this.leaderboard.getLeaderboardData();
    }
  }

}
