import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css']
})
export class SupersaiyantwoComponent implements OnInit {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.power *= 150
  }

}
