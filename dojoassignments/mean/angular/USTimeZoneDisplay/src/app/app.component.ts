import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timeZones = {'PST': true, 'MST': false, 'CST': false, 'EST': false};
  title = 'US TIME ZONE DISPLAY';
  date = new Date();
  changeTime(btn){
    for (let zone in timeZones)
    console.log("i change the time!")

  }
}
