import { Injectable } from '@angular/core';
import { Match } from './match';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  match: Match;
  constructor() { 
    //---dummy code----
    this.match = new Match();
    this.match.teamOne.push(new Player('1','testPlayer1'));
    this.match.teamTwo.push(new Player('2','testPlayer2'));
    //--------------------
  }
  addPlayer(player: Player) {
    if (this.match.gameMode == 1 && this.match.teamOne.length < 1) {
      this.match.teamOne.push(player);
    }
    else if (this.match.gameMode == 1 && this.match.teamOne.length == 1) {
      this.match.teamTwo.push(player);
    }
    else if (this.match.gameMode == 2 && this.match.teamOne.length < 2) {
      this.match.teamOne.push(player);
    }
    else if (this.match.gameMode == 2 && this.match.teamOne.length == 2) {
      this.match.teamTwo.push(player);
    }
  }
}
