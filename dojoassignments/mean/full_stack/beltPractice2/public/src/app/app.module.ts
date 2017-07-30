import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
//add the parent directory if components are created side by side
import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';

import { UserService } from './users/user.service';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersLoginComponent,
    UsersDashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService], //add services 
  bootstrap: [AppComponent]
})
export class AppModule { }
