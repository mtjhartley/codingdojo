import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { UserService } from './users/user.service';
import { TriviaService } from './users/users-dashboard/trivia.service';
import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { UsersScoresComponent } from './users/users-dashboard/users-scores/users-scores.component';
import { FilterPipe } from './users/users-dashboard/users-scores/filter.pipe';
import { SortPipe } from './users/users-dashboard/users-scores/sort.pipe';
import { UsersAddQuestionComponent } from './users/users-dashboard/users-add-question/users-add-question.component';
import { UsersPlayComponent } from './users/users-dashboard/users-play/users-play.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersLoginComponent,
    UsersDashboardComponent,
    UsersScoresComponent,
    FilterPipe,
    SortPipe,
    UsersAddQuestionComponent,
    UsersPlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [UserService, TriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
