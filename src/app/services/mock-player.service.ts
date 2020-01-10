import { Injectable } from '@angular/core';
import { Player } from '../player';

@Injectable({
  providedIn: 'root'
})
export class MockPlayerService {

  constructor() { }

  getPlayerById(id: string): Player {
    return new Player(id, "Jose T");
  }
}
