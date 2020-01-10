import { Player } from './player';
import { GameMode } from './game-mode.enum';

export class Match {
    matchId: string;
    gameType: string;
    gameMode: GameMode;
    teamOne: Player[] = Array();
    teamTwo: Player[] = Array();
    winner: Player[] = Array();

}
