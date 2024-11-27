import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-order-success',
  imports: [MatIconModule,MatButtonModule,RouterModule],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.scss'
})
export class OrderSuccessComponent {
  orderId:number=0;
  constructor(private route:ActivatedRoute,private orderService:OrderService){}
  ngOnInit(): void {
    this.orderId = this.route.snapshot.params['orderId'];
    console.log(this.orderId)
  }
  cancelorder(){

    this.orderService.cancelOrder(this.orderId).subscribe({
      next:(response)=>{
       console.log(this.orderId)
        console.log('Order cancel successfully:',response);
        alert('Order has been cancel successfully!');
        console.log("orderId",this.orderId)
        // this.router.navigate(['/order-success']);
        
      },
      error:(err: any)=>{
        console.error('Error placing Order:',err);
        alert('Failed to place order');
      }
     })
  }

}
