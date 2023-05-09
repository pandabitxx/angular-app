import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/common/navbar/navbar.component';
import { ToolbarComponent } from 'src/app/common/toolbar/toolbar.component';

@Component({
  selector: 'app-user-delete',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ToolbarComponent],
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {

}
