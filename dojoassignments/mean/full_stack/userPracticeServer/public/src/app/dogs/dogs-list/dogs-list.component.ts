import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dog } from './../dog';
import { DogService } from './../dog.service';
import { User } from './../../users/user';
import { UserService } from './../../users/user.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {
  dog_list: Array<Dog>
  current_user: User

  constructor(private _dogService: DogService,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._dogService.get_all_dogs()
    .then(data => this.dog_list = data)
    .catch(err => console.log(err))

    this._userService.get_logged_in_user()
    .then(data => {
      if (data) {
      this.current_user = data
    } else {
      this._router.navigate(["/login"])
    }
  })
  .catch(err => {console.log(err)})
  }

  getDogs() {
    this._dogService.get_all_dogs()
    .then((data)=> {
      this.dog_list = data
    })
    .catch((err) => {console.log(err)})
  }

  delete(dog){
    this._dogService.destroy_dog(dog)
    .then(()=> {this.getDogs()})
    .catch((err) => {console.log("the error is: ", err)})
  }
}
