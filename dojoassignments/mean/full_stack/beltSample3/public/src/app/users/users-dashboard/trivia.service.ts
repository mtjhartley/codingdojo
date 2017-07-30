import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Trivia } from './trivia';

@Injectable()
export class TriviaService {

  constructor(
    private _http: Http
  ) { }

  add_question(question){
    return this._http.post('/add_question', question)
    .map(data => data.json())
    .toPromise();
  }

  start_game() {
    return this._http.get('/start_game')
    .map(data => data.json())
    .toPromise()
  }

}
