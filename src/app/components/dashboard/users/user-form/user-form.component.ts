import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from './models/contacto.usuario';

@Component({
  selector: 'app-user-form',
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

