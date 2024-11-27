import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/order-history';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  baseUrlOrderHistory = environment.apiEndpoint+'/employees/getAllOrders'
  constructor(private http:HttpClient) { }
  

  orderHistory(status?: string): Observable<ApiResponse> {
    const url = status ? `${this.baseUrlOrderHistory}?status=${status}` : this.baseUrlOrderHistory;
    return this.http.get<ApiResponse>(url);
  }
}
