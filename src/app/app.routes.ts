import { Routes } from '@angular/router';
import { MenuDetailsComponent } from './retailer/menu-details/menu-details.component';
import { MenuListComponent } from './retailer/menu-list/menu-list.component';
// import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    // {
    //     path:'',
    //     component:LoginComponent
    // },
    // {
    //     path:'login',
    //     component:LoginComponent
    // }
    {
        path:'',
        component:MenuListComponent
    },
    {
        path:'menus',component:MenuListComponent
    },

    { 
      path: 'tiffin/:id', 
      component: MenuDetailsComponent
     },
    
];
