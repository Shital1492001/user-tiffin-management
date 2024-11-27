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
  stars: string[] = [];
  isReadMore = true;

  constructor(private router: Router,private retailerService: RetailerServiceService) {}
  ngOnInit(): void {
    this.generateStars();
  }

  toggleReadMore(event: Event): void {
    event.preventDefault(); // Prevent default anchor behavior
    this.isReadMore = !this.isReadMore;
  }
  // Generate star array based on rating
  generateStars(): void {
    const rating = this.tiffin.tiffin_rating; 
    const fullStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 !== 0; 
    const totalStars = 5; 

    // Add full stars
    this.stars = Array(fullStars).fill('star');

    // Add half star if applicable
    if (hasHalfStar) {
      this.stars.push('star_half');
    }

    // Fill the remaining with empty stars
    const emptyStars = totalStars - this.stars.length;
    this.stars = this.stars.concat(Array(emptyStars).fill('star_outline'));
  }

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

