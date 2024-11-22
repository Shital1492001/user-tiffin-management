import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/menu';


@Injectable({
  providedIn: 'root'
})
export class RetailerServiceService {
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2VjYmRiMmMxNDVlYjUwOTJmZmZiZCIsInJvbGUiOiI2NzI4YjZmNDNhNzNjZjc1N2Q4MjRhZTQiLCJpYXQiOjE3MzIyNzM3NDcsImV4cCI6MTczMjI4MDk0N30.kLS1QrbQ3TIWwbCDNUeLxtGNCSQIk171Q3mQZYDp2Wo"
  url = "http://localhost:5000/api/employees"

  constructor(private http : HttpClient) { }

  getAllMenus(): Observable<ApiResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<ApiResponse>(`${this.url}/getAllTiffinofOrg`, { headers });
  }
  

 
  
}
