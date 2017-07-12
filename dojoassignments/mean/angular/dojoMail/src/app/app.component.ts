import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  number: number = 3;
  users = [
    {
    email: "BIll@gates.com",
    importance: true,
    subject: "New Windows",
    content: "Windows XI will launch in year 2100"
  },
    {
    email: "ada@lovelace.com",
    importance: true,
    subject: "Programming",
    content: "Enchantress of numbers."
  },
    {
    email: "john@carmac.com",
    importance: false,
    subject: "Updated Algo",
    content: "New algorithm for shadow volumes."
  }
  ]
}
