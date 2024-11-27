import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CustomPasswordValidators } from '../../shared/custom-validators/custom-password-validators';
import { AuthService } from '../services/auth.service';
import { markAllControlsAsDirtyAndTouched } from '../../shared/utils/markAllControlsAsDirtyAndTouched';
import { SnackbarService } from '../../shared/services/snackbar.service';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  constructor(private authService:AuthService,private snackbarService:SnackbarService,private router:Router){}
  loginForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      CustomPasswordValidators.logPatternError(),
    ]),
  });

  get email() {
    return this.loginForm.get('email');
  }
  get errorMessageEmail(): string {
    const control = this.email;
    if (!control) return '';
    if (control.dirty && control.touched) {
      switch (true) {
        case control.hasError('required'):
          return 'Email is required!';
        case control.hasError('email'):
          return 'Please enter valid email';
        default:
          return '';
      }
    } else {
      return '';
    }
  }

  get password() {
    return this.loginForm.get('password');
  }
  get errorMessagePassword(): string {
    const control = this.password;
    if (!control) return '';
    if (control.dirty && control.touched) { 
      switch (true) {
        case control.hasError('required'):
          return 'Password is required!';
        case control.hasError('minlength'):
          return 'Minimum 8 characters are required.';
        case control.errors?.['noNumber']:
          return 'At least one number is required.';
        case control.errors?.['noSpecialChars']:
          return 'At least one special character is required.';
        case control.errors?.['noLowerCase']:
          return 'At least one lowercase character is required.';
        case control.errors?.['noUpperCase']:
          return 'At least one uppercase character is required.';
        default:
          return '';
      }
    } else {
      return '';
    }
  }
  onLoginSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Form Submitted', loginData);
      this.authService.login(loginData).subscribe({
            next: (responseData) => {
              console.log('responsedata', responseData);
              sessionStorage.setItem('token', responseData.token); // Save token
              sessionStorage.setItem('refreshToken', responseData.refreshToken);
              this.snackbarService.showSuccess("Login Successfully...!")
              this.router.navigate(['/navbar/menus']);
            },
            error: (e) =>{ console.error('Login Error:', e)
              this.snackbarService.showError("Login Failed...!")
            },
            complete: () => console.info('complete'),
          });
        }
        else{
          markAllControlsAsDirtyAndTouched(this.loginForm);
        }
    }
  }
