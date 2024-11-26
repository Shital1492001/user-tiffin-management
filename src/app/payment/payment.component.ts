import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { PayOnDeliveryComponent } from './pay-on-delivery/pay-on-delivery.component';
import { GrandTotalComponent } from './grand-total/grand-total.component';
import { CartService } from '../cart/services/cart.service';
import { PaymentService } from './services/payment.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [MatGridListModule,PlaceOrderComponent,PayOnDeliveryComponent,GrandTotalComponent,RouterModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  payment_mode: string = 'CoD'; // Default payment type
  grandTotal: number = 0; // Assume this value is calculated from the cart
  cartId: number | null = null;

  constructor(private cartService: CartService,private paymentService:PaymentService,private router:Router) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCart().subscribe({
      next: (response: any) => {
        console.log("Cart Response:", response);
        console.log("Cart Response data:", response.data);
      this.grandTotal = response.data[0].total_amount;
      this.cartId = response.data[0]._id;
      console.log("Total Amount:", this.grandTotal);
      console.log('Cart ID:', this.cartId);
      },
      error: (err) => {
        console.error('Error fetching cart items:', err);
        alert('Failed to fetch cart items');
      }
    });
  }

  onPlaceOrder() {
   // console.log("Inside on place order");
    if (!this.cartId) {
      alert('Cart ID is not available.');
      return;
    }else{
     //console.log("Inside else part of onPlaceOrder")
     this.paymentService.placeOrder(this.cartId,this.payment_mode).subscribe({
      next:(response:any)=>{
        console.log('Order placed successfully:',response);
        alert('Order has been placed successfully!');
      // { path: 'order-success', component: OrderSuccessComponent },
        this.router.navigate(['/order-success']);
        
      },
      error:(err: any)=>{
        console.error('Error placing Order:',err);
        alert('Failed to place order');
      }
     })
    }
    // console.log("Order placed!");
  }
}

