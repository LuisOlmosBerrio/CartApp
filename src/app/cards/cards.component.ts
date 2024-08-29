import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() array: any;
  @Output() Click = new EventEmitter();

  fire: number = 1;

  constructor() {}

  ngOnInit() {
    this.fire = Math.floor(this.array.rating.rate);
  }

  click(id: number) {
    this.Click.emit(id);
  }
}
