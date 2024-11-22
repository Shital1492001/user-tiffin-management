import { Component, Input } from '@angular/core';
import {  Tiffin } from '../models/menu';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu-card',
  imports: [CommonModule,MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss'
})
export class MenuCardComponent {

  @Input()
  tiffin:any;
}
