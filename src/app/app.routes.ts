import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
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
