import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';

import { PlayerCreateComponent } from './manage-players/player-create/player-create.component';
import { PlayerListComponent } from './manage-players/player-list/player-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/manage/player/list', pathMatch: 'full'},
  { path: 'manage_players', component: ManagePlayersComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'player/list'},
      { path: 'player/list', component: PlayerListComponent },
      { path: 'player/new', component: PlayerCreateComponent }
    ]
  },
  { path: 'manage_status', component: ManageStatusComponent },
  { path: 'updated', redirectTo: '/manage/player/list'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }