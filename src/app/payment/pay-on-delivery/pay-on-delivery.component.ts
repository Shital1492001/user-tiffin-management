import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pay-on-delivery',
  imports: [],
  templateUrl: './pay-on-delivery.component.html',
  styleUrl: './pay-on-delivery.component.scss'
})
export class PayOnDeliveryComponent {
  @Input() paymentType: string = '';
}
