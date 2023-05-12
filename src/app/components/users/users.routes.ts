import { RouterModule, Routes } from "@angular/router";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserDeleteComponent } from "./user-delete/user-delete.component";
import { appRoutes } from "src/app/app-routing.module";
import { NgModule } from "@angular/core";


export const UsersRoutes: Routes = [
    {path: 'edit', title: 'User Edit', component: UserEditComponent},
    {path: 'add', title: 'Add a new Users', component: UserAddComponent},
    {path: 'delete', title: 'Delete a Users', component: UserDeleteComponent},
];

@NgModule({
    imports: [RouterModule.forChild(UsersRoutes)],//----------
    exports: [RouterModule]
})
export class UsersRoutingModule { }
