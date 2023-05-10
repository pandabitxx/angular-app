import {RouterModule, Routes} from "@angular/router";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { ModuleWithProviders } from "@angular/core";
import { UserListComponent } from "./pages/users/user-list/user-list.component";
import { LoginComponent } from "./pages/layout/login/login.component";
import { HomeComponent } from "./pages/layout/home/home.component";

export const appRoutes: Routes = [
    {path: '', component:  LoginComponent},
    {path: 'list', component:  UserListComponent},
    {path: 'form', component:  UserFormComponent},
    {path: 'home', component:  HomeComponent},


    //Lazy loading
    {
    path: 'list',
    loadChildren: () =>
        import('./pages/users.routes').then((routes) => routes.UsersRoutes)
    }
];

export class AppRoutingModule { }
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);