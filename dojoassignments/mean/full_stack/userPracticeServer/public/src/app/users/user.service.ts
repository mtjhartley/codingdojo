import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  login(user: User){
    return this._http.post('/login', user)
    .map(data => data.json())
    .toPromise()
  }

  get_all_users(){
    return this._http.get('/all_users')
    .map(data => data.json())
    .toPromise()
  }

  get_logged_in_user(){
    return this._http.get('/get_logged_in_user')
    .map(data => data.json())
    .toPromise()
  }

}
