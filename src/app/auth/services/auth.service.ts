import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, LoginResponse } from '../models/employee';
import { Employee,EmployeeRegister } from '../models/employee';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrlLogin = environment.apiEndpoint+'/auth/login';
  baseUrlRegister= environment.apiEndpoint+ '/auth/register';

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

  register(
    formData: Employee
  ): Observable<EmployeeRegister> {

    // console.log(admin)
    return this.http.post<EmployeeRegister>(this. baseUrlRegister, formData);
  }
  logout(): void {
    sessionStorage.removeItem('token'); // Remove token from sessionStorage
    sessionStorage.removeItem('refreshToken'); // Remove refreshToken if applicable
    console.log('User logged out successfully.');
  }
}
