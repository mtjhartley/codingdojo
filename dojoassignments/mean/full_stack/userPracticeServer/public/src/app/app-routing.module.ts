import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersLoginComponent } from "./users/users-login/users-login.component"
import { UsersDashboardComponent } from "./users/users-dashboard/users-dashboard.component"

import { DogsListComponent } from "./dogs/dogs-list/dogs-list.component"
import { DogsCreateComponent } from "./dogs/dogs-create/dogs-create.component"
import { DogsEditComponent } from "./dogs/dogs-edit/dogs-edit.component"

const routes: Routes = [
  { path: "login", component: UsersLoginComponent },
  { path: "dashboard", component: UsersDashboardComponent },
  { path: "doggies", component: DogsListComponent },
  { path: "dogs/add", component: DogsCreateComponent }, 
  { path: "doggies/edit/:id", component: DogsEditComponent},
  { path: "", pathMatch: "full", redirectTo: "/login"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }