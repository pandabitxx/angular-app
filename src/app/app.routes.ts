import {RouterModule, Routes} from "@angular/router";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { ModuleWithProviders } from "@angular/core";
import { UserListComponent } from "./pages/users/user-list/user-list.component";

export const appRoutes: Routes = [
    {path: 'list', component:  UserListComponent},
    {path: 'form', component:  UserFormComponent},

    {
    path: 'list',
    loadChildren: () =>
        import('./pages/users.routes').then((routes) => routes.UsersRoutes)
    }
];

export class AppRoutingModule { }
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);