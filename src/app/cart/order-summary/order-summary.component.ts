import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-order-summary',
  imports: [MatCardModule,MatButtonModule,MatDividerModule,RouterModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
  tiles: Tile[] = [
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  ];
  @Input() total: number = 0;
  constructor(){}
}
