import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trivia } from './../trivia';
import { TriviaService } from './../trivia.service';
import { User } from './../../user';
import { UserService } from './../../user.service';


@Component({
  selector: 'app-users-add-question',
  templateUrl: './users-add-question.component.html',
  styleUrls: ['./users-add-question.component.css']
})
export class UsersAddQuestionComponent implements OnInit {
  new_trivia = new Trivia();
  current_user = new User;
  



  constructor(
    private _triviaService: TriviaService,
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.new_trivia = new Trivia();
    this._userService.get_logged_in_user()
    .then(data => {
      if (data) {
        this.current_user = data
      } else {
        this._router.navigate(['/login'])
      }
    })
    .catch(err => {console.log(err)})
  }

  addQuestion() {
    this.new_trivia.options.push(this.new_trivia.correct_answer) 
    this.new_trivia.options.push(this.new_trivia.incorrect_answer_1)
    this.new_trivia.options.push(this.new_trivia.incorrect_answer_2)
    this._triviaService.add_question(this.new_trivia)
    .then(() => {
      console.log('before alert')
      alert("Your question was successfully submitted! Let's play :)")
      console.log('after alert')
      this._router.navigate(['/users_scores'])
    })
    .catch((err) => console.log(err))
  }

}
