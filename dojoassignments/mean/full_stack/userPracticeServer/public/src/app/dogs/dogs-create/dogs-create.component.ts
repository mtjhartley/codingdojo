import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dog } from './../dog';
import { DogService } from './../dog.service';
import { User } from './../../users/user';
import { UserService } from './../../users/user.service';

@Component({
  selector: 'app-dogs-create',
  templateUrl: './dogs-create.component.html',
  styleUrls: ['./dogs-create.component.css']
})
export class DogsCreateComponent implements OnInit {
  new_dog = new Dog;
  current_user: User

  constructor(private _dogService: DogService,
    private _userService: UserService,
  private _router: Router) { }

  ngOnInit() {
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
  addDog() {
    this._dogService.create_dog(this.new_dog)
    .then(() => {this._router.navigate(["/doggies"])})
    .catch((err) => {console.log(err)})
  }

}
