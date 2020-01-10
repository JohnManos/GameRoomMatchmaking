import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { LoginComponent } from './login/login.component';
import { EnterIdManuallyDialogComponent } from './dialogs/enter-id-manually-dialog/enter-id-manually-dialog.component';
import { ScanIdDialogComponent } from './dialogs/scan-id-dialog/scan-id-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    QueueComponent,
    HomeComponent,
    QueueDialogComponent,
    PrivateMatchDialogComponent,
    SelectGameModeDialogComponent,
    LoginComponent,
    EnterIdManuallyDialogComponent,
    ScanIdDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    QueueDialogComponent,
    PrivateMatchDialogComponent,
    SelectGameModeDialogComponent,
    EnterIdManuallyDialogComponent,
    ScanIdDialogComponent,
  ]
})
export class AppModule { }
