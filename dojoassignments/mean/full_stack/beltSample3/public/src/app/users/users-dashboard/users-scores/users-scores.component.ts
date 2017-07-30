import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-users-scores',
  templateUrl: './users-scores.component.html',
  styleUrls: ['./users-scores.component.css']
})
export class UsersScoresComponent implements OnInit {
  current_user = new User;
  user_list: Array<User>
  search_string: string = ''

  constructor(
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._userService.get_logged_in_user()
    .then(data => {
      if (data) {
        this.current_user = data
      } else {
        this._router.navigate(['/login'])
      }
    })
    .catch(err => {console.log(err)})
    
    this._userService.get_all_users()
    .then(data => {this.user_list = data})
    .catch(err => {console.log(err)})
  }

}
