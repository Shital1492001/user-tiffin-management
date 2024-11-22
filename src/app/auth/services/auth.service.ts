import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, LoginResponse } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrlLogin = environment.apiEndpoint + '/auth/login';

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    const setToken = sessionStorage.getItem('token');
    if (setToken) {
      return true;
    }
    return false;
  }

  login(loginCredentials: Login): Observable<LoginResponse> {
    const data = this.http.post<LoginResponse>(
      this.baseUrlLogin,
      loginCredentials
    );
    return data;
  }
}
