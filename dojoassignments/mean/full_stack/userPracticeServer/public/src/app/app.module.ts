import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { UsersLoginComponent } from './users/users-login/users-login.component';

import { UserService } from './users/user.service';
import { DogService } from './dogs/dog.service';

import { AppRoutingModule } from './app-routing.module';
import { DogsComponent } from './dogs/dogs.component';
import { DogsListComponent } from './dogs/dogs-list/dogs-list.component';
import { DogsCreateComponent } from './dogs/dogs-create/dogs-create.component';
import { DogsEditComponent } from './dogs/dogs-edit/dogs-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersDashboardComponent,
    UsersLoginComponent,
    DogsComponent,
    DogsListComponent,
    DogsCreateComponent,
    DogsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
