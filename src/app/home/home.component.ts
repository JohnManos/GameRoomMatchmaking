import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { QueueDialogComponent } from '../dialogs/queue-dialog/queue-dialog.component';
import { PrivateMatchDialogComponent } from '../dialogs/private-match-dialog/private-match-dialog.component';
import { SelectGameModeDialogComponent } from '../dialogs/select-game-mode-dialog/select-game-mode-dialog.component';
import { Player } from '../player';
import { MockPlayerService } from '../services/mock-player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private currentPlayer: Player;

  constructor(private mockPlayerService: MockPlayerService, public dialog: MatDialog) {
    this.currentPlayer = mockPlayerService.getPlayerById("20895");
  }

  ngOnInit() {
  }

  handleQueueButtonPressed() {
    // Displays Dialog where to choose game
    let selectGameDialogRef = this.dialog.open(QueueDialogComponent, {
      autoFocus: false,
    });
    
    selectGameDialogRef.afterClosed().subscribe(gameType => {
      if (gameType) {
        let selectGameModeDialogRef = this.dialog.open(SelectGameModeDialogComponent, { 
          data: {gameType: gameType},
          autoFocus: false,
        });

        selectGameModeDialogRef.afterClosed().subscribe(gameMode => {
          
        });
      }
    });
  }

  handlePrivateMatchButtonPressed() {
    let selectGameDialogRef = this.dialog.open(PrivateMatchDialogComponent, {
      autoFocus: false,
    });

    selectGameDialogRef.afterClosed().subscribe(result => {
      console.log("Closed private match dialog");
    });
  }

}
