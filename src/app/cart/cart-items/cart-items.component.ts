import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Items } from '../models/cart';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Tiffin } from '../../retailer/models/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RetailerServiceService } from '../../retailer/service/retailer-service.service';

@Component({
  selector: 'app-cart-items',
  imports: [CommonModule,MatCardModule,MatButtonModule],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss'
})
export class CartItemsComponent {
  @Input() cartItem: any = {}; // Use a specific type instead of `any` if possible
  @Output() removeItem = new EventEmitter<number>();
constructor(private retailerSerive:RetailerServiceService){

}
  // onRemove() {
  //   this.removeItem.emit(this.cartItem.tiffin_id);
  // }

  // add(cartItem:any){
  //   console.log("clicked",cartItem)
  //  cartItem.quantity = cartItem.quantity + 1;
  //  console.log(cartItem.quantity )
  // }
  // dec(cartItem:any){
  //   cartItem.quantity = cartItem.quantity + 1;
  //   console.log(cartItem.quantity )

  // }

  ngOnInit() {
    // Load quantity from localStorage on initialization
    const storedCart = this.getStoredCart();
    if (storedCart[this.cartItem.tiffin_id]) {
      this.cartItem.quantity = storedCart[this.cartItem.tiffin_id];
    }
  }

  onRemove() {
    this.removeItem.emit(this.cartItem.tiffin_id);
    // this.removeFromStoredCart(this.cartItem.tiffin_id);
  }

  add(cartItem: any) {
    cartItem.quantity += 1;
    this.updateStoredCart(cartItem.tiffin_id, cartItem.quantity);
    this.updateTiffinQuantity(cartItem.tiffin_id, cartItem.quantity,"add")
   
  }

  dec(cartItem: any) {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      this.updateStoredCart(cartItem.tiffin_id, cartItem.quantity);
      this.updateTiffinQuantity(cartItem.tiffin_id, cartItem.quantity,"dec")
    }
  

  }

  // Helper to update the cart in localStorage
  private updateStoredCart(id: string, quantity: number) {
    const storedCart = this.getStoredCart();
    storedCart[id] = quantity;
    localStorage.setItem('cart', JSON.stringify(storedCart));
  }

  // Helper to remove an item from localStorage
  removeFromStoredCart(id: string) {
    const storedCart = this.getStoredCart();
    delete storedCart[id];
    localStorage.setItem('cart', JSON.stringify(storedCart));
  }

  // Helper to get the cart from localStorage
  private getStoredCart(): { [key: string]: number } {
    return JSON.parse(localStorage.getItem('cart') || '{}');
  }

  updateTiffinQuantity(tiffin_id:number,quantity:number,status:"add"|"dec"){
    const cartData = {quantity:quantity,status:status}
    
    this.retailerSerive.updateQuantity(tiffin_id,cartData).subscribe(
      (response) => {
        console.log("Added to cart successfully:", response);
      },
      (error) => {
        console.error("Error adding to cart:", error);
      }
    );
    }
}

