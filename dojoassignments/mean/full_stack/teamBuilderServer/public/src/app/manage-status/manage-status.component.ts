import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-manage-status',
  templateUrl: './manage-status.component.html',
  styleUrls: ['./manage-status.component.css']
})
export class ManageStatusComponent implements OnInit {
  game: number = 1;
  gameNum: String = 'game1';
  players: Array<Player>;

  constructor(private _playerService: PlayerService) {
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

  savePlayer(player) {
    console.log('trying to savePlayer')
    this._playerService.update(player)
    .then(() => {
      console.log('then going thru')
      this.getPlayers()})
    .catch((err) => {console.log(err)});
  }

  changeGame1() {
    this.game = 1
    this.gameNum = 'game1'
  }
  changeGame2() {
    this.game = 2
    this.gameNum = 'game2'
  }
  changeGame3() {
    this.game = 3
    this.gameNum = 'game3'
  }

  playing(player) {
    for (var p of this.players) {
      if (p == player) {
        var key = "game" + this.game.toString();
        p.games[key] = "playing";
        break;
      }
    }
    this.savePlayer(player);
  }

  notPlaying(player) {
    for (let p of this.players) {
      if (p == player) {
        let key = "game" + this.game.toString();
        console.log(key)
        p.games[key] = 'notplaying';
        break;
      }
    }
    this.savePlayer(player);
  }
  undecided(player) {
    for (let p of this.players) {
      if (p == player) {
        let key = "game" + this.game.toString();
        p.games[key] = "undecided";
        break;
      }
    }
    this.savePlayer(player);
  }


}
