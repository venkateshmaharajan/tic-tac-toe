import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  // This is the size of the board
  @Input() size: number;
  numbers: Array<number>;

  icons: Array<Array<string>>;

  crossIcon: string = "close";
  zeroIcon: string = "radio_button_unchecked";

  turn: boolean;
  
  ngOnInit() {
    this.numbers = Array.from(Array(this.size), (x, i) => i); 
    this.icons = Array.from( Array(this.size), (x, i) => 
      Array.from(Array(this.size), (y, j) => ``))
    this.turn = true;
  }

  onCellClick(i: number, j: number) {
    if ( this.turn )
      this.icons[i][j] = this.zeroIcon;
    else 
      this.icons[i][j] = this.crossIcon;

    console.log( `Move: ${this.icons[i][j]} i=${i} j=${j}` );
    this.turn = !this.turn;
  }
}
