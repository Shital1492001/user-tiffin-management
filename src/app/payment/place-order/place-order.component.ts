import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-place-order',
  imports: [MatButtonModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.scss'
})
export class PlaceOrderComponent {
  @Output() placeOrder = new EventEmitter<void>();

  onPlaceOrder() {
    // Trigger the parent to place the order
    this.placeOrder.emit();
  }
}
