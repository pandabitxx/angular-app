import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  course: string;
  state: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ana', course: 'Matemáticas', state: 'Inscrita'},
  {position: 2, name: 'Juan', course: 'Física', state: 'Aprobado'},
  {position: 3, name: 'María', course: 'Química', state: 'Reprobado'},
  {position: 4, name: 'Pedro', course: 'Biología', state: 'Inscrito'},
  {position: 5, name: 'Luisa', course: 'Programación', state: 'Aprobada'},
  {position: 6, name: 'Carlos', course: 'Historia', state: 'Retirado'},
  {position: 7, name: 'Miguel', course: 'Inglés', state: 'Inscrito'},
  {position: 8, name: 'Isabel', course: 'Español', state: 'Aprobado'},
  {position: 9, name: 'Fernando', course: 'Arte', state: 'Inscrito'},
  {position: 10, name: 'Laura', course: 'Música', state: 'Aprobada'},
];


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
