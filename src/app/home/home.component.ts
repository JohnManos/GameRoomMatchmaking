import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { QueueDialogComponent } from '../dialogs/queue-dialog/queue-dialog.component';
import { PrivateMatchDialogComponent } from '../dialogs/private-match-dialog/private-match-dialog.component';
import { SelectGameModeDialogComponent } from '../dialogs/select-game-mode-dialog/select-game-mode-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit() {
  }

  handleQueueButtonPressed() {
    // Displays Dialog where to choose game
    let selectGameDialogRef = this.dialog.open(QueueDialogComponent, {
      autoFocus: false,
    });
    
    selectGameDialogRef.afterClosed().subscribe(result => {
      if (result) {
        let selectGameDialogRef = this.dialog.open(SelectGameModeDialogComponent, { 
          data: {gameType: result},
          autoFocus: false,
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
