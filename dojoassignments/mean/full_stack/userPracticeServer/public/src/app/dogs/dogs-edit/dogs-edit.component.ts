import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Dog } from './../dog';
import { DogService } from './../dog.service';
import { User } from './../../users/user';
import { UserService } from './../../users/user.service';

@Component({
  selector: 'app-dogs-edit',
  templateUrl: './dogs-edit.component.html',
  styleUrls: ['./dogs-edit.component.css']
})
export class DogsEditComponent implements OnInit {
  dog = new Dog;
  current_user: User
  dog_list: Array<Dog>

  constructor(
    private _route: ActivatedRoute,
    private _dogService: DogService,
    private _userService: UserService,
    private _router: Router
  ) { 
  }

  ngOnInit() {
    this.getDogs()

    this._route.params.subscribe(
      param => {
        console.log('request to get one dog from client')
        console.log(param.id)
        this._dogService.get_one(param.id)
        .then((data) => {
          this.dog = data
        })
        .catch((err) => {console.log(err)})
        
      }
    )
  }

  getDogs() {
    this._dogService.get_all_dogs()
    .then((data) => {
      this.dog_list = data
    })
    .catch((err) => {console.log(err)})
  }

  update(dog) {
    this._dogService.update_dog(this.dog);
    this._router.navigate(['/doggies'])
  }

}
