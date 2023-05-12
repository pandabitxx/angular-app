import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { VerifyUserComponent } from './components/verify-user/verify-user.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';

export const appRoutes: Routes = [

  //Login Buttons
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registrar-usuario', component: RegisterUserComponent },
  { path: 'verificar-correo', component: VerifyUserComponent },
  { path: 'recuperar-password', component: RecoverPasswordComponent },

  //Toolbal Buttons
  { path: 'dashboard', component: UserListComponent },
  { path: 'formulario-contacto', component: UserFormComponent },
  { path: 'salir', redirectTo: 'login', pathMatch: 'full' },
  //{ path: '**', redirectTo: 'login', pathMatch: 'full' },

  //dashboard Buttons
  //lazyLoading
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/users/users.routes').then((routes) => routes.UsersRoutes)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
