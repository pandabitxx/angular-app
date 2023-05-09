import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/common/navbar/navbar.component';
import { ToolbarComponent } from 'src/app/common/toolbar/toolbar.component';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ToolbarComponent],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

}
