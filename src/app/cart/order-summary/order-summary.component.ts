import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-summary',
  imports: [MatButtonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
  summary = {
    total: 400,
    deliveryFee: 0,
    discount: 40,
    grandTotal: 360,
  };
}
