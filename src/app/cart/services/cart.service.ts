import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { getCartResponse } from '../models/cart';
import { Tiffin } from '../../retailer/models/menu';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getCartUrl = environment.apiEndpoint + '/employees/cart/getcart';
  removeCartUrl = environment.apiEndpoint + '/employees/cart/removetiffinfromcart/';
  constructor(private http:HttpClient) { }
  
  getCart(): Observable<getCartResponse> {
    const observableData = this.http.get<getCartResponse>(this.getCartUrl);
    return observableData;
  }
  removeTiffinFromCart(tiffinId:number): Observable<any> {
    const observableData = this.http.delete<any>(this.removeCartUrl+tiffinId);
    return observableData;
  }
  
}
