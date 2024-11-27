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
   this.status = this.route.snapshot.paramMap.get('status')
  console.log(this.status);
  if(this.status){
    this.orderhistory(this.status);
  }
 
  }
  
  orderhistory(status?:string){
    console.log("Inside")
    console.log(status);
   this.orderHistoryService.orderHistory(status).subscribe({
    next:(response:ApiResponse)=>{
      this.orders = response.data; 
      console.log(response);
    },
    error(err) {
      console.error('Error fetching orders',err);
      alert('Failed to fetch orders');
    },
   })
  }

}
