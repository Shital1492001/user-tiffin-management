import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { EMPLOYEE_ID } from '../../../shared/custom-validators/utils/constants';
import { markAllControlsAsDirtyAndTouched } from '../../../shared/custom-validators/utils/markAllControlsAsDirtyAndTouched';
import { CustomPasswordValidators } from '../../../shared/custom-validators/custom-password-validators';
import { MatIconModule } from '@angular/material/icon';
import { Organization, Location } from '../models/organizations';
import { OrganizationService } from '../services/organization.service';
import { AuthService } from '../services/auth.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  employeeForm: FormGroup;
  oragnizations: Organization[] = [];
  locations: Location[] = [];
  flag: boolean = false;
  totalItems = 0;

  constructor(
    private organizationService: OrganizationService,
    private authService: AuthService
  ) {
    this.employeeForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.\-_$@*!]+$/),
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        CustomPasswordValidators.logPatternError(),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),

      contact_number: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/),
      ]),

      role_id: new FormControl(EMPLOYEE_ID),
      address: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      role_specific_details: new FormGroup({
        organization_id: new FormControl('', Validators.required),
        org_location: new FormControl('', Validators.required),
        employee_id: new FormControl('', Validators.required),
      }),
    });
  }

  ngOnInit(): void {
    this.fetchAllOrganizations();
    this.checkPasswordsMatch();
  }

  checkPasswordsMatch() {
    const password = this.password?.value;
    const confirmPassword = this.confirmPassword?.value;
    if (password && confirmPassword) {
      const matchError = password === confirmPassword ? null : { match: true };
      this.employeeForm.get('confirmPassword')?.setErrors(matchError);
    }
  }
  get username() {
    return this.employeeForm.get('username');
  }
  get errorMessageUserName(): string {
    const control = this.username;
    if (!control) return '';
    if (control.dirty && control.touched) {
      switch (true) {
        case control.hasError('required'):
          return 'Username is required!';
        case control.hasError('pattern'):
          return 'Only letters, numbers, and special characters . - _ $ @ * ! are allowed.';
        case control.hasError('minlength'):
          return 'Username is at least 3 character!';
        case control.hasError('maxlength'):
          return 'Maximum length is 20 characters.';
        default:
          return '';
      }
    } else {
      return '';
    }
  }
  get email() {
    return this.employeeForm.get('email');
  }

  get errorMessageEmail(): string {
    const control = this.email;
    if (!control) return '';
    if (control.dirty && control.touched) {
      switch (true) {
        case control.hasError('required'):
          return 'Email is required';
        case control.hasError('email'):
          return 'Please enter a valid email';
        default:
          return '';
      }
    } else {
      return '';
    }
  }
  get contact_number() {
    return this.employeeForm.get('contact_number');
  }
  get errorMessageContact_number(): string {
    const control = this.contact_number;
    if (!control) return '';
    if (control.dirty && control.touched) {
      switch (true) {
        case control.hasError('required'):
          return 'Contact Number is required!';
        case control.hasError('pattern'):
          return 'Contact number must be exactly 10 digits!';
        default:
          return '';
      }
    } else {
      return '';
    }
  }
  get address() {
    return this.employeeForm.get('address');
  }
  get errorMessageAddress(): string {
    const control = this.address;
    if (!control) return '';
    if (control.dirty && control.touched) {
      switch (true) {
        case control.hasError('required'):
          return 'Address is required!';
        case control.hasError('minlength'):
          return 'Address is at least 5 character!';
        case control.hasError('maxlength'):
          return 'Address length is 50 characters.';
        default:
          return '';
      }
    } else {
      return '';
    }
  }
  get password() {
    return this.employeeForm.get('password');
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

  get confirmPassword() {
    return this.employeeForm.get('confirmPassword');
  }
  get errorMessageConfirmPassword(): string {
    const control = this.employeeForm.get('confirmPassword');
    if (!control) return '';

    if (control.touched && control.dirty) {
      if (control.hasError('match')) {
        return 'Passwords do not match!';
      }
      if (control.hasError('required')) {
        return 'Confirm password is required!';
      }
    }
    return '';
  }
  get organization_id() {
    return this.employeeForm.get('role_specific_details.organizationId');
  }
  get errorMessageOrganization(): string {
    const control = this.organization_id;
    if (!control) return '';
    if (control.touched && control.dirty) {
      switch (true) {
        case control.hasError('required'):
          return 'Please select organization location';
        default:
          return '';
      }
    } else {
      return '';
    }
  }
  get org_location() {
    return this.employeeForm.get('role_specific_details.org_location');
  }
  get errorMessageOrganization_location(): string {
    const control = this.org_location;
    if (!control) return '';
    if (control.touched && control.dirty) {
      switch (true) {
        case control.hasError('required'):
          return 'Please select organization location!';
        default:
          return '';
      }
    } else {
      return '';
    }
  }

  get employee_id() {
    return this.employeeForm.get('role_specific_details.employee_id');
  }
  get errorMessageEmployee_id(): string {
    const control = this.employee_id;
    if (!control) return '';
    if (control.touched && control.dirty) {
      switch (true) {
        case control.hasError('required'):
          return 'Please enter employee id';
        default:
          return '';
      }
    } else {
      return '';
    }
  }

  fetchAllOrganizations() {
    this.organizationService.getAllOrganizationApi(this.flag).subscribe({
      next: (responseData) => {
        console.log('responseData', responseData);
        this.oragnizations = responseData.data;
        this.totalItems = responseData.pagination.totalItems;
      },

      error: (e) => console.error('Error fetching slots:', e),
      complete: () => console.info('complete'),
    });
  }
  onOrganizationChange(organizationId: string): void {
    this.employeeForm
      .get('role_specific_details.organization_id')
      ?.setValue(organizationId);
    this.organizationService.getOrganizationById(organizationId).subscribe({
      next: (organizationData) => {
        console.log(organizationData);
        this.locations = organizationData.data.org_location;
      },
      error: (err) => {
        console.error('Error fetching by Id:', err);
        //snackbar
      },
    });
  }

  onLocationChange(orgLocation: string) {
    this.employeeForm
      .get('role_specific_details.org_location')
      ?.setValue(orgLocation);
  }

  collectData() {
    console.log('employee', this.employeeForm.value);
    if (this.employeeForm.valid) {
      const { confirmPassword, ...formData } = this.employeeForm.value;
      this.authService.register(formData).subscribe({
        next: (responseData) => {
          console.log('Register', responseData);
          if (responseData.statusCode === 201) {
            console.log('Admin Registered Data', responseData);
            // this.snackbar.showSuccess('Registration successfully!');
            // this.router.navigate(['/']);
          }
        },
        error: (error) => {
          // this.snackbar.showError('Registration failed:');
          console.log('Registration failed:...', error);
        },
      });
    } else {
      markAllControlsAsDirtyAndTouched(this.employeeForm);
      // this.snackbar.showError('Please Fill in all required information');
    }
  }
}
