import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  @Input() cartItem: any = {}; 
  @Output() removeItem = new EventEmitter<number>();
constructor(private retailerSerive:RetailerServiceService){

}
  ngOnInit() {
    // Load quantity from localStorage on initialization
    const storedCart = this.getStoredCart();
    if (storedCart[this.cartItem.tiffin_id]) {
      this.cartItem.quantity = storedCart[this.cartItem.tiffin_id];
    }
  }
  onRemove() {
    console.log(this.cartItem.tiffin_id)
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

  private updateStoredCart(id: string, quantity: number) {
    const storedCart = this.getStoredCart();
    storedCart[id] = quantity;
    localStorage.setItem('cart', JSON.stringify(storedCart));
  }

  removeFromStoredCart(id: string) {
    const storedCart = this.getStoredCart();
    delete storedCart[id];
    localStorage.setItem('cart', JSON.stringify(storedCart));
  }

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

