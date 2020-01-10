import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-select-game-mode-dialog',
  templateUrl: './select-game-mode-dialog.component.html',
  styleUrls: ['./select-game-mode-dialog.component.css']
})
export class SelectGameModeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
