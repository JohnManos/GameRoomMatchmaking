import { Injectable } from '@angular/core';
import { Player } from '../player';

@Injectable({
  providedIn: 'root'
})
export class MockPlayerService {

  constructor() { }

  private players: Player[] = [
    new Player("907447", "Vanessa Yan"),
    new Player("907429", "Asher Johnson Hogan"),
    new Player("907443", "Reilly Markowitz"),
    new Player("907444", "Ryan Scupp"),
    new Player("907439", "Jose Tapizquent"),
  ];

  getPlayerById(id: string): Player {
    return this.players.filter(player => player.id == id)[0];
  }
}
