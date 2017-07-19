import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { UsersLoginComponent } from './users/users-login/users-login.component';

import { UserService } from './users/user.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersDashboardComponent,
    UsersLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
