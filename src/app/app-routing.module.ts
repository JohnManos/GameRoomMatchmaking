import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QueueComponent } from './queue/queue.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'queue', component: QueueComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
