import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../../user';
import { UserService } from './../../user.service';
import { Trivia } from './../trivia';
import { TriviaService } from './../trivia.service';



@Component({
  selector: 'app-users-play',
  templateUrl: './users-play.component.html',
  styleUrls: ['./users-play.component.css']
})
export class UsersPlayComponent implements OnInit {
  current_user = new User;
  questions: Array<Trivia>
  users_answers: Array<any>

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _triviaService: TriviaService,

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

    this.users_answers = [undefined, undefined, undefined]
    console.log('getting the questions now')
    this._triviaService.start_game()
    .then((questions) => {
      this.questions = questions.questions
    })
    .catch(err => {console.log(err)})


  }

  gradeTrivia() {
    this.current_user.last_score = 0
    for (var i = 0; i < this.users_answers.length; i++) {
      this.current_user.total++
      if (this.users_answers[i] == 'correct') {
        this.current_user.score = this.current_user.score + 1
        this.current_user.last_score++
      }
    }
    console.log('sending an update on the client side from component')
    this._userService.updateUser(this.current_user)
    .then(() => {
      this._router.navigate(['/users_scores'])
    })

  }


}
