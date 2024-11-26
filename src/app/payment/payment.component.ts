import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { PayOnDeliveryComponent } from './pay-on-delivery/pay-on-delivery.component';
import { GrandTotalComponent } from './grand-total/grand-total.component';

@Component({
  selector: 'app-payment',
  imports: [MatGridListModule,PlaceOrderComponent,PayOnDeliveryComponent,GrandTotalComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  paymentType: string = 'cash-on-delivery'; // Default payment type
  grandTotal: number = 100; // Assume this value is calculated from the cart
  
  constructor() {}

  ngOnInit(): void {
    // Fetch or calculate grandTotal here if needed (e.g., from cart service)
  }

  onPlaceOrder() {
    // Handle placing the order (e.g., call an API or handle order logic)
    console.log("Order placed!");
  }
}

