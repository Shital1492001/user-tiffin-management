import { Component, Input } from '@angular/core';
import {  Tiffin } from '../models/menu';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { RetailerServiceService } from '../service/retailer-service.service';
@Component({
  selector: 'app-menu-card',
  imports: [CommonModule,MatCardModule,MatButtonModule,MatIconModule,RouterModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss'
})
export class MenuCardComponent {

  @Input()
  tiffin:any;
  flag:boolean=false;

  constructor(private router: Router,private retailerService: RetailerServiceService) {}

  navigateToDetails(tiffinId: string): void {
    this.router.navigate(['/navbar/tiffin', tiffinId]); // Pass the tiffin._id in the route
  }



  buyNow(tiffin_id:number){
 const cartData = {quantity:1}
 this.retailerService.addTiffinToCart(tiffin_id,cartData).subscribe(
  (response) => {
    console.log("Added to cart successfully:", response);
  },
  (error) => {
    console.error("Error adding to cart:", error);
  }
);
this.router.navigate(['navbar/cart'])
} 

addToCart(tiffin_id:number){
this.flag=true;
const cartData = {quantity:1}
this.retailerService.addTiffinToCart(tiffin_id,cartData).subscribe(
  (response) => {
    console.log("Added to cart successfully:", response);
  },
  (error) => {
    console.error("Error adding to cart:", error);
  }
);
}

  }

