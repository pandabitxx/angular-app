import {RouterModule, Routes} from "@angular/router";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { ModuleWithProviders } from "@angular/core";
import { UserListComponent } from "./pages/users/user-list/user-list.component";
import { UserAddComponent } from "./pages/users/user-add/user-add.component";
import { UserEditComponent } from "./pages/users/user-edit/user-edit.component";

export const appRoutes: Routes = [
    {path: 'list', component:  UserListComponent},
    {path: 'add-users', component:  UserAddComponent},
    {path: 'config-users', component:  UserEditComponent},
    {path: 'form', component:  UserFormComponent},


    //Para las rutas hijas de users 
    // {
    //     path: 'users',
    //     loadChildren: () =>
    //         import('./pages/users.routes').then((routes) => routes.UsersRoutes)
    // }
];

export class AppRoutingModule { }
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);