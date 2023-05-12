import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UsersRoutingModule } from './components/users/users.routes';


// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { VerifyUserComponent } from './components/verify-user/verify-user.component';
import { NavbarComponent } from './components/layout//navbar/navbar.component';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { UserDeleteComponent } from './components/users/user-delete/user-delete.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';

import { environment } from 'src/environments/environment';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    RecoverPasswordComponent,
    RegisterUserComponent,
    VerifyUserComponent,
    NavbarComponent,
    ToolbarComponent,
    UserListComponent,
    UserFormComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    CommonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    RouterModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    UsersRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
