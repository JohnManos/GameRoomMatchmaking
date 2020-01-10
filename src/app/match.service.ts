import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Match } from './match';
import { Player } from './player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  match: Match;
  constructor(private http: HttpClient) { 
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

  getQueueStatus(): Observable<Player[]>{
    return this.http.get<Player[]>('localhost:8000/api');
  }

  getMatch(): Observable<Match> {
    return this.http.get<Match>('localhost:8000/api');
  }

  postMatch() {
    this.http.post<Match>('localhost:8000/api', this.match);
  }
}
