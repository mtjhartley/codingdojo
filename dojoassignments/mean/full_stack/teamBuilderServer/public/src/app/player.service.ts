import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';
import 'rxjs'

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }

  retrieveAll() {
    return this._http.get('/players').map(data => data.json()).toPromise();
  }
  
  create(player) {
    return this._http.post('/player', player).map(data => data.json()).toPromise();
  }

  update(player) {
      return this._http.post('/player/edit', player).map(data => data.json()).toPromise();
  }   

  destroy(player) {
    return this._http.post('/player/destroy', player).map(data => data.json()).toPromise();
  }

}
