import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule,MatInputModule,MatFormFieldModule,MatIconModule,MatButtonModule,MatTooltipModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
constructor(private authService:AuthService,private router:Router){}
onLogout() {
  this.authService.logout();
  this.router.navigate(['/login']); // Redirect to login page
}
}
