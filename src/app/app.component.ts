import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MenuListComponent } from './retailer/menu-list/menu-list.component';
import { MenuDetailsComponent } from './retailer/menu-details/menu-details.component';

@Component({
  selector: 'app-root',
  // imports: [NavbarComponent,RouterOutlet,MenuListComponent],
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user-tiffin-management';
}
