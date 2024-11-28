import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { CartService } from '../../../cart/services/cart.service';
import { Items } from '../../../retailer/models/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { SnackbarService } from '../../services/snackbar.service';
@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,MatTooltipModule,RouterModule,MatBadgeModule,MatSelectModule,MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cartItems: Items[] = [];
  total:number=0;
  cartempty:string=''
  cartLength =0;
  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService,
    private snackbarService:SnackbarService
  ) {}
  ngOnInit(): void {
    this.getCartItems();
  }

  orderHistory(status?: string) {
    console.log('Selected status:', status);
    this.router.navigate(['/navbar/order-history',status])
  }
  onLogout() {
    this.authService.logout();
    this.snackbarService.showSuccess("Logout Successfully..!")
    this.router.navigate(['/login']);
  
  }
  getCartItems() {
    this.cartService.getCart().subscribe({
      next: (response: any) => {
        if(response.message=="Cart not found"){
          this.cartempty="your cart is empty...!"
        }
      this.cartItems = response.data[0].items; 
      this.cartLength = this.cartItems.reduce((accumulator, item) => {
        console.log(item.quantity)
        return accumulator + item.quantity;
      }, 0);

      console.log("quantity length",this.cartLength)
      this.total = response.data[0].total_amount;
      console.log("Total Amount:", this.total);
      },
      error: (err) => {
        console.error('Error fetching cart items:', err);
        alert('Failed to fetch cart items');
      }
    });
  }
}
