import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/common/navbar/navbar.component';
import { ToolbarComponent } from 'src/app/common/toolbar/toolbar.component';
import { ContactoUsuario } from '../user-form/models/contacto.usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, ToolbarComponent],
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent implements OnInit {
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