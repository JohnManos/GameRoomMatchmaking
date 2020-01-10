import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-queue-dialog',
  templateUrl: './queue-dialog.component.html',
  styleUrls: ['./queue-dialog.component.css']
})
export class QueueDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<QueueDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
