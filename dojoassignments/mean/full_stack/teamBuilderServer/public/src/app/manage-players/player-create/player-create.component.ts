import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';
import { PlayerService } from '../../player.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  player = new Player();

  constructor(
    private _playerService: PlayerService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addPlayer() {
    this._playerService.create(this.player)
    .then(() => {this._router.navigate(['/manage_players/player/list'])})
    .catch((err) => {console.log(err)})
  }

}
