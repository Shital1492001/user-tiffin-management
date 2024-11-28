import { Component } from '@angular/core';
import { OrderHistoryService } from './services/order-history.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ApiResponse, Order } from './models/order-history';
import { MatTableModule } from '@angular/material/table';

// BrowserModule,
//     BrowserAnimationsModule, // Required for Angular Material
//     MatTableModule,          // Required for Material Table
 //   MatButtonModule 

@Component({
  selector: 'app-order-history',
  imports: [MatButtonModule,RouterModule,CommonModule,MatTableModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss'
})
export class OrderHistoryComponent {
  // orders: any[] = [];
  orders: Order[] = [];
  //  status:string="";
   status: string | null = '';
  constructor(private route:ActivatedRoute,private orderHistoryService:OrderHistoryService){}
  ngOnInit():void{
    this.route.paramMap.subscribe((params) => {
      this.status = params.get('status'); // Get 'status' from route
      console.log('Status:', this.status);
      this.fetchOrders(this.status); // Fetch orders dynamically
    });
  }
  
  fetchOrders(status: string | null) {
    const formattedStatus = status ?? undefined;
    this.orderHistoryService.orderHistory(formattedStatus).subscribe({
      next: (response: ApiResponse) => {
        this.orders = response.data;
        console.log('Orders:', this.orders);
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
        alert('Failed to fetch orders');
      },
    });
  }
  
}
