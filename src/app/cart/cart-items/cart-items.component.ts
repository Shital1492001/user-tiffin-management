import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  imports: [CommonModule],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss'
})
export class CartItemsComponent {
  items = [
    { name: 'Veg Thali', price: 200, discount: 17, quantity: 2 },
  ];
}

