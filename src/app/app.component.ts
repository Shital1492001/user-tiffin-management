import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { MenuCardComponent } from './retailer/components/menu-card/menu-card.component';
import { MenuListComponent } from './retailer/menu-list/menu-list.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user-tiffin-management';
}
