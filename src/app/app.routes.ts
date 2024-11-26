import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
// import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RegisterComponent } from './auth/register/register.component';
import { MenuListComponent } from './retailer/menu-list/menu-list.component';
import { MenuDetailsComponent } from './retailer/menu-details/menu-details.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path: 'navbar',
        component: NavbarComponent, 
        children: [
          { path: 'menus', component: MenuListComponent },
          { path: 'cart', component: CartComponent }, 
          { 
            path: 'tiffin/:id', 
            component: MenuDetailsComponent
           },
           { 
            path: 'payment', 
            component: PaymentComponent
           },
        ],
        canActivate: [AuthGuard], 
      },
      { path: 'order-success', component: OrderSuccessComponent },
];
