import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCartResponse, ApiResponse } from '../models/menu';
// import { environment } from '../../../environments/environment';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RetailerServiceService {

 baseUrlAllMenus = environment.apiEndpoint+'/employees/getallretailerswithtiffin';
 baseUrlAddToCart = environment.apiEndpoint+'/employees/cart/addtiffintocart/';
 baseUrlGetTiffinById=environment.apiEndpoint+'/employees/getTiffinofOrgById/';
 baseUrlUpdateQuantity=environment.apiEndpoint+'/employees/cart/updatetiffinquantity/'

  constructor(private http : HttpClient) { }

  getAllMenus(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlAllMenus);
  }

  getTiffinById(tiffinId: string): Observable<any> {
    const obs=this.http.get<any>(this.baseUrlGetTiffinById + tiffinId);
    return obs;
  }

  addTiffinToCart(tiffinId: number, cartData: { quantity: number }): Observable<AddCartResponse> {
    
    return this.http.post<AddCartResponse>(this.baseUrlAddToCart+tiffinId, cartData);
  }

  updateQuantity(tiffinId:number,cartData:{quantity:number,status:"add"|"dec"}){
    console.log("update quantity",cartData,tiffinId)
    return this.http.put<any>(this.baseUrlUpdateQuantity+tiffinId, cartData);
  }
  
  
  

 
  
}
