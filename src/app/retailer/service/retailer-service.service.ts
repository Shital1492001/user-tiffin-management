import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCartResponse, ApiResponse } from '../models/menu';


@Injectable({
  providedIn: 'root'
})
export class RetailerServiceService {
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2VjYmRiMmMxNDVlYjUwOTJmZmZiZCIsInJvbGUiOiI2NzI4YjZmNDNhNzNjZjc1N2Q4MjRhZTQiLCJpYXQiOjE3MzI1MDk4ODEsImV4cCI6MTczMjUxNzA4MX0.XVE7odvV-5rzGi0XHLxj4vn1tNh7rVSPihcRzjqzWQU"
  url = "http://localhost:5000/api"
  

  constructor(private http : HttpClient) { }

  getAllMenus(): Observable<ApiResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<ApiResponse>(`${this.url}/employees/getAllRetailersWithTiffin`, { headers });
  }

  getTiffinById(tiffinId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`${this.url}/employees/getTiffinofOrgById/${tiffinId}`, { headers });
  }


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
