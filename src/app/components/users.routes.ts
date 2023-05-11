import { Routes } from "@angular/router";
import { UserAddComponent } from "./users/user-add/user-add.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { UserDeleteComponent } from "./users/user-delete/user-delete.component";


export const UsersRoutes: Routes = [
    {path: 'edit', title: 'User Edit', component: UserEditComponent},
    {path: 'add', title: 'Add a new Users', component: UserAddComponent},
    {path: 'delete', title: 'Delete a Users', component: UserDeleteComponent},
];
