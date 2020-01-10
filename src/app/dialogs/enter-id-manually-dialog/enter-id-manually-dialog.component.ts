import { Component, OnInit } from '@angular/core';
import { MockPlayerService } from 'src/app/services/mock-player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-id-manually-dialog',
  templateUrl: './enter-id-manually-dialog.component.html',
  styleUrls: ['./enter-id-manually-dialog.component.css']
})
export class EnterIdManuallyDialogComponent implements OnInit {

  private idValue: string;

  constructor(private mockPLayerService: MockPlayerService, public router: Router) { }

  ngOnInit() {
  }



  onKey(value: string) {
    this.idValue = value;
  }

  onSubmitButtonPressed() {
    let player = this.mockPLayerService.getPlayerById(this.idValue);
    if (player) {
      this.router.navigate(['/home']);
    }
  }

}
