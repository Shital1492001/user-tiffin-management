import { Component } from '@angular/core';
import { ApiResponse, Retailer } from '../models/menu';
import { RetailerServiceService} from '../service/retailer-service.service';
//import { MenuCardComponent } from '../menu-card/menu-card.component';
import { CommonModule } from '@angular/common';
import { MenuCardComponent } from '../menu-card/menu-card.component';

@Component({
  selector: 'app-menu-list',
  // imports: [MenuCardComponent,CommonModule],
  imports: [MenuCardComponent,CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {
 menus: Retailer[] = [];

  constructor(private menuCrud:RetailerServiceService){

  }

  ngOnInit():void{
   this.getMenu();
  }


  getMenu() {
    const obs = this.menuCrud.getAllMenus();
    obs.subscribe({
      next: (response: ApiResponse) => {
        console.log("API Response:", response);
        this.menus = response.data;
        console.log(this.menus);
      },
      error: (err) => {
        console.error("Error fetching menus:", err);
        window.alert("Something went wrong while getting menus");
      }
    });
  }
  
  
}




