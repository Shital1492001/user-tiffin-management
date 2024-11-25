import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Items } from '../models/cart';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Tiffin } from '../../retailer/models/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart-items',
  imports: [CommonModule,MatCardModule,MatButtonModule],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss'
})
export class CartItemsComponent {
  @Input() cartItem: any = {}; // Use a specific type instead of `any` if possible
  @Output() removeItem = new EventEmitter<number>();

  onRemove() {
    this.removeItem.emit(this.cartItem.tiffin_id);
  }
}

