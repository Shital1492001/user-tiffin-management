import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { RetailerServiceService } from '../service/retailer-service.service';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-menu-details',
  imports: [MatButtonModule,MatIconModule,CommonModule,MatCardModule,MatCard],
  templateUrl: './menu-details.component.html',
  styleUrl: './menu-details.component.scss'
})
export class MenuDetailsComponent {
  cartButtonText = 'Add to Cart';
  showCartOptions = false;
  quantity = 0; 

  @Input()
  tiffinDetails:any;

  constructor(private route : ActivatedRoute,private retailerService: RetailerServiceService){}

  ngOnInit():void{
    // console.log(this.route.params.id);
    //console.log(this.route.snapshot.paramMap.get('id'));
    const storedQuantity = localStorage.getItem('quantity');
    if (storedQuantity) {
      this.quantity = parseInt(storedQuantity, 10);
    }
    const tiffinId = this.route.snapshot.paramMap.get('id')
    if(tiffinId){
      this.getTiffinDetails(tiffinId);
    }
  }

  getTiffinDetails(tiffinId: string){
    const obs = this.retailerService.getTiffinById(tiffinId)
    .subscribe({
      next:(response)=>{
        this.tiffinDetails = response.data;
        console.log(this.tiffinDetails);
      },error(err) {
        console.error('Error fetching tiffin details:', err);
        alert('Failed to fetch tiffin details');
      },
    })

  }
  // product = {
  //   name: 'veg thali',
  //   price: 100,
  //   originalPrice: 120,
  //   discount: 17,
  //   image: '', // Add image URL here
  // };

  // store = {
  //   name: 'startiffins',
  // };

 handleCartActions(){
  if(this.quantity == 0){
    this.quantity = 1;
   
  }
  localStorage.setItem('quantity', this.quantity.toString());
 }

 incrementQuantity(event: Event){
  event.stopPropagation();
  this.quantity++;
  localStorage.setItem('quantity', this.quantity.toString());  
 }

 decrementQuantity(event:Event){
  event.stopPropagation();
  if(this.quantity > 1){
    this.quantity--;
    console.log(this.quantity);
  }else{
    this.quantity = 0;
  }
  localStorage.setItem('quantity', this.quantity.toString()); 
 }


// goToCart(tiffin_id,quantity){
  
//   if(this.quantity > 0){
//     alert("Go to cart");
    
//     //make api call
//   }
// }

// goToCart(tiffin_id: number, quantity: number): void {
//   const cartData = { tiffin_id, quantity };
//   console.log("Cart Data:", cartData);
//   if(quantity > 0){
//     this.retailerService.addTiffinToCart(cartData).subscribe(
//       (response) => {
//         console.log("Added to cart successfully:", response);
//       },
//       (error) => {
//         console.error("Error adding to cart:", error);
//       }
//     );
//   }
  
  
 
// }

goToCart(tiffin_id: number, quantity: number): void {
  if (quantity > 0) {
    const cartData = { quantity }; // Only send quantity in the body
    console.log("Cart Data:", { tiffin_id, ...cartData });

    this.retailerService.addTiffinToCart(tiffin_id, cartData).subscribe(
      (response) => {
        console.log("Added to cart successfully:", response);
      },
      (error) => {
        console.error("Error adding to cart:", error);
      }
    );
  } else {
    console.warn("Quantity must be greater than 0 to add to cart.");
  }
}


buyNow(tiffin_id: number, quantity: number){
  this.quantity = 1;  
  localStorage.setItem('quantity', this.quantity.toString());
  this.goToCart(tiffin_id,quantity);
 
}



}