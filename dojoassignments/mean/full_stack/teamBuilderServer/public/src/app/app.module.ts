import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PlayerService } from './player.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';

import { PlayerListComponent } from './manage-players/player-list/player-list.component';
import { PlayerCreateComponent } from './manage-players/player-create/player-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagePlayersComponent,
    ManageStatusComponent,
    PlayerListComponent,
    PlayerCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
