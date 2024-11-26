import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { PayOnDeliveryComponent } from './pay-on-delivery/pay-on-delivery.component';
import { GrandTotalComponent } from './grand-total/grand-total.component';
import { CartService } from '../cart/services/cart.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [MatGridListModule,PlaceOrderComponent,PayOnDeliveryComponent,GrandTotalComponent,RouterModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  paymentType: string = 'cash-on-delivery'; // Default payment type
  grandTotal: number = 0; // Assume this value is calculated from the cart

  constructor(private cartService: CartService,private router:Router) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCart().subscribe({
      next: (response: any) => {
        console.log("Cart Response:", response);
        console.log("Cart Response data:", response.data);
      this.grandTotal = response.data[0].total_amount;
      console.log("Total Amount:", this.grandTotal);
      },
      error: (err) => {
        console.error('Error fetching cart items:', err);
        alert('Failed to fetch cart items');
      }
    });
  }

  onPlaceOrder() {
    this.router.navigate(['/order-success']);
    console.log("Order placed!");
  }
}

