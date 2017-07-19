import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';
import { PlayerService } from '../../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Array<Player>;

  constructor(
    private _playerService: PlayerService, 
    private _router: Router
  ) {
    this.getPlayers();
   }

  ngOnInit() {
  }

  getPlayers() {
    this._playerService.retrieveAll()
    .then((players) => {
      this.players = players;
    })
    .catch((err) => {console.log(err)})
  }

  deletePlayer(player) {
    this._playerService.destroy(player)
    .then(() => {this.getPlayers();})
    .catch((err) => {console.log("the error is: ", err)})


  }

}

