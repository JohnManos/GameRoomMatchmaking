import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QueueComponent } from './queue/queue.component';



const routes: Routes = [
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'queue', component: QueueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
