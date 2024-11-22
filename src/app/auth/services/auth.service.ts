import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, LoginResponse } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  isAuthenticated(): boolean {
    const setToken = sessionStorage.getItem('token');
    if (setToken) {
      return true;
    }
    return false;
  }

  baseUrlLogin = environment.apiEndpointauth + '/login';
  login(loginCredentials: Login): Observable<LoginResponse> {
    const data = this.http.post<LoginResponse>(this.baseUrlLogin, loginCredentials);
    return data;
  }
}
