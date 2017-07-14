import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnInit {

  @Input() power;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.power *= 250
  }

}
