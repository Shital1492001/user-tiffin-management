import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CartService } from './services/cart.service';
import { Items } from './models/cart';
import { CommonModule } from '@angular/common';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-cart',
  imports: [MatGridListModule,CartItemsComponent,OrderSummaryComponent,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: Items[] = [];
  total:number=0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCart().subscribe({
      next: (response: any) => {
        console.log("Cart Response:", response);
        console.log("Cart Response data:", response.data);

      // Access 'items' directly from the response
      this.cartItems = response.data[0].items; 
      console.log("Cart Items:", this.cartItems);

      // Access total_amount directly from the response
      this.total = response.data[0].total_amount;
      console.log("Total Amount:", this.total);
      },
      error: (err) => {
        console.error('Error fetching cart items:', err);
        alert('Failed to fetch cart items');
      }
    });
  }

  removeFromCart(tiffinId: number) {
    this.cartService.removeTiffinFromCart(tiffinId).subscribe({
      next: () => {
        // this.cartItems = this.cartItems.filter(item => item.tiffin_id !== tiffinId);
        alert('Item removed from cart');
      },
      error: (err) => {
        console.error('Error removing item from cart:', err);
        alert('Failed to remove item from cart');
      }
    });
  }
}