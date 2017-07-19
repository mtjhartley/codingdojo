import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Dog } from './dog';

@Injectable()
export class DogService {

  constructor(private _http: Http) { }

  get_all_dogs(){
    return this._http.get('/dogs')
    .map(data => data.json())
    .toPromise()
  }

  create_dog(dog){
    return this._http.post('/dogs/add', dog)
    .map(data => data.json())
    .toPromise()

  }
  destroy_dog(dog) {
    return this._http.post('/dogs/destroy', dog)
    .map(data => data.json())
    .toPromise()
  }

  update_dog(dog) {
    return this._http.post('/dogs/update', dog)
    .map(data => data.json())
    .toPromise()
  }

  get_one(dog_id) {
    console.log("dog_id from service", dog_id)
    return this._http.post('/dogs/id', {dog_id: dog_id})
    .map(data => data.json())
    .toPromise()
    
  }

}
