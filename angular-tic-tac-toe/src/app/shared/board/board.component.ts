import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  // This is the size of the board
  @Input() size: number;
  numbers: Array<number>;

  ngOnInit() {
    this.numbers = Array.from(Array(this.size), (x, i) => i); 
  }

}
