import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-cart',
  imports: [MatGridListModule,CartItemsComponent,OrderSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 5, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
