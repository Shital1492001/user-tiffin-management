import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grand-total',
  imports: [],
  templateUrl: './grand-total.component.html',
  styleUrl: './grand-total.component.scss'
})
export class GrandTotalComponent {
  @Input() total: number = 0;
}
