import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactoUsuario } from 'src/app/pages/users/user-form/models/contacto.usuario';
import { NavbarComponent } from 'src/app/common/navbar/navbar.component';
import { ToolbarComponent } from 'src/app/common/toolbar/toolbar.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, ToolbarComponent],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public usuario: ContactoUsuario;

  constructor(){
    this.usuario = new ContactoUsuario('','','')
  }

  ngOnInit() {

  }

  onSubmit(){
    console.log('Evento submit lanzado!!');
    console.log(this.usuario);
  }
}
