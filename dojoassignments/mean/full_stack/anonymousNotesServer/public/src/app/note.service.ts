import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class NoteService {

  constructor(private _http: Http) { }
  retrieveNotes(){
    return this._http.get('/notes').map(data => data.json()).toPromise();
  }
  addNote(note){
    return this._http.post('/notes', note).map(data => data.json()).toPromise();
  }


}
