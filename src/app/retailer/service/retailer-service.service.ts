import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCartResponse, ApiResponse } from '../models/menu';


@Injectable({
  providedIn: 'root'
})
export class RetailerServiceService {
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2VjYmRiMmMxNDVlYjUwOTJmZmZiZCIsInJvbGUiOiI2NzI4YjZmNDNhNzNjZjc1N2Q4MjRhZTQiLCJpYXQiOjE3MzI0NjU4MjEsImV4cCI6MTczMjQ3MzAyMX0.cdtvfIKCzgOpE2pZAe7So97rQgm_VkuI7spr2LRVhYM"
  url = "http://localhost:5000/api/employees"
  // baseUrlAllMenus = environment.apiEndpoint+'/employees/getallretailerswithtiffin';
 // baseUrlAddToCart = /cart/addtiffintocart/';

  constructor(private http : HttpClient) { }

  getAllMenus(): Observable<ApiResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<ApiResponse>(`${this.url}/getAllRetailersWithTiffin`, { headers });
  }

  getTiffinById(tiffinId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`${this.url}/getTiffinofOrgById/${tiffinId}`, { headers });
  }

  

  // addTiffinToCart(tiffinId: number, cartData: { quantity: number }): Observable<AddCartResponse> {
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  //   const url = `${this.url}/cart/addtiffintocart/${tiffinId}`;
  //   return this.http.post<AddCartResponse>(url, cartData,{headers});
  // }

  addTiffinToCart(tiffinId: number, cartData: { quantity: number }): Observable<AddCartResponse> {
    const url = `${this.url}/cart/addtiffintocart/${tiffinId}`;
  
    // Include the Authorization token in the request headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`, // Token added here
      'Content-Type': 'application/json'      // Ensure proper content type
    });
  
    // Send the request with the headers and body
    return this.http.post<AddCartResponse>(url, cartData, { headers });
  }
  
  
  

 
  
}
