import { Player } from './player';
import { GameMode } from './game-mode.enum';

export class Match {
    id: string;
    //gameType: GameType;
    gameMode: GameMode;
    teamOne: Player[] = Array();
    teamTwo: Player[] = Array();
    winner: Player[] = Array();

}
