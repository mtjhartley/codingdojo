import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quoteRank';
  quotes = [

  ]

  createQuote(quote){
    console.log(quote)
    this.quotes.push(quote)
  }

  deleteQuote(quote){
    console.log(quote)
    const idx = this.quotes.indexOf(quote)
    this.quotes.splice(idx, 1)
  }
}
