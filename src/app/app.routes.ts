import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'cart',
        component:CartComponent,
        canActivate:[AuthGuard],
    },
    {
        path:'navbar',
        component:NavbarComponent,
        canActivate:[AuthGuard]
    }
];
