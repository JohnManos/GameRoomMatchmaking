import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EnterIdManuallyDialogComponent } from '../dialogs/enter-id-manually-dialog/enter-id-manually-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  handleEnterIdManuallyButtonPressed() {
    let selectGameDialogRef = this.dialog.open(EnterIdManuallyDialogComponent, {
      autoFocus: false,
    });
  }

}
