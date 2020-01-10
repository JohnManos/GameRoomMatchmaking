import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QueueComponent } from './queue/queue.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { QueueDialogComponent } from './dialogs/queue-dialog/queue-dialog.component';
import { MaterialModule } from './material/material-module';
import { PrivateMatchDialogComponent } from './dialogs/private-match-dialog/private-match-dialog.component';
import { SelectGameModeDialogComponent } from './dialogs/select-game-mode-dialog/select-game-mode-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    QueueComponent,
    HomeComponent,
    QueueDialogComponent,
    PrivateMatchDialogComponent,
    SelectGameModeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [QueueDialogComponent, PrivateMatchDialogComponent, SelectGameModeDialogComponent]
})
export class AppModule { }
