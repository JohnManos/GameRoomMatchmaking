import { Component, OnInit, DoCheck, ChangeDetectorRef } from '@angular/core';
import { Player } from '../player';
import { MatchService } from '../match.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit, DoCheck {
  players: Player[] = Array();  
  subscription: Subscription;

  constructor(private matchservice: MatchService, private ref: ChangeDetectorRef) {
    this.matchservice = matchservice;
    var index = 0;
    for (let i in matchservice.match.teamOne) {
      this.players[index] = new Player(matchservice.match.teamOne[i].id, matchservice.match.teamOne[i].name);
      index++;
    }
    for (let i in matchservice.match.teamTwo) {
      this.players[index] = new Player(matchservice.match.teamTwo[i].id, matchservice.match.teamTwo[i].name);
      index++;
    }
    // This is one possible way I could periodically check the backend for queue changes
    const checkInterval = interval(1000);
    this.subscription = checkInterval.subscribe(res => console.log('hi'));
  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('hi');
    // This is another possible way I could periodically check the backend for queue changes
    /*if (this.matchservice.getQueueStatus()) {
      this.matchservice.getQueueStatus()
        .subscribe(players => {this.players = players},
          error => console.log('Failed to retrieve players from backend.' + error));
    }*/
    for (var p in this.players) {
        this.players[p].name = Math.random() + '';
    }
    //this.ref.detectChanges();
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
