import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrlPlaceOrder = environment.apiEndpoint+'/employees/order/placeorder/';
  baseUrlRemoveCart =environment.apiEndpoint+'/employees/cart/removecart/'
  constructor(private http:HttpClient) { }

  placeOrder(cartId:number,payment_mode:string):Observable<any>{
    const body = { payment_mode }
    console.log(body);
    // return this.http.post<any>(this.baseUrlPlaceOrder+cartId,paymentType);
    return this.http.post<any>(`${this.baseUrlPlaceOrder}${cartId}`, body);
  }
  removeCart(cartId:number):Observable<any>{
    return this.http.delete<any>(this.baseUrlRemoveCart+cartId);
  }

}
