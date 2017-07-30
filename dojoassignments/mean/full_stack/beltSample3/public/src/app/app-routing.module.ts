import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersLoginComponent } from "./users/users-login/users-login.component"
import { UsersDashboardComponent } from "./users/users-dashboard/users-dashboard.component"
import { UsersScoresComponent } from "./users/users-dashboard/users-scores/users-scores.component"
import { UsersAddQuestionComponent } from "./users/users-dashboard/users-add-question/users-add-question.component"
import { UsersPlayComponent } from "./users/users-dashboard/users-play/users-play.component"

const routes: Routes = [
  { path: "login", component: UsersLoginComponent },
  { path: "dashboard", component: UsersDashboardComponent },
  { path: 'users_scores', component: UsersScoresComponent},
  { path: 'add_new_question', component: UsersAddQuestionComponent},
  { path: 'lets_play', component: UsersPlayComponent},

  { path: "", pathMatch: "full", redirectTo: "/login"},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }