import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  players: Player[] = Array();
  
  constructor(matchservice: MatchService) {
    var index = 0;
    for (let i in matchservice.match.teamOne) {
      this.players[index] = new Player(matchservice.match.teamOne[i].id, matchservice.match.teamOne[i].name);
      index++;
    }
    for (let i in matchservice.match.teamTwo) {
      this.players[index] = new Player(matchservice.match.teamTwo[i].id, matchservice.match.teamTwo[i].name);
      index++;
    }
  }

  ngOnInit() {
  }

}
