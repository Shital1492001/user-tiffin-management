import { Component, Input } from '@angular/core';
import {  Tiffin } from '../models/menu';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  imports: [CommonModule,MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss'
})
export class MenuCardComponent {

  @Input()
  tiffin:any;

  constructor(private router: Router) {}

  navigateToDetails(tiffinId: string): void {
    this.router.navigate(['/navbar/tiffin', tiffinId]); // Pass the tiffin._id in the route
  }
}
